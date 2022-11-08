import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";
import React, { useState } from "react";

const Formulario = (props) => {
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    //Três states: um para cada campo de texto e uma função para indicar o que deve ser feito quando houver uma alteração.

    const aoSalvar = (evento) => {
      evento.preventDefault()
      props.aoColaboradorCadastrado({
      nome,
      cargo, 
      imagem, 
      time
    })
    setNome('')
    setCargo('')
    setImagem('')
    setTime('')
  }

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar sua coleção.</h2>
        <p>Copie o endereço da imagem no link: <a href="https://pt.wikipedia.org/wiki/Categoria:Cartazes_de_filmes_do_Studio_Ghibli" target="blank">Cartazes de filmes do Studio Ghibli</a>.</p>
        <p>Clique no link do anime, depois clique na imagem.</p>
        <p>Em seguida, copie o link da imagem na barra de navegação e cole na caixa de imagem abaixo</p>
        <br></br>

        <CampoTexto 
          obrigatorio={true} 
          label="Nome" 
          placeholder="Digite o nome do personagem"
          valor={nome}
          aoAlterado={valor => setNome(valor)} 
          />

          <CampoTexto 
          obrigatorio={true} 
          label="Características" 
          placeholder="Digite as características"
          valor={cargo}
          aoAlterado={valor => setCargo(valor)}
          />
        <CampoTexto 
        obrigatorio={true} 
        label="Imagem" 
        placeholder="Informe o endereço da imagem" 
        valor={imagem}
        aoAlterado={valor => setImagem(valor)}
        />

        <ListaSuspensa 
          obrigatorio={true} 
          label="Animações" 
          itens={props.times}
          valor={time}
          aoAlterado={valor => setTime(valor)}
          />
        <Botao>
          Criar Card
        </Botao>
      
      </form>
    </section>
  );
};

export default Formulario;

//Botão-dentro de <Botao> podemos colocar imagens ou icones e outros componente(children)

//Sempre que a gente quiser linkar-vincular uma variável Js ali dentro é entre chaves {} + o valor

//No componente formulário nós aguardamos pelo evento onSubmit. 
//Assim, podemos aproveitar a validação nativa do HTML dos inputs que são obrigatórios.
//No React, os eventos são nomeados com camelCase, logo: onclick vira onClick