import React from "react";
import './comentario.css';
import Header from '../../../components/header/header';
import { Link } from 'react-router-dom';

function Comentario(){

    return(
        <>
        <Header/>

        <p className="comentarios">

          <h2 className="nome">Carlos</h2>
            <h3>
                Além da história principal e enredo muito bem construídos, da enorme variedade de easter-eggs e da grande quantidade de histórias secundárias, o jogo conta também com uma riqueza de detalhes espetacular.
            </h3>


            <h2 className="nome">  João Pedro</h2>
            <h3>
                Uma obra prima dessa geração. Red Dead Redemption 2 é mais que um jogo,é uma experiência,rica de detalhes e mistérios que compõem um dos melhores jogos de ação de todos. Para mim,sem dúvidas,o melhor game que já joguei na minha vida. 
            </h3>


            <h2 className="nome">Humberto Santos</h2>
            <h3>
                O melhor e mais completo jogo de todos os tempos (em minha opinião). Impecável do início ao fim! Foram mais de 80 horas de muita diversão, do qual eu gostaria que não tivesse acabado. 
            </h3>


            <h2 className="nome"> Emily Cardoso</h2>
            <h3>
                Já joguei esse jogo muitas vezes, cada vez que jogo o jogo fica ainda melhor, trilha sonora perfeita, amo ouvir American venom, jogabilidade incrível, um número de detalhes imensos, gráficos que até hoje me deixa inspirada.
            </h3>


        <h2 className="nome"> Ana Paula</h2>
            <h3>
                Praticamente tudo que há neste jogo é perfeito. A história como é contada, os dois protagonistas que são sensacionais. Sem dúvida alguma, que Arthur Morgan não é só o melhor protagonista que a Rockstar já fez, mas também é o melhor protagonista que eu já vi na minha vida inteira.
            </h3>


        <h2 className="nome">Diogo Ferreira</h2>
            <h3>
                Realmente, não tenho o que falar desse jogo, o próprio já faz isso, a grandiosidade, a história, gráficos, jogabilidade, paz e claro, Arthur Morgan, são coisas que fazem esse jogo ser incrível. A maneira como ele demonstra quem nós realmente somos, selvagens ou honestos, se anseiamos nossa própria redenção sem desejar a do próximo.
            </h3>


        </p>

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

export default Comentario;