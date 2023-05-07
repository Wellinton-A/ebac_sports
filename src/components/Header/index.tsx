import { useSelector } from 'react-redux'

import * as S from './styles'

import { Produto as Product } from '../../App'
import { selectCart } from '../../store/cart/cart.selector'

import cesta from '../../assets/cesta.png'
import { paraReal } from '../Produto'
import { selectFavs } from '../../store/favs/favs.selector'

const Header = () => {
  const cartList = useSelector(selectCart)
  const favs = useSelector(selectFavs)

  const valorTotal = cartList.reduce((acc, item: Product) => {
    acc += item.quantity * item.preco
    return acc
  }, 0)

  const itemsInCart = cartList.reduce((acc, item: Product) => {
    acc += item.quantity
    return acc
  }, 0)

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{favs.length} favoritos</span>
        <img src={cesta} />
        <span>
          {itemsInCart} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
