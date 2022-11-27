import React from 'react';
import './header.css';
import { Typeform } from '../../components';

import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
  
const Header = () => (
     <div className="gpt3__header section__padding" id="home">
        <div className="gpt3__header-content">
            <h1 className="gradient__text">
                You deserve a better job search experience
            </h1>
            <p>Stop spraying and praying. <br /> Apply once and let us handle the rest.</p>   

            <div className="gpt3__header-content__input">
                <Typeform />
            </div>

            <div className="gpt3__header-content__people">
                <img src={people} alt="people"/>
                <p> Over 1,600 people have requested access</p>
            </div>
        </div>

        <div className="gpt3__header-image">
            <img src={ai} alt="ai" />
        </div>
    </div> 
);

export default Header;
