import React from "react";
import Comentario from "../../components/Comentario/Comentario"


const TimeLine = ()=>{
    return(
    <Comentario
    data={comentario.data}
    comentario={comentario.comentario}
    autora={comentario.autora}
    />
    )
}

const comentario = {
    data: new Date(),
    comentario: 'Esse é o comentário',
    autora: {
      nome: 'Maria',
      hobbie: 'comer',
      fotoUrl: 'https://media.giphy.com/media/xT9IgITw5ljQ6jlw9a/giphy.gif',
      fotoNome: 'Perfil'
    }
  }


export default TimeLine;