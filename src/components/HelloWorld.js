import Frase from "./Frase";

function HelloWorld() {
    const nome = 'Kevinho'
    return ( 
        <div>
        <p> Primeiro componente</p>
        <p> Podem me chamar de <b>{nome}</b></p>
        <Frase />
        </div>
     );
}

export default HelloWorld;