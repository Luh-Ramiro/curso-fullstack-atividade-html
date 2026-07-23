import React from 'react'

const CartaoLanche = ({nome, preco, descricao}) => {
  return (
    <div>
      <p>Nome: {nome}</p>
      <p>Preço: R$ {preco}</p>
      <p>Descrição: {descricao}</p>
    </div>
  )
}

export default CartaoLanche
