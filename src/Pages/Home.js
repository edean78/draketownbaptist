import React, { Component } from 'react';
import Carousel from '../Components/Carousel/Carousel';

export class Home extends Component {
    render() {
        return (
            <div className='homePage'>
                <Carousel />
            </div>
        )
    }
}

export default Home;
