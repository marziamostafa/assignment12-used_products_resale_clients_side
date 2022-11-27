import React from 'react';
import Add from '../Add/Add';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import Extra from '../Extra/Extra';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <Extra></Extra>
            <Add></Add>
        </div>
    );
};

export default Home;