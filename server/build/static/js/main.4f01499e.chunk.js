(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{39:function(e,t,a){e.exports=a.p+"static/media/spinner.ab497855.gif"},67:function(e,t,a){e.exports=a(79)},72:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(56),l=a.n(c),o=(a(72),a(4)),i=a(10),s=a(5),u=a(62),m=a(89),d=a(91),p=a(88),E=a(60),f=a(8),b=a(85);function g(e,t,a){return new Promise((function(n,r){var c,l,o,i=window.indexedDB.open("shop-shop",1);i.onupgradeneeded=function(e){var t=i.result;t.createObjectStore("products",{keyPath:"_id"}),t.createObjectStore("categories",{keyPath:"_id"}),t.createObjectStore("cart",{keyPath:"_id"})},i.onerror=function(e){console.log("There was an error")},i.onsuccess=function(r){switch(c=i.result,l=c.transaction(e,"readwrite"),o=l.objectStore(e),c.onerror=function(e){console.log("error",e)},t){case"put":o.put(a),n(a);break;case"get":var s=o.getAll();s.onsuccess=function(){n(s.result)};break;case"delete":o.delete(a._id);break;default:console.log("No valid method")}l.oncomplete=function(){c.close()}}}))}var O=a(63),h=a(23),v=function(e,t){switch(t.type){case"UPDATE_PRODUCTS":return Object(o.a)(Object(o.a)({},e),{},{products:Object(h.a)(t.products)});case"UPDATE_CATEGORIES":return Object(o.a)(Object(o.a)({},e),{},{categories:Object(h.a)(t.categories)});case"UPDATE_CURRENT_CATEGORY":return Object(o.a)(Object(o.a)({},e),{},{currentCategory:t.currentCategory});case"ADD_TO_CART":return Object(o.a)(Object(o.a)({},e),{},{cartOpen:!0,cart:[].concat(Object(h.a)(e.cart),[t.product])});case"ADD_MULTIPLE_TO_CART":return Object(o.a)(Object(o.a)({},e),{},{cart:[].concat(Object(h.a)(e.cart),Object(h.a)(t.products))});case"REMOVE_FROM_CART":var a=e.cart.filter((function(e){return e._id!==t._id}));return Object(o.a)(Object(o.a)({},e),{},{cartOpen:a.length>0,cart:a});case"UPDATE_CART_QUANTITY":return Object(o.a)(Object(o.a)({},e),{},{cartOpen:!0,cart:e.cart.map((function(e){return t._id===e._id&&(e.purchaseQuantity=t.purchaseQuantity),e}))});case"CLEAR_CART":return Object(o.a)(Object(o.a)({},e),{},{cartOpen:!1,cart:[]});case"TOGGLE_CART":return Object(o.a)(Object(o.a)({},e),{},{cartOpen:!e.cartOpen});default:return e}};var y=["value"],j=Object(n.createContext)(),w=j.Provider,_=function(e){e.value;var t,a=Object(O.a)(e,y),c=(t={products:[],cart:[],cartOpen:!1,categories:[],currentCategory:""},Object(n.useReducer)(v,t)),l=Object(f.a)(c,2),o=l[0],i=l[1];return r.a.createElement(w,Object.assign({value:[o,i]},a))},N=function(){return Object(n.useContext)(j)};var T,k,C,A,R=function(e){var t=e.image,a=e.name,n=e._id,c=e.price,l=e.quantity,s=N(),u=Object(f.a)(s,2),m=u[0],d=u[1],p=m.cart;return r.a.createElement("div",{className:"card px-1 py-1"},r.a.createElement(i.b,{to:"/products/".concat(n)},r.a.createElement("img",{alt:a,src:"/images/".concat(t),height:"400px",width:"400px"}),r.a.createElement("p",{className:"namefont"},a)),r.a.createElement("div",null,r.a.createElement("div",null,l," ",function(e,t){return 1===t?e:e+"s"}("item",l)," in stock"),r.a.createElement("span",null,"$",c)),r.a.createElement("button",{onClick:function(){var t=p.find((function(e){return e._id===n}));t?(d({type:"UPDATE_CART_QUANTITY",_id:n,purchaseQuantity:parseInt(t.purchaseQuantity)+1}),g("cart","put",Object(o.a)(Object(o.a)({},t),{},{purchaseQuantity:parseInt(t.purchaseQuantity)+1}))):(d({type:"ADD_TO_CART",product:Object(o.a)(Object(o.a)({},e),{},{purchaseQuantity:1})}),g("cart","put",Object(o.a)(Object(o.a)({},e),{},{purchaseQuantity:1})))}},"Add to cart"))},x=a(21),D=a(90),S=Object(D.a)(T||(T=Object(x.a)(["\n  query getProducts($category: ID) {\n    products(category: $category) {\n      _id\n      name\n      description\n      price\n      quantity\n      image\n      category {\n        _id\n      }\n    }\n  }\n"]))),P=(Object(D.a)(k||(k=Object(x.a)(["\n  {\n    products {\n      _id\n      name\n      description\n      price\n      quantity\n      category {\n        name\n      }\n    }\n  }\n"]))),Object(D.a)(C||(C=Object(x.a)(["\n  {\n    categories {\n      _id\n      name\n    }\n  }\n"])))),U=Object(D.a)(A||(A=Object(x.a)(["\n  {\n    user {\n      firstName\n      lastName\n      orders {\n        _id\n        purchaseDate\n        products {\n          _id\n          name\n          description\n          price\n          quantity\n          image\n        }\n      }\n    }\n  }\n"]))),I=a(39),Q=a.n(I);var $=function(){var e=N(),t=Object(f.a)(e,2),a=t[0],c=t[1],l=a.currentCategory,o=Object(b.a)(S),i=o.loading,s=o.data;return Object(n.useEffect)((function(){s?(c({type:"UPDATE_PRODUCTS",products:s.products}),s.products.forEach((function(e){g("products","put",e)}))):i||g("products","get").then((function(e){c({type:"UPDATE_PRODUCTS",products:e})}))}),[s,i,c]),r.a.createElement("div",{className:"my-2"},r.a.createElement("h2",null,"Our Products:"),a.products.length?r.a.createElement("div",{className:"flex-row"},(l?a.products.filter((function(e){return e.category._id===l})):a.products).map((function(e){return r.a.createElement(R,{key:e._id,_id:e._id,image:e.image,name:e.name,price:e.price,quantity:e.quantity})}))):r.a.createElement("h3",null,"You haven't added any products yet!"),i?r.a.createElement("img",{src:Q.a,alt:"loading"}):null)};var L=function(){var e=N(),t=Object(f.a)(e,2),a=t[0],c=t[1],l=a.categories,o=Object(b.a)(P),i=o.loading,s=o.data;return Object(n.useEffect)((function(){s?(c({type:"UPDATE_CATEGORIES",categories:s.categories}),s.categories.forEach((function(e){g("categories","put",e)}))):i||g("categories","get").then((function(e){c({type:"UPDATE_CATEGORIES",categories:e})}))}),[s,i,c]),r.a.createElement("div",null,r.a.createElement("h2",null,"Choose a Category:"),l.map((function(e){return r.a.createElement("button",{key:e._id,onClick:function(){var t;t=e._id,c({type:"UPDATE_CURRENT_CATEGORY",currentCategory:t})}},e.name)})))},F=a(20),G=a.n(F),M=a(30),q=function(e){var t=e.item,a=N(),n=Object(f.a)(a,2)[1];return r.a.createElement("div",{className:"flex-row"},r.a.createElement("div",null,r.a.createElement("img",{src:"/images/".concat(t.image),alt:""})),r.a.createElement("div",null,r.a.createElement("div",null,t.name,", $",t.price),r.a.createElement("div",null,r.a.createElement("span",null,"Qty:"),r.a.createElement("input",{type:"number",placeholder:"1",value:t.purchaseQuantity,onChange:function(e){var a=e.target.value;"0"===a?(n({type:"REMOVE_FROM_CART",_id:t._id}),g("cart","delete",Object(o.a)({},t))):(n({type:"UPDATE_CART_QUANTITY",_id:t._id,purchaseQuantity:parseInt(a)}),g("cart","put",Object(o.a)(Object(o.a)({},t),{},{purchaseQuantity:parseInt(a)})))}})," ",r.a.createElement("span",{role:"img","aria-label":"trash",onClick:function(){return function(e){n({type:"REMOVE_FROM_CART",_id:e._id}),g("cart","delete",Object(o.a)({},e))}(t)}},"\ud83d\uddd1\ufe0f"))))},W=a(58),Y=a(59),B=a(45),H=a.n(B),V=new(function(){function e(){Object(W.a)(this,e)}return Object(Y.a)(e,[{key:"getProfile",value:function(){return H()(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"isTokenExpired",value:function(e){try{return H()(e).exp<Date.now()/1e3}catch(t){return!1}}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.assign("/")}}]),e}()),J=(a(78),function(){var e=N(),t=Object(f.a)(e,2),a=t[0],c=t[1];function l(){c({type:"TOGGLE_CART"})}return Object(n.useEffect)((function(){function e(){return(e=Object(M.a)(G.a.mark((function e(){var t;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g("cart","get");case 2:t=e.sent,c({type:"ADD_MULTIPLE_TO_CART",products:Object(h.a)(t)});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}a.cart.length||function(){e.apply(this,arguments)}()}),[a.cart.length,c]),a.cartOpen?r.a.createElement("div",{className:"cart"},r.a.createElement("div",{className:"close",onClick:l},"[close]"),r.a.createElement("h2",null,"Shopping Cart"),a.cart.length?r.a.createElement("div",null,a.cart.map((function(e){return r.a.createElement(q,{key:e._id,item:e})})),r.a.createElement("div",{className:"flex-row space-between"},r.a.createElement("strong",null,"Total: $",function(){var e=0;return a.cart.forEach((function(t){e+=t.price*t.purchaseQuantity})),e.toFixed(2)}()),V.loggedIn()?r.a.createElement("button",null,"Checkout"):r.a.createElement("span",null,"(LogIn to check out)"))):r.a.createElement("h3",null,r.a.createElement("span",{role:"img","aria-label":"shocked"},"\ud83d\ude31"),"Please add some items to your cart to checkout!"," ")):r.a.createElement("div",{className:"cart-closed",onClick:l},r.a.createElement("span",{role:"img","aria-label":"trash"},"\ud83d\uded2"))}),z=function(){return r.a.createElement("div",{className:"container"},r.a.createElement(L,null),r.a.createElement($,null),r.a.createElement(J,null))};var K,X,Z,ee=function(){var e=N(),t=Object(f.a)(e,2),a=t[0],c=t[1],l=Object(s.g)().id,u=a.products,m=a.cart,d=Object(n.useState)({}),p=Object(f.a)(d,2),E=p[0],O=p[1],h=Object(b.a)(S),v=h.loading,y=h.data;return Object(n.useEffect)((function(){u.length?O(u.find((function(e){return e._id===l}))):y?(c({type:"UPDATE_PRODUCTS",products:y.products}),y.products.forEach((function(e){g("products","put",e)}))):v||g("products","get").then((function(e){c({type:"UPDATE_PRODUCTS",products:e})}))}),[u,y,v,c,l]),r.a.createElement(r.a.Fragment,null,E?r.a.createElement("div",{className:"container my-1"},r.a.createElement(i.b,{to:"/"},"\u2190 Back to Products"),r.a.createElement("h2",null,E.name),r.a.createElement("p",null,E.description),r.a.createElement("p",null,r.a.createElement("strong",null,"Price:"),"$",E.price," ",r.a.createElement("button",{onClick:function(){var e=m.find((function(e){return e._id===l}));e?(c({type:"UPDATE_CART_QUANTITY",_id:l,purchaseQuantity:parseInt(e.purchaseQuantity)+1}),g("cart","put",Object(o.a)(Object(o.a)({},e),{},{purchaseQuantity:parseInt(e.purchaseQuantity)+1}))):(c({type:"ADD_TO_CART",product:Object(o.a)(Object(o.a)({},E),{},{purchaseQuantity:1})}),g("cart","put",Object(o.a)(Object(o.a)({},E),{},{purchaseQuantity:1})))}},"Add to Cart"),r.a.createElement("button",{disabled:!m.find((function(e){return e._id===E._id})),onClick:function(){c({type:"REMOVE_FROM_CART",_id:E._id}),g("cart","delete",Object(o.a)({},E))}},"Remove from Cart")," "),r.a.createElement("img",{src:"/images/".concat(E.image),alt:E.name})):null,v?r.a.createElement("img",{src:Q.a,alt:"loading"}):null,r.a.createElement(J,null))},te=a(28),ae=a(86),ne=Object(D.a)(K||(K=Object(x.a)(["\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"]))),re=(Object(D.a)(X||(X=Object(x.a)(["\n  mutation addOrder($products: [ID]!) {\n    addOrder(products: $products) {\n      purchaseDate\n      products {\n        _id\n        name\n        description\n        price\n        quantity\n        category {\n          name\n        }\n      }\n    }\n  }\n"]))),Object(D.a)(Z||(Z=Object(x.a)(["\n  mutation addUser(\n    $firstName: String!\n    $lastName: String!\n    $email: String!\n    $password: String!\n  ) {\n    addUser(\n      firstName: $firstName\n      lastName: $lastName\n      email: $email\n      password: $password\n    ) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"]))));var ce=function(e){var t=Object(n.useState)({email:"",password:""}),a=Object(f.a)(t,2),c=a[0],l=a[1],s=Object(ae.a)(ne),u=Object(f.a)(s,2),m=u[0],d=u[1].error,p=function(){var e=Object(M.a)(G.a.mark((function e(t){var a,n;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,m({variables:{email:c.email,password:c.password}});case 4:a=e.sent,n=a.data.login.token,V.login(n),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),E=function(e){var t=e.target,a=t.name,n=t.value;l(Object(o.a)(Object(o.a)({},c),{},Object(te.a)({},a,n)))};return r.a.createElement("div",{className:"container my-1"},r.a.createElement(i.b,{to:"/signup"},"\u2190 Go to Signup"),r.a.createElement("h2",null,"Login"),r.a.createElement("form",{onSubmit:p},r.a.createElement("div",{className:"flex-row space-between my-2"},r.a.createElement("label",{htmlFor:"email"},"Email address:"),r.a.createElement("input",{placeholder:"youremail@test.com",name:"email",type:"email",id:"email",onChange:E})),r.a.createElement("div",{className:"flex-row space-between my-2"},r.a.createElement("label",{htmlFor:"pwd"},"Password:"),r.a.createElement("input",{placeholder:"******",name:"password",type:"password",id:"pwd",onChange:E})),d?r.a.createElement("div",null,r.a.createElement("p",{className:"error-text"},"The provided credentials are incorrect")):null,r.a.createElement("div",{className:"flex-row flex-end"},r.a.createElement("button",{type:"submit"},"Submit"))))};var le=function(e){var t=Object(n.useState)({email:"",password:""}),a=Object(f.a)(t,2),c=a[0],l=a[1],s=Object(ae.a)(re),u=Object(f.a)(s,1)[0],m=function(){var e=Object(M.a)(G.a.mark((function e(t){var a,n;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,u({variables:{email:c.email,password:c.password,firstName:c.firstName,lastName:c.lastName}});case 3:a=e.sent,n=a.data.addUser.token,V.login(n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(e){var t=e.target,a=t.name,n=t.value;l(Object(o.a)(Object(o.a)({},c),{},Object(te.a)({},a,n)))};return r.a.createElement("div",{className:"container my-1"},r.a.createElement(i.b,{to:"/login"},"\u2190 Go to Login"),r.a.createElement("h2",null,"Signup"),r.a.createElement("form",{onSubmit:m},r.a.createElement("div",{className:"flex-row space-between my-2"},r.a.createElement("label",{htmlFor:"firstName"},"First Name:"),r.a.createElement("input",{placeholder:"First",name:"firstName",type:"firstName",id:"firstName",onChange:d})),r.a.createElement("div",{className:"flex-row space-between my-2"},r.a.createElement("label",{htmlFor:"lastName"},"Last Name:"),r.a.createElement("input",{placeholder:"Last",name:"lastName",type:"lastName",id:"lastName",onChange:d})),r.a.createElement("div",{className:"flex-row space-between my-2"},r.a.createElement("label",{htmlFor:"email"},"Email:"),r.a.createElement("input",{placeholder:"youremail@test.com",name:"email",type:"email",id:"email",onChange:d})),r.a.createElement("div",{className:"flex-row space-between my-2"},r.a.createElement("label",{htmlFor:"pwd"},"Password:"),r.a.createElement("input",{placeholder:"******",name:"password",type:"password",id:"pwd",onChange:d})),r.a.createElement("div",{className:"flex-row flex-end"},r.a.createElement("button",{type:"submit"},"Submit"))))};var oe=function(){return r.a.createElement("header",{className:"flex-row px-1"},r.a.createElement("h1",null,r.a.createElement(i.b,{className:"navbar-brand",to:"/"},"Jamie's")),r.a.createElement("nav",null,V.loggedIn()?r.a.createElement("ul",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement("li",{className:"mx-1"},r.a.createElement(i.b,{to:"/orderHistory"},"Order History")),r.a.createElement("li",{className:"mx-1"},r.a.createElement("a",{href:"/",onClick:function(){return V.logout()}},"Logout"))):r.a.createElement("ul",{className:"flex-row"},r.a.createElement("li",{className:"mx-1"},r.a.createElement(i.b,{to:"/signup"},"Signup")),r.a.createElement("li",{className:"nav-item nav-link"},r.a.createElement(i.b,{to:"login",className:"btn btn-outline-dark m-2"},r.a.createElement("i",{className:"fa fa-sign-in"})," Login")," "))))};var ie=function(){var e,t=Object(b.a)(U).data;return t&&(e=t.user),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container my-1"},r.a.createElement(i.b,{to:"/"},"\u2190 Back to Products"),e?r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Order History for ",e.firstName," ",e.lastName),e.orders.map((function(e){return r.a.createElement("div",{key:e._id,className:"my-2"},r.a.createElement("h3",null,new Date(parseInt(e.purchaseDate)).toLocaleDateString()),r.a.createElement("div",{className:"flex-row"},e.products.map((function(e,t){var a=e._id,n=e.image,c=e.name,l=e.price;return r.a.createElement("div",{key:t,className:"card px-1 py-1"},r.a.createElement(i.b,{to:"/products/".concat(a)},r.a.createElement("img",{alt:c,src:"/images/".concat(n)}),r.a.createElement("p",null,c)),r.a.createElement("div",null,r.a.createElement("span",null,"$",l)))}))))}))):null))},se=Object(u.a)({uri:"/graphql"}),ue=Object(E.a)((function(e,t){var a=t.headers,n=localStorage.getItem("id_token");return{headers:Object(o.a)(Object(o.a)({},a),{},{authorization:n?"Bearer ".concat(n):""})}})),me=new m.a({link:ue.concat(se),cache:new d.a});var de=function(){return r.a.createElement(p.a,{client:me},r.a.createElement(i.a,null,r.a.createElement("div",null,r.a.createElement(_,null,r.a.createElement(oe,null),r.a.createElement(s.c,null,r.a.createElement(s.a,{path:"/",element:r.a.createElement(z,null)}),r.a.createElement(s.a,{path:"/login",element:r.a.createElement(ce,null)}),r.a.createElement(s.a,{path:"/signup",element:r.a.createElement(le,null)}),r.a.createElement(s.a,{path:"/orderHistory",element:r.a.createElement(ie,null)}),r.a.createElement(s.a,{path:"/products/:id",element:r.a.createElement(ee,null)}))))))},pe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Ee(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(de,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");pe?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Ee(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Ee(t,e)}))}}()}},[[67,1,2]]]);
//# sourceMappingURL=main.4f01499e.chunk.js.map