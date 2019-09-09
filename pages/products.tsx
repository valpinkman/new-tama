import React, { useEffect } from 'react'

interface Props {
  name?: string;

}

const Products = (props: any) => {
  useEffect(() => {
    console.log(props)
  })

  return (
    <h1>Products</h1>
  )
}

Products.getInitialProps = async ({ query }: { query: any }) => {
  console.log(query)
  return {
    page: 'products',
  }
}

export default Products
