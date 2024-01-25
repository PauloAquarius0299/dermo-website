// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Hero_module.css';
import HeroImg from '../../assets/hero.png';
import { RiShoppingBagFill} from 'react-icons/ri'
import { FaArrowRight } from "react-icons/fa";
import {motion} from 'framer-motion';

const Hero = () => {

    const transition = {duration: 3, type: 'spring'}
  return (
    <div className='container-hero'>
        {/*left side */}
        <div className="h-side">
            <span className='text1'>Creme de proteção</span>

            <div className="text2">
                <span className=''>As Melhores Coleções</span>

                <span 
                 >Com a substancias adequadas pra sua pele.
                 </span>
            </div>
        </div>

        {/*middle side hero image */}
        <div className="wrapper">
            <motion.div 
            initial={{bottom: '2rem'}}
            whileInView={{bottom: '0rem'}}
            transition={transition}
            className="pinkCircle">
            </motion.div>
            <motion.img 
            initial={{bottom: '-2rem'}}
            whileInView={{bottom: '0rem'}}
            transition={transition}
            src={HeroImg} alt="" width={400} />
            <motion.div 
            initial={{right: '4%'}}
            whileInView={{right: '2%'}}
            transition={transition}
            className="cart">
                <RiShoppingBagFill />
                <div className="signup">
                    <span>Melhores ofertas de inscrição</span>
                    <div>
                        <FaArrowRight className='icon' />
                    </div>
                </div>
            </motion.div>
        </div>
        {/* right side*/}
        <div className="h-sides">
            <div className="traffic">
                <span>1,5M</span>
                <span>Vendidos no Mes</span>
            </div>

            <div className="customers">
                <span>100k</span>
                <span>Clientes Satisfeitos</span>
            </div>
        </div>
    </div>

    
    
  )
}

export default Hero