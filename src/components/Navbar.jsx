import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {


  return (
    <div className='bg-black text-white h-[60px] flex justify-center items-center'>
      <ul className='flex gap-5'>
        <li>
           <Link to="/">Tienda</Link> 
        </li>

        <li>
            <Link to="/suscripcion">Suscripcion</Link>
        </li>
        <li>
        <Link to="/paraempresas">Para Empresas</Link>
        </li>
        <li>
        <Link to="/sobrenosotros">Sobre Nosotros</Link>
        </li>
        <li>
        <Link to="/contacto">Contacto</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar


