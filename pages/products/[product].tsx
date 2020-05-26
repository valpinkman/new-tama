import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

const Product = (props: any) => {
  const router = useRouter()

  useEffect(() => {
    console.log(props)
    console.log(router)
  })

  return <h1>Produit {router.query.product}</h1>
}

Product.getInitialProps = async () => {
  return {
    page: 'produit',
  }
}

export default Product

// export const getServerSideProps = async (props: any) => {
//   console.log(props)
//   return {
//     props: {}
//   }
// }
