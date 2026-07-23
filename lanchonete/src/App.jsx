import React from 'react'
import Cabecalho from './components/Cabecalho'
import CartaoLanche from './components/CartaoLanche'
import Banner from './components/Banner'

const lanches = [
  { id: 1, nome: "X-Burguer", preco: 18, descricao: "Pão, carne e queijo"},
  { id: 2, nome: "X-Salada", preco: 22, descricao: "Alface, tomate e maionese da casa"},
  { id: 3, nome: "X-Bacon", preco: 26, descricao: "Bacon crocante em dobro" },
  { id: 4, nome: "Batata Frita", preco: 12, descricao: "Porção média bem sequinha" },

]

const App = () => {
  return (
    <div>
      <Banner />
      <Cabecalho />
      <h1>Cardápio:</h1>
      {lanches.map((l) => (
        <CartaoLanche key={l.id} nome={l.nome} preco={l.preco} descricao={l.descricao}/>

      ))}
     
    </div>
  )
}

export default App
