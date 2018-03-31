import React, {Component} from 'react'
import axios from 'axios'
import Product from './Product'
import update from 'immutability-helper'
import ProductForm from './ProductForm'

class ProductsContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			products: [],
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
		console.log('Boton presionado!')
		axios.post(
			'http://localhost:3001/products',
			{ product:
				{
					title: '',
					product: ''
				}
			}
		).then(response => {
			console.log(response)
			const products = update(this.state.product, {
				$splice: [[0, 0, response.data]]
			})
			this.setState({
				products: products,
				editingProductID: response.data.id
			})
		}).catch(error => console.log(error))
	}

	updateProduct = (product) => {
		const productIndex = this.state.products.findIndex(x => x.id === product.id)
		const products = update(this.state.products, {
			[productIndex]: { $set: product }
		})
		this.setState({products: products})
	}

	render() {
		return (
			<div>
				<div>
					<button className="newProductButton" onClick={this.addNewProduct}>
						New Product
					</button>
				</div>
				{this.state.products.map((product) => {
					if(this.state.editingProductID == product.id) {
						return(<ProductForm product={product} key={product.id} updateProduct={this.updateProduct}/>)
					} else {
						return(<Product product={product} key={product.id} />)
					}
				})}
			</div>
		);
	}

}

export default ProductsContainer