import React from 'react';
import './fotoPessoa.css';



const FotoPessoa = (props) => {
    return (
      <img
        src={props.pessoa.fotoUrl}
        alt={props.pessoa.fotoNome}
      />
    )
  }


  export default FotoPessoa;