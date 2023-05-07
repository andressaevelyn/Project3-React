import React from 'react';
import "./Resenhas.css";
import CardAvaliacao from "../../Components/CardAvaliacao/CardAvaliacao"
import resenha1 from "../../assets/resenha1.webp"
import resenha2 from "../../assets/resenha2.webp"


function Resenhas() {
    return(
        <div>
        <h2>Ultimas Avaliacoes</h2>
      <div className='principal'>
        <CardAvaliacao logo={resenha1}titulo="Resenha - O Programador Apaixonado" resenha="Escrito pelo desenvolvedor Chad Fowler, renomado internacionalmente, O Programador Apaixonado ensina como construir uma carreira na área de desenvolvimento, contando o passo a passo para essa tarefa, de forma leve e inteligente." />
        <CardAvaliacao logo={resenha2}titulo="Resenha - Javascript for Kids" resenha="Não se engane, apesar do título e visual infantil, o livro é uma poderosa ferramenta para compreender de maneira simples e didática uma das linguagens de programação mais importantes, o JavaScript. Dessa forma, desde crianças até pessoas adultas podem se beneficiar desse livro." />
      </div>
      </div>
    );
}

export default Resenhas;