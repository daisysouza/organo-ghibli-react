import { Fragment } from 'react'
import './Banner.css'

export const Banner = () => {
    //JSX forma como o react lê o jsx e transforma em elementos no DOM (não é html é jsx)
    //Feito com função e com export default
    //Class - classe no js e className - classe no react

    return(
        <Fragment>
            <header className="banner">
                    <img src="/imagens/banner.png" alt="O banner principal da página do Organo"/>
            </header>
        </Fragment>
    )

}

