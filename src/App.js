import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';

//CampoTexto está organizado de forma diferente para facilitar a importação. Já vai chamar o index.js na importação.

function App() {

  const times = [
    {
      nome: 'Nausicaä do Vale do Vento (1984)',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9',
   },

   {
    nome: 'O Castelo no Céu (1986)',
    corPrimaria: '#82CFFA',
    corSecundaria: '#E8F8FF',
 },

 {
  nome: 'Meu Amigo Totoro (1988)',
  corPrimaria: '#A6D157',
  corSecundaria: '#F0F8E2',
},

{
  nome: 'Túmulo dos Vagalumes (1988)',
  corPrimaria: '#E06B69',
  corSecundaria: '#FDE7E8',
},

{
  nome: 'O Serviço de Entregas da Kiki (1989)',
  corPrimaria: '#D86EBF',
  corSecundaria: '#FAE9F5',
},

{
  nome: 'Memórias de Ontem (1991)',
  corPrimaria: '#FEBA05',
  corSecundaria: '#FFF5D9',
},

{
  nome: 'Porco Rosso: O Último Herói Romântico (1992)',
  corPrimaria: '#FF8A29',
  corSecundaria: '#FFEEDF',
},

{
  nome: 'Eu Posso Ouvir o Oceano (1993)',
  corPrimaria: '#e1466b',
  corSecundaria: '#ff9f8f',
},

{
  nome: 'PomPoko: A Grande Batalha dos Guaxinins (1994)',
  corPrimaria: '#bed5ff',
  corSecundaria: '#dcd6ff',
},

{
  nome: 'Sussurros do Coração (1995)',
  corPrimaria: '#ffca1b',
  corSecundaria: '#f7fe4a',
},

{
  nome: 'Princesa Mononoke (1997)',
  corPrimaria: '#b897e9',
  corSecundaria: '#f8c3ed',
},

{
  nome: 'Meus Vizinhos os Yamadas (1999)',
  corPrimaria: '#4cce98',
  corSecundaria: '#a9dd93',
},

{
  nome: 'A Viagem de Chihiro (2001)',
  corPrimaria: '#b9624b',
  corSecundaria: '#e1b476',
},

{
  nome: 'O Reino dos Gatos (2002)',
  corPrimaria: '#eb4349',
  corSecundaria: '#f6bba7',
},

{
  nome: 'O Castelo Animado (2004)',
  corPrimaria: '#0880ff',
  corSecundaria: '#b3ffff',
},

{
  nome: 'Contos de Terramar (2006)',
  corPrimaria: '#00c0ff',
  corSecundaria: '#bdefed',
},

{
  nome: 'Ponyo: Uma Amizade Que Veio do Mar (2008)',
  corPrimaria: '#ff1d2b',
  corSecundaria: '#fffb9f',
},

{
  nome: 'O Mundo dos Pequeninos (2010)',
  corPrimaria: '#40a301',
  corSecundaria: '#a9f4d5',
},

{
  nome: 'Da Colina Kokuriko (2011)',
  corPrimaria: '#8c84ba',
  corSecundaria: '#d5eaec',
},

{
  nome: 'Vidas ao Vento (2013)',
  corPrimaria: '#00c2ff',
  corSecundaria: '#c5ffb5',
},

{
  nome: 'O Conto da Princesa Kaguya (2013)',
  corPrimaria: '#ff40e2',
  corSecundaria: '#c5ffb5',
},

{
  nome: 'As Memórias de Marnie (2014)',
  corPrimaria: '#20dbc9',
  corSecundaria: '#f2e8f5',
},

{
  nome: 'Aya e a Bruxa (2020)',
  corPrimaria: '#77005d',
  corSecundaria: '#ffc4e7',
},


]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    debugger
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/> 

      {times.map(time => <Time 
        key={time.nome} 
        nome={time.nome} 
        corPrimaria={time.corPrimaria} 
        corSecundaria={time.corSecundaria} 
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}
      
      
    </div>
  
  );
};

export default App;