export default function Home(){
  const ext = {
      JSX: "ARQUIVO JS QUE INTERPRETAM HTML",
      TSX: "ARQUIVO TYPESCRIPT QUE INTERPRETA HTML",
  }

  function entre(valor){
      if(valor > 1 && valor < 100){
          return "Valor é maior que UM e menor que CEM"
      }else{
          return "O valor é menor que UM ou maior que CEM"
      }
  }

  const tags = <h3>Esse H3 foi impresso por JavaScript. Mas escrito por JSX</h3>

  return (
      <div>
          <h1>Componentizaçao de JSX</h1>
          <h2>Revisão da componentização, vou utilizar apenas uma página para demonstração de todo o resultado</h2>
          
          <h3>Extensões de arquivos:</h3>
          <ul>
              <li><strong>JSX</strong> - {ext.JSX}</li>
              <li><strong>TSX</strong> - {ext.TSX}</li>
          </ul>

          <hr />

          <h1 className="center">Utilizando JS dentro do JSX</h1>
          <p>
              2 + 2 = {2 + 2}
          </p>
          <p>
              {"Essa mensagem foi escrita por JS"}
          </p>
          <p>
              A variavel recebeu como parametro um valor maior que um e menor que cem?<br />
              "{entre(11)}"
          </p>

          <hr />

          <h1 className="center">Utilizando JSX dentro de Javascript</h1>
          {tags}
          <a href="/lista"><button>LISTA feita com a combinação de JS com JSX</button></a>
          <hr />


          <h1 className="center">Componentes: </h1>
          <p>Coração do React, é baseado na criação de componentes</p>
          <a href="/components"><button>Ir para os componentes</button></a>





          <h3>Teste com inputs</h3>
          <input type="number" /><br />
          <input type="numer" /><br />
          <input type="button" value="Enviar" />
          <hr />
          
      </div>

  )
}
