import React from "react";
import "./Menu.css"
import BtnMenu from "../BtnMenu/BtnMenu";
import { TiHeartOutline, TiStarOutline, TiPointOfInterestOutline,TiTickOutline } from "react-icons/ti";
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import Favoritos from "../../pages/Favoritos/Favoritos";
import Avaliados from "../../pages/Avaliados/Avaliados";
import Desejados from "../../pages/Desejados/Desejados";
import Resenhas from "../../pages/Resenhas/Resenhas";



function Menu(){
    return(
        <div className="menu">
          <ul>

          <li>
          <Link to="/estante"><BtnMenu icone={<TiPointOfInterestOutline />} nomeBtn="Estante" /></Link>
          </li>

          <li>
          <Link to="/resenhas"><BtnMenu icone={<TiStarOutline />} nomeBtn="Resenha" /></Link>
          </li>


          <li>
            <Link to="/favoritos"><BtnMenu icone={<TiHeartOutline />} nomeBtn="Favoritos" /></Link>
          </li>


          <li>
          <Link to="/avaliados"><BtnMenu icone={<TiStarOutline />} nomeBtn="Avaliados" /></Link>
          </li>
        </ul>
        
            
        </div>
    );
}

export default Menu;