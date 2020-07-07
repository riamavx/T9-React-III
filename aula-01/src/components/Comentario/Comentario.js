import React from "react";
import InformacoesGerais from "../InformacoesGerais/InformacoesGerais";
import {formatarData} from "../../Utils/formatar"


const Comentario = (props) => {
    return (
      <div className="comentario">
        <InformacoesGerais pessoa={props.autora} />
        <div>{props.comentario}</div>
         {formatarData(props.data)}  {/*função auxiliadora */}
      </div>
  
    )
  }


  export default Comentario;

  