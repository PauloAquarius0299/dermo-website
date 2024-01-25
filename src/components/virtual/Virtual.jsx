// eslint-disable-next-line no-unused-vars
import React from 'react'
import shade from '../../assets/shade.png';
import Before from '../../assets/before.png'
import After from '../../assets/after.png';

import ReactCompareImage from 'react-compare-image';

import "./Virtual_modules.css";

const Virtual = () => {
  return (
    <div className='virtual'>
        <div className="left">
            <span>Teste Virtual</span>
            <span>Nunca compre a tonalidade errada novamente</span>
            <span className='btn'>Tente Agora</span>
            <img src={shade} alt="" />
        </div>
        
        <div className="b-right">
            <div className="wrapper">
                <ReactCompareImage leftImage={Before} rightImage={After} />
            </div>
            
        </div>
    </div>
    
  )
}

export default Virtual