import Produto from '../components/Produto'
import { Produto as Product } from '../App'
import { useGetProductsQuery } from '../services/api'

import * as S from './styles'

const ProdutosComponent = () => {
  const { data: produtos, isLoading } = useGetProductsQuery()

  if (isLoading) return <h2>Carregando...</h2>

  return (
    <>
      <S.Produtos>
        {produtos?.map((produto: Product) => (
          <Produto key={produto.id} produto={produto} />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
