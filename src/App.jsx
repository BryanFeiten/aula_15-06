import React from 'react';
import Routers from './Routers';
import { GlobalStyle } from './styles';

export default function App() {
    return (
        <React.Fragment>
            <GlobalStyle />
            <Routers />
        </React.Fragment>
    );
}