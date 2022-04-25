import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './style.scss';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { Homepage, SignUp } from './pages';
import { MainLayout, HomeLayout } from './layouts';

const client = new ApolloClient({
    request: (operation) => {
        const token = localStorage.getItem('id_token');

        operation.setContext({
            headers: {
                authorization: token ? `Bearer ${token}` : ''
            }
        });
    },
    uri: '/graphql'
});

function App() {
    return (
        <ApolloProvider client={client}>
            <div className="App">
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={() => (
                            <HomeLayout>
                                <Homepage />
                            </HomeLayout>
                        )}
                    />
                    <Route
                        path="/signup"
                        render={() => (
                            <MainLayout>
                                <SignUp />
                            </MainLayout>
                        )}
                    />
                </Switch>
            </div>
        </ApolloProvider>
    );
}

export default App;
