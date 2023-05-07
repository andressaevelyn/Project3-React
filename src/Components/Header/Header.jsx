import React, { useState, useEffect } from "react";
import "./Header.css";

function Header(props) {
  useEffect(() => {
    document.title = `${props.name} - Meu Perfil`;
  }, [props.name]);

  return (
    <header>
      <img className="foto-perfil" src={props.imagem} alt={props.alt} width={60} />
      <span className="nome-usuario">{props.name}</span>
    </header>
  );
}

export default Header;