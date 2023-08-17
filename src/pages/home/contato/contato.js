import React from "react";
import './contato.css';
import Header from '../../../components/header/header';
import Logo from '../../../assets/rdr.jpg'
import { Link } from 'react-router-dom';



function Contato(){
    
    return(
      <>
      <Header/>

        <div className="caixa-contato">
         <label for='email'>Email</label>
         <input id="email" type='email'  placeholder='coloque um email valido'></input> 

          <label for='password'>Senha</label>
           <input type='password'></input>

          <textarea name="mensagem" id='mensagem' rows='10'/>
    
             <button className='button-2'>Enviar</button>

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

export default Contato;