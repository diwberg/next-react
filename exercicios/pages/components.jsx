import Titulo from '../components/Titulo'
import styled from 'styled-components'


export default function componentes(){
    const Button = styled.button`
    
    `

    return (
        <>
        <h1>Componentes</h1>
        <hr />
        <h3>Primeiro componente:</h3>
        <Titulo 
        titulo='Bom dia' 
        subtitulo='Seja bem-vindo'
        bomdia = {true}
        />

        <hr />

        <h3>Componentes de Estilização</h3>

        <a href="/primeiro"><Button> Voltar</Button></a>
        </>
    )
}