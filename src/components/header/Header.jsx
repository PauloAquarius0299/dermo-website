// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react';
import './Header_module.css';
import Logo from '../../assets/logo.png';
import { FaShoppingBag } from 'react-icons/fa';
import { FiAlignJustify } from "react-icons/fi";


const Header = () => {

  const [ShowMenu, setShowMenu] = useState(true)

  const toggleMenu = () => {
    setShowMenu((ShowMenu) =>!ShowMenu)
  }


  return (
    <div className='container'>
      <div className='logo'>
        <img src={Logo} alt="" />
        <span>SkinElegance</span>
      </div>

      <div className="right">
        <div className="bars" onClick={toggleMenu} >
        <FiAlignJustify />
        </div>
        
      </div>
 
      <div className='menu' style={{display: ShowMenu? 'inherit': 'none'}} >
        <div className='menu'  >
            <ul className="items">
              <li>Coleção</li>
              <li>Marcas</li>
              <li>Novos</li>
              <li>Mais Vendidos</li>
              <li>ENG</li>
              <input type="text" className='search' />
              <FaShoppingBag className='icon' />
            </ul>
          
          
          
          
        </div>
        
      </div>

      
    </div>
  )
}

export default Header