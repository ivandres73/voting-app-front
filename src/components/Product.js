import React from 'react'
import '../semantic-dist/semantic.css'

const Product = ({product}) =>
	<div className='item'>
		<div className='image'>
			<img/>
		</div>
		<div className='middle aligned content'>
			<div className='header'>
				<a>
					<i className='large caret up icon' />
				</a>
				{product.votes}
			</div>
			<div className='description'>
				<a>
					{product.title}
				</a>
				<p>
					{product.description}
				</p>
			</div>
			<div className='extra'>
				<span>Submitted by:</span>
				<img
					className='ui avatar image'
				/>
			</div>
		</div>
	</div>

export default Product