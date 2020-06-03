import React from 'react';
import { Link } from 'react-router-dom';
import {FiCheckCircle} from 'react-icons/fi';

import './styles.css';


const CreatedPoint = () => {
  return (
    <div id="created-point">
      <div className="content">
        <FiCheckCircle /> 
        <h2> Ponto cadastrado com sucesso! </h2>
        <Link to="/create-point">Cadastrar um novo ponto</Link>
      </div>
      
      
    </div>
  )
};

export default CreatedPoint;

