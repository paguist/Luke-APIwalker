import React from 'react';
import obiWanImg from  '../Error/obiwan.png';

const Error = () => {
    return (
        <div>
            <h2>Estos no son los droides que está buscando.</h2>
            <img src={obiWanImg} alt="Obi-Wan Kenobi" />
        </div>
    );
};

export default Error;
