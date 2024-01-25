// eslint-disable-next-line no-unused-vars
import React from 'react'
import Logo from '../../assets/logo.png';
import { CiLocationOn } from 'react-icons/ci';
import { BsTelephoneInboundFill } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import { FaDoorOpen } from "react-icons/fa";
import { MdPerson2 } from "react-icons/md";
import { SiGnuprivacyguard } from "react-icons/si";


import './Footer_modelu.css'

const Footer = () => {
  return (
    <div className='footerWrapper'>
        <hr />
        <div className="footer">
            <div className="clogo">
                <img src={Logo} alt="" />
                <span>SkinElegance</span>
            </div>

            <div className="block">
                <div className="detail">
                    <span>Contatos</span>
                    <div className="pngLine">
                    <CiLocationOn className='icon' />
                    <span>123 Belo Horizonte MG - Brasil 456789</span>
                    <BsTelephoneInboundFill className='icon' />
                    <span>(31) 9987654311</span>
                    </div>
                    <MdOutlineMail className='icon' />
                <span>fulano12@gmail.com</span>
                </div>
                
            </div>
            <div className="block">
                <div className="detail">
                    <span>Seja Membro</span>
                    <div className="pngLine">
                    <FaDoorOpen className='icon' />
                    <span>Se Escreva</span>
                    </div>
                </div>
            </div>
            <div className="block">
                <div className="detail">
                    <span>Empresa</span>
                    <div className="pngLine">
                    <MdPerson2 className='icon' />
                    <span>Quem somos nós?</span>
                    </div>
                </div>
            </div>
            <div className="block">
                <div className="detail">
                    <span>Recursos</span>
                    <div className="pngLine">
                    <SiGnuprivacyguard className='icon' />
                    <span>Termos de Privacidade</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer