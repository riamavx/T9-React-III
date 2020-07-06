import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';


function formatarData(data){
  return data.toLocaleDateString();
}

function FotoUsuario(props) {
  return (
    <img
      src={props.usuario.fotoUrl}
      alt={props.usuario.fotoNome}
    />
  )
}


function DadosUsuario(props) {
  return (
    <div>
    <div> {props.usuario.nome}</div>
    <div>{props.usuario.hobbies}</div>
    </div>
  )
}

function InformacoesGerais(props) {
  return (
    <div className="InformacaoUsuario">
      <FotoUsuario usuario={props.usuario} />
      <DadosUsuario usuario={props.usuario.nome} />
    </div>
  )
}

function Comentarios(props) {
  return (
    <div className="Comentario">
      <InformacoesGerais usuario={props.autora} />
      <div>{props.comentario}</div>
       {formatarData(props.data)}  {/*função auxiliadora */}
    </div>

  )
}

const comentario = {
  data: new Date(),
  autora: {
    nome: "Maria",
    fotoUrl:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fknowyourmeme.com%2Fphotos%2F1141277-goose-on-fire-fire-duck&psig=AOvVaw0cBjmI_u3RyLyVPjK_28RG&ust=1594132893300000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIjFtfztuOoCFQAAAAAdAAAAABAD",
    fotoNome: "perfil"
  }

}

ReactDOM.render(
  <React.StrictMode>
    <comentario 
    data ={comentario.data}
    comentario={comentario.comentario}
    autora = {comentario.autora}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();