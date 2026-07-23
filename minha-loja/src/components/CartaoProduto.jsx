import React from 'react'

const CartaoProduto = ({ nome, preco, descricao}) => {
  return (
    <div>
      <p>Nome: {nome}</p>
      <p>Preço: {preco}</p>
      <p>Descrição: {descricao}</p>
    </div>
  )
}

export default CartaoProduto
