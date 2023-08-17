import React from 'react';
import Header from '../../components/header/header';
import './styles.css';
import Video from '../../assets/rdr.mp4'
import Cards from '../../components/cards/cards';
import Logo from '../../assets/rdr.jpg';
import { Link } from 'react-router-dom';





function Home(){


  return(
    <>
        <Header />
        <div id='banner'></div>
        <div id='trailer-container'>
            <div className='content'>
              <video controls className='trailer'>
                <source src={Video} />
                Seu navegador nao possui suporte para videos.
              </video>
                  
                  <div id='sinopse'>
                    <p className='description'>
                    Estados Unidos, 1899. O fim da era do velho oeste começou. Depois de tudo dar errado durante um roubo em uma cidade do oeste chamada Blackwater, Arthur Morgan e a gangue Van der Linde são forçados a fugir. Com agentes federais e os melhores caçadores de recompensas no seu encalço, a gangue precisa roubar, assaltar e lutar para sobreviver no impiedoso coração dos Estados Unidos. 
                    </p>
                    <button className='button'>Compre Agora</button>

            </div>
            </div>
        </div>
        <Cards />
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
    
   
  );
}

export default Home;