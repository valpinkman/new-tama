import React, { useEffect } from 'react'

const Product = (props: any) => {
  useEffect(() => {
    console.log(props)
  })

  return <h1>Product</h1>
}

Product.getInitialProps = async ({ query }: { query: any }) => {
  console.log(query)
  return {
    page: 'product',
  }
}

export default Product
