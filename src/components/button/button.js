import React from 'react';
import  "./button.css"



function Button({name, active, onClick}){
   
    return(
        <div className='containerButton'>
            <button onClick={()=> onClick(20)} className={active ? 'button' : 'disabledButton'}>{name}</button>
            <span>Seus dados estao sendo salvos</span>
        </div>
        
    )

}

export default Button
