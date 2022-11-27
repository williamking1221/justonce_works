import React from 'react'
import Feature from '../../components/feature/Feature'
import './whatIterate.css'

const WhatIterate = () => {
    return(
        <div className="gpt3__whatIterate section__margin" id="wIterate">
            {/* <div className="gpt3__whatIterate-feature">
                <Feature Title="What is Iterate?" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."/>
            </div> */}
            <div className = "gpt3__whatIterate-heading">
                <h1 className="gradient__text">Let the recruiter reach out to YOU</h1>
            </div>
            <div className="gpt3__whatIterate-container">
                <Feature Title="Students and Iternational Students" text="We make sure you get multiple interviews within a set timeframe."/>
                <Feature Title="Experienced Professionals" text="If you were laid off or looking for a career change, we open new doors for you...faster."/>
                <Feature Title="Recruiters" text="Stop going through hundreds of recs. We will present you the candidates with the best fit. Hire faster. Hire better."/>
            </div>
        </div>
    )
}

export default WhatIterate