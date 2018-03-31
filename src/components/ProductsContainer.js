import React, {Component} from 'react'
import axios from 'axios'
import Product from './Product'
import update from 'immutability-helper'
import ProductForm from './ProductForm'

class ProductsContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			ideas: [],
			editingIdeaID: null
		}
	}

	componentDidMount() {
		axios.get('http://localhost:3001/products.json')
		.then(response => {
			console.log(response)
			this.setState({products: response.data})
		})
		.catch(error => {
			console.log(error);
		})
	}

	addNewProduct = () => {
		console.log('Boton presiona do!')
		axios.post(
			'http://localhost:3001/products',
			{ product:
				{
					title: '',
					body: ''
				}
			}
		).then(response => {
			console.log(response)
			const ideas = update(this.state.product, {
				$splice: [[0, 0, response.data]]
			})
			this.setState({
				products: products,
				editingIdeaID: response.data.id
			})
		}).catch(error => console.log(error))
	}

	render {
		return (
			<div>
				<div>
					<button className="newProductButton" onClick={this.addNewProduct}>
						New Product
					</button>
				</div>
				{this.state.products.map((product) => {
					if(this.state.editingIdeaID == product.id) {
						return(<ProductForm product={product} key={product.id}/>)
					} else {
						return(<Product product={product} key={product.id} />)
					}
				})}
			</div>
		);
	}

}

export default ProductsContainer