import React from "react";
import "./Estante.css";
import LivroAvaliado from "../../LivroAvaliado/LivroAvaliado";
import Livro1 from "../../assets/livro1.jpeg";
import Livro2 from "../../assets/livrosub.jpeg";
import Livro3 from "../../assets/livrosub1.jpeg";
import Livro4 from "../../assets/livro4.jpeg";
import Livro5 from "../../assets/livrosub2.jpeg";
import Livro6 from "../../assets/livrosub3.jpeg";
import Livro7 from "../../assets/livro7.jpeg";
import Livro8 from "../../assets/livrosub4.jpeg";



function Estante(){
    return(
        <div className="estante">
            <h2 className='text'>Minha Estante</h2>
            <div className="rows">
            <LivroAvaliado nota="3" capa={Livro1}/>
            <LivroAvaliado nota="4" capa={Livro2}/>
            <LivroAvaliado nota="5" capa={Livro3}/>
            <LivroAvaliado nota="2" capa={Livro4}/>
            </div>
            <div className="rows">
            <LivroAvaliado nota="4" capa={Livro5}/>
            <LivroAvaliado nota="5" capa={Livro6}/>
            <LivroAvaliado nota="4" capa={Livro7}/>
            <LivroAvaliado nota="5" capa={Livro8}/>
            </div>
        </div>
    );
}

export default Estante;