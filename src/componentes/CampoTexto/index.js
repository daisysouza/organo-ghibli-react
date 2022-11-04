// Feito com constante e exportado com export default

import './CampoTexto.css'

const CampoTexto = (props) => {

    const placeholderModificada = `${props.placeholder}...`

  
    const aoDigitado = (evento) => {
       props.aoAlterado(evento.target.value)
        
    }
    //Mapeamos a variável pro DOM
    //estado do componente-(coração do react) se o meu estado for alterado, o meu componente tem que ser renderizado novamente
    //target - evento do js - todo evento js vai ter um targuet e pode ter um value
    //é possível ouvir varios eventos html
      
    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label> 
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificada}/>
           
        </div>
    )

}

export default CampoTexto

    //O React está recebendo props(é o nome da variável-podia ser outra, mas todo mundo usa props) 
    //Propriedades que o componente recebeu
    //Componentes react começam com letra maiúscula

    //label-imprimiu direto no html
    //Input-o valor do placeholder tem que vir da variável(no App.js)