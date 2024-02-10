// Home.js
import React from 'react'
import { Header } from './Header';
import { Navigation } from './Navigation';
import {Summary} from './Summary';

const Home = () => {
    return (
        <>
            <Header/>
            <Navigation/>
            <Summary/>
        </>
    );
}
export {Home};