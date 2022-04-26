const { AuthenticationError } = require('apollo-server-express');
const { User, Product, Category, Order } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
    Query: {
        categories: async () => {
            return await Category.find();
        },
        products: async (parent, { category, name }) => {
            const params = {};

            if (category) {
                params.category = category;
            }

            if (name) {
                params.name = {
                    $regex: name
                };
            }

            return await Product.find(params).populate('category');
        },
        product: async (parent, { _id }) => {
            return await Product.findById(_id).populate('category');
        },
        user: async (parent, args, context) => {
            if (context.user) {
                const user = await User.findById(context.user._id).populate({
                    path: 'orders.products',
                    populate: 'category'
                });

                user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

                return user;
            }

            throw new AuthenticationError('Not logged in');
        },
        order: async (parent, { _id }, context) => {
            if (context.user) {
                const user = await User.findById(context.user._id).populate({
                    path: 'orders.products',
                    populate: 'category'
                });

                return user.orders.id(_id);
            }

            throw new AuthenticationError('Not logged in');
        },
        checkout: async (parent, args, context) => {
            const url = new URL(context.headers.referer).origin;
            const order = new Order({ products: args.products });
            const line_items = [];

            const { products } = await order
                .populate('products')
                .execPopulate();

            for (let i = 0; i < products.length; i++) {
                const product = await stripe.products.create({
                    name: products[i].name,
                    description: products[i].description,
                    images: [`${url}/images/${products[i].image}`]
                });

                const price = await stripe.prices.create({
                    product: product.id,
                    unit_amount: products[i].price * 100,
                    currency: 'usd'
                });

                line_items.push({
                    price: price.id,
                    quantity: 1
                });
            }

            const session = await stripe.checkout.sessions.create({
                payment_method_types: ['card'],
                line_items,
                mode: 'payment',
                success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
                cancel_url: `${url}/`
            });

            return { session: session.id };
        }
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },
        addOrder: async (parent, { products }, context) => {
            console.log(context);
            if (context.user) {
                const order = new Order({ products });

                await User.findByIdAndUpdate(context.user._id, {
                    $push: { orders: order }
                });

                return order;
            }

            throw new AuthenticationError('Not logged in');
        },
        updateUser: async (parent, args, context) => {
            if (context.user) {
                return await User.findByIdAndUpdate(context.user._id, args, {
                    new: true
                });
            }

            throw new AuthenticationError('Not logged in');
        },
        updateProduct: async (parent, { _id, quantity }) => {
            const decrement = Math.abs(quantity) * -1;

            return await Product.findByIdAndUpdate(
                _id,
                { $inc: { quantity: decrement } },
                { new: true }
            );
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);

            return { token, user };
        }
    }
};

module.exports = resolvers;

// import jwt from 'jsonwebtoken';
// import bcrypt from 'bcryptjs';
// import validator from 'validator';
// import mongoose from 'mongoose';

// import Category from '../models/category';
// import Product from '../models/Product';
// import User from '../models/user';
// import { productsPresenter, productPresenter } from '../utils/presenter';

// const resolvers = {
//     categories: async () => {
//         return await Category.find({}).sort([['createdAt', -1]]);
//     },
//     products: async () => {
//         const products = await Product.find({}).sort([['createdAt', -1]]);
//         const updatedProducts = productsPresenter(products);

//         return updatedProducts;
//     },
//     categoryProducts: async (_, { category_id }) => {
//         try {
//             const category = mongoose.Types.ObjectId(category_id);
//             const products = await Product.find({ category }).sort([
//                 ['createdAt', -1]
//             ]);
//             const updatedProducts = productsPresenter(products);

//             return updatedProducts;
//         } catch (err) {
//             return { error: err.message };
//         }
//     },
//     product: async (_, { product_id }) => {
//         try {
//             const _id = mongoose.Types.ObjectId(product_id);
//             const product = await Product.findById(_id);
//             const updatedProduct = productPresenter(product);

//             return updatedProduct;
//         } catch (err) {
//             return { error: err.message };
//         }
//     }
// };

// const Mutation = {
//     authLogin: async (_, { email, password }) => {
//         try {
//             const user = await User.findOne({ email });

//             if (!user) {
//                 return { error: 'Something went wrong.', user };
//             }

//             const isEqual = await bcrypt.compare(password, user.password);

//             if (!isEqual) {
//                 return { error: 'Something went wrong.' };
//             }

//             const token = jwt.sign(
//                 {
//                     username: user.username,
//                     email: user.email,
//                     userId: user._id.toString()
//                 },
//                 process.env.JWT_SECRET,
//                 { expiresIn: '1d' }
//             );

//             return { token, userId: user._id.toString() };
//         } catch (err) {
//             return { error: err.message };
//         }
//     },
//     authSignup: async (_, { firstname, lastname, email, password }) => {
//         const response = { success: false };

//         try {
//             const user = await User.findOne({ email });

//             if (user) {
//                 return {
//                     ...response,
//                     error: 'You cannot create this account!'
//                 };
//             }

//             const lengthRange = { min: 3, max: 30 };
//             // validate fields
//             if (
//                 validator.isEmpty(firstname) ||
//                 !validator.isAlpha(firstname) ||
//                 !validator.isLength(firstname, lengthRange)
//             ) {
//                 return {
//                     ...response,
//                     error: 'Invalid first name!'
//                 };
//             }

//             if (
//                 validator.isEmpty(lastname) ||
//                 !validator.isAlpha(lastname) ||
//                 !validator.isLength(lastname, lengthRange)
//             ) {
//                 return { ...response, error: 'Invalid last name!' };
//             }

//             if (!validator.isEmail(email) || validator.isEmpty(email)) {
//                 return { ...response, error: 'Invalid email address!' };
//             }

//             if (
//                 validator.isEmpty(password) ||
//                 !password.match(/^[a-zA-Z0-9]{3,30}$/)
//             ) {
//                 return {
//                     ...response,
//                     error: 'Invalid password, please try again!'
//                 };
//             }

//             try {
//                 const genSalt = await bcrypt.genSalt(10);
//                 const hash = await bcrypt.hash(password, genSalt);
//                 const userObj = new User({
//                     firstname,
//                     lastname,
//                     email,
//                     password: hash
//                 });

//                 const savedUser = await userObj.save();

//                 if (savedUser) {
//                     return { success: true, error: '' };
//                 }

//                 return {
//                     ...response,
//                     error: 'Ooops! could not save your data!'
//                 };
//             } catch (err) {
//                 return {
//                     ...response,
//                     error: err.message
//                 };
//             }
//         } catch (err) {
//             return { ...response, error: err.message };
//         }
//     }
// };

// export { resolvers, Mutation };
