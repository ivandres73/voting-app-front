import React from 'react'

const Product = ({product}) =>
	<div className="tile" key={product.id}>
		<h4>{product.title}</h4>
		<p>{product.description}</p>
		<p>{product.votes}</p>
	</div>

export default Product