import { Produto as ProdutoType } from '../App'
import Produto from '../components/Produto'
import { Produto as Product } from '../App'

import * as S from './styles'

type Props = {
  produtos: ProdutoType[]
  favoritos?: ProdutoType[]
  adicionarAoCarrinho?: (produto: ProdutoType) => void
  favoritar?: (produto: ProdutoType) => void
}

const ProdutosComponent = ({ produtos }: Props) => {
  return (
    <>
      <S.Produtos>
        {produtos.map((produto: Product) => (
          <Produto key={produto.id} produto={produto} />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
