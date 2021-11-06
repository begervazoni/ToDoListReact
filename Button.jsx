import React from 'react';

import "./button.css"

const Button = ({children, onClick}) => {
    return ( 
        <button onClick={onClick} className="button">
            {children}    
        </button>
     );
}

<button>Adicionar</button>
 
export default Button;