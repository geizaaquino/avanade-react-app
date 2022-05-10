import React, {useEffect, useState} from 'react';
import logo from '../logo.svg';
import "../App.css";



function Header(props){

    // estado é informação armazenada
    // as infomações são imutáveis
    //getter & setter
    // apartir do react tem os 16.8 Hooks - useAlgumaCoisa, useState, useEffect, useRef, useContext
    //const [getter, setter] = useStates(valor inicial );
const [company, setCompany] = useState(props.options.Empresa || "Nenhuma informada");

const [name, setName] = useState(props.options.nome);
const [site, setSite] = useState(props.options.site);
//executar a 1 vez que a pagina é executada(fiap. E cada vez que um estado for alterado(avanade). Ele executa novamente

useEffect(()=>{
    // Hook executa automaticamente, toda vez que a pagina é carregada - componenDidMount()
    //executa automaticamente toda vez que um estado é alterado. companentDidUpdate

    setCompany(company.toUpperCase());
},[company]);



    return(
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         {props.title} 
        </p>
        <a
          className={props.options.className}
          href={site}
          target="_blank"
          rel="noopener noreferrer"
        >
          {company} -{name}
        </a>
        <button onClick = {(e) => setCompany("Avanade")}>{`Mudando o nome de: ${company}`}</button>
      </header>

    );
}

export default Header;