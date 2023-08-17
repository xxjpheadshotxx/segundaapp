import React  from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './header.css';
import Logo from '../../assets/rdr.jpg';


function Header() {
   

    return(
    
        <header>
            <img id='logo' src={Logo} />
            <nav>
                <ul>
                    <Link style={{textDecoration:'none'}} to='/'>
                    <li>Home</li>
                    </Link>

                    <Link style={{textDecoration:'none'}} to = '/Contato'>
                    <li>Contato</li>
                    </Link>

                    <Link style={{textDecoration:'none'}} to = '/Foto'>
                    <li>Fotos</li>
                    </Link>

                    <Link style={{textDecoration:'none'}} to = '/Comentario'>
                    <li>Comentario</li>
                    </Link>
                    


                </ul>
            </nav>
        </header>
    )
}




export default Header;