import React from 'react'
import Colaborador from '../Colaborador';
import './Time.css'

const Time = (props) => {
    const css = { backgroundColor: props.corSecundaria }

    return (
       (props.colaboradores.length > 0) && <section className='time' style={css}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className='colaboradores'>
                 {props.colaboradores.map( colaborador => <Colaborador corDeFundo={props.corPrimaria} key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem}/> )}
            </div>
        </section>
    
    );
}

export default Time

//&& operador boleano de s/n
//componente react sempre com letra maiúscula - Time
//Quando passamos o nome que queremos receber dinamicamente - para cada instância desse componente, para cada vez que se repetir, teremos um nome diferente, por isso recebemos por props.