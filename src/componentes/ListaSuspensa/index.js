import './ListaSuspensa.css'

const ListaSuspensa = (props) => {

    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.required} value={props.valor}>
                <option value=""></option>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    );
};

export default ListaSuspensa

//Pra cada item retorna uma option
//Chave única para cada-ajudar o React a saber quando ele tem que renderizar


//Uso do Map no React- A gente precisa de algum método que faça interação nessa lista e retorne para gente uma lista diferente.
//Quero ter uma lista de strings e depois da iteração quero uma lista de elementos do jsx
//Para cada item da lista temos que renderizar o option
//Iterar em cima desse elemento-option-renderizando um html para cada item da lista
// [] .map do js - todo array (toda coleção) do js tem esse método(devolve uma nova lista transformada-mapeada)
//Pra cada iem da lista vai me retornar um array novo manipulado (percorrer e retornar outra coisa)
