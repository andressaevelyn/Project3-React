import React from "react";
import "./CardAvaliacao.css";
import LivroAvaliado from "../../LivroAvaliado/LivroAvaliado";
import logo from "../../logo.svg"

function CardAvaliacao(props){
    return(
        <div className="card-avaliacao">
           <LivroAvaliado nota="5" capa={props.logo} />
           <div className="resenha">
            <h4>{props.titulo}</h4>
            <p>{props.resenha}</p>
           </div>
        </div>
    );
}

export default CardAvaliacao; 