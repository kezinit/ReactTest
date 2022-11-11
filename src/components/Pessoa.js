// Utilizando Props
function Pessoa({nome, idade, profissao, foto}) {
    return ( 
        <div>
            
            <h2>Nome: {nome}</h2>
            <h2>Idade: {nome}</h2>
            <h2>Profissao: {nome}</h2>
            <img src={foto} alt={nome}/>

        </div>
     );
}

export default Pessoa;