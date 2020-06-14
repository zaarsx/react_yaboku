import React from 'react';

import WishList from './wishes/WishList';
import WishAdd from './wishes/WishAdd';

import YNavigation from './pages/YNavigation';
import YCarousel from './pages/YCarousel';


import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";


import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers/rootReducer';


const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)


function App() {

    const wishes =         [
        {
            id: 1,
            author: 'Author',
            text: 'The text',
        },
        {
            id: 1,
            author: 'Author',
            text: 'The text',
        },
    ]

    return (
        <Provider store={store}>
            <div className="App">
                <YNavigation />
                <YCarousel />
                <Container>
                    <WishList wishes={wishes} />
                </Container>
                <WishAdd />
            </div>
        </Provider>
    );
}

export default App;
