import React from "react";
import './foto.css';
import Header from "../../components/header/header";
import Logo from '../../assets/rdr.jpg';
import { Link } from 'react-router-dom';

function Foto(){

    return(
       <>
       <Header/>
       <div className="picture-game-container">
            <div className="game-content">

                <div className="game picture-1"></div>
                <div className="game picture-2"></div>
                <div className="game picture-3"></div>
                <div className="game picture-4"></div>
                <div className="game picture-5"></div>
                <div className="game picture-6"></div>
                <div className="game picture-7"></div>
                <div className="game picture-8"></div>
                <div className="game picture-9"></div>
                <div className="game picture-10"></div>
                <div className="game picture-11"></div>
                <div className="game picture-12"></div>


            </div>

        </div>



       
       
                <footer>
          <img style={{objectFit:'contain'}} id='logo' src={Logo}/>
            <span>Todos os direitos reservados ©</span>
            <span>Desenvolvido por: João Paulo</span>
        </footer>

        <nav className='footer-navigation'>
                <ul className='footer-list'>
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
       </>
    )
}

export default Foto;