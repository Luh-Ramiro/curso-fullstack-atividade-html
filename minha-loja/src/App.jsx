import React from 'react'
import Cabecalho from './components/Cabecalho'
import CartaoProduto from './components/CartaoProduto'
import TrabalhandoComImagens from './components/TrabalhandoComImagens'

const App = () => {

  const produtos = [
    {  id: 1, nome: "Teclado", preco: 320, descricao: "Mecânico" },
    {  id: 2, nome: "Mouse", preco: 200, descricao: "Ergonômico" },
    {  id: 3, nome: "Cadeira", preco: 1500, descricao: "Escritório"}
  ]

  return (
    <div>
      <TrabalhandoComImagens />
      <Cabecalho />
      <h1>Lista de Produtos:</h1>

      {
        produtos.map((p) => (
          <CartaoProduto key={p.id} nome={p.nome} preco={p.preco} descricao={p.descricao} />
        ))
      }

      <CartaoProduto nome="notebook" preco={15000} descricao="Notebook Macbook Pro" />
      
    </div>
  )
}

export default App
