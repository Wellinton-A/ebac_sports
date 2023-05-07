import { useDispatch, useSelector } from 'react-redux'

import { Produto as ProdutoType } from '../../App'
import * as S from './styles'
import { addProductToCart } from '../../store/cart/cart.reducer'
import { selectCart } from '../../store/cart/cart.selector'
import { selectFavs } from '../../store/favs/favs.selector'
import { setFavs } from '../../store/favs/favs.reducer'

type Props = {
  produto: ProdutoType
  aoComprar?: (produto: ProdutoType) => void
  favoritar?: (produto: ProdutoType) => void
  estaNosFavoritos?: boolean
}

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor
  )

const ProdutoComponent = ({ produto }: Props) => {
  const cartList = useSelector(selectCart)
  const favs = useSelector(selectFavs)
  const dispatch = useDispatch()

  const isInFav = () => {
    if (favs.some((item) => item.id === produto.id)) {
      return true
    }
    return false
  }

  const handlefav = () => dispatch(setFavs(produto))

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
      <S.BtnComprar onClick={handlefav} type="button">
        {isInFav() ? '- Remover dos favoritos' : '+ Adicionar aos favoritos'}
      </S.BtnComprar>
      <S.BtnComprar onClick={handleCart} type="button">
        Adicionar ao carrinho
      </S.BtnComprar>
    </S.Produto>
  )
}

export default ProdutoComponent
