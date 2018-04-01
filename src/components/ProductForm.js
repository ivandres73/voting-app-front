import React, { Component } from 'react'
import axios from 'axios'
import '../semantic-dist/semantic.css'

class ProductForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			title: this.props.product.title,
			description: this.props.product.description,
			votes: this.props.product.votes
		}
	}

	handleInput = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	handleBlur = () => {
		const product = {
			title: this.state.title,
			description: this.state.description
		}

		axios.put(
			`http://localhost:3001/products/${this.props.product.id}`,
			{product: product}
		).then(response => {
			console.log(response)
			this.props.updateProduct(response.data);
		}).catch(error => console.log(error))
	}

	render() {
		return (
			<div className='item'>
				<form onBlur={this.handleBlur}>
					<input className="input" type="text" name="title" placeholder="Product Name" value={this.state.title} onChange={this.handleInput} />
					<textarea className="input" name="description" placeholder="Describe your product" value={this.state.description} onChange={this.handleInput} ></textarea>
				</form>
			</div>
		);
	}

}

export default ProductForm