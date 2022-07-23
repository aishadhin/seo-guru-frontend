import React from 'react';
import Boost from './Boost/Boost';
import Client from './Client/Client';
import Counter from './Counter/Counter';
import Hero from './Hero/Hero';
import Services from './Services.js/Services';
import White from './White/White';
import Work from './Work/Work';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Services></Services>
            <Work></Work>
            <Boost></Boost>
            <White></White>
            <Counter></Counter>
            <Client></Client>
        </div>
    );
};

export default Home;