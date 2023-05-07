import { useDispatch, useSelector } from 'react-redux'

import { Produto as ProdutoType } from '../../App'
import * as S from './styles'
import { addProductToCart } from '../../store/cart/cart.reducer'
import { selectCart } from '../../store/cart/cart.selector'

type Props = {
  produto: ProdutoType
  aoComprar?: (produto: ProdutoType) => void
  favoritar: (produto: ProdutoType) => void
  estaNosFavoritos: boolean
}

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor
  )

const ProdutoComponent = ({ produto, favoritar, estaNosFavoritos }: Props) => {
  const cartList = useSelector(selectCart)
  const dispatch = useDispatch()
  const handleCart = () => dispatch(addProductToCart(cartList, produto))

  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
      </S.Capa>
      <S.Titulo>{produto.nome}</S.Titulo>
      <S.Prices>
        <strong>{paraReal(produto.preco)}</strong>
      </S.Prices>
      <S.BtnComprar onClick={() => favoritar(produto)} type="button">
        {estaNosFavoritos
          ? '- Remover dos favoritos'
          : '+ Adicionar aos favoritos'}
      </S.BtnComprar>
      <S.BtnComprar onClick={handleCart} type="button">
        Adicionar ao carrinho
      </S.BtnComprar>
    </S.Produto>
  )
}

export default ProdutoComponent
