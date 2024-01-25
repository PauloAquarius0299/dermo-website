// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react';
import Plane from '../../assets/plane.png';
import { ProductsData } from '../../data/produtos';


import './Products_module.css';

const Products = () => {

    const [MenuProducts, setMenuProducts ] = useState(ProductsData)

    const filter = (type) => {
        setMenuProducts(ProductsData.filter((product)=>product.type ===type))
    }

  return (
    <div className='container-pro'>
        <img src={Plane} alt="" />
        <h1>Nossos produtos em destaque</h1>

        <div className="products">
            <ul className="menu">
                <li  onClick={() =>setMenuProducts(ProductsData)}>Todos</li>
                <li onClick={() =>filter('skin care')}>Skin Care</li>
                <li  onClick={() =>filter('conditioner')}>Condicionadores</li>
                <li  onClick={() =>filter('foundation')}>Fundações</li>
            </ul>



            <div className="list" >
                {MenuProducts.map((product, i) =>(
                        // eslint-disable-next-line react/jsx-key
                        <div key={i} className='product'>
                            <div className='left-s'>
                                <div className='name'>
                                    <span>{product.name}</span>
                                    <span>{product.detail}</span>
                                </div>
                                <span>{product.price}$</span>
                                <div className='btn'>Ver Mais</div>
                            </div>
                            <img src={product.img} alt="" className='img-p' />
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Products