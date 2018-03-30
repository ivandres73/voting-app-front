import React, { Component } from 'react'
import axios from 'axios'

class ProductForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			title: this.props.product.title,
			body: this.props.product.body,
			votes: this.props.product.votes
		}
	}

	handleInput = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	render {
		return (
			<div className="tile">
				<form>
					<input className="input" type="text" name="title" placeholder="Product Name" value={this.state.title} onChange={this.handleInput} />
					<textarea className="input" name="body" placeholder="Describe your product" value={this.state.body} onChange={this.handleInput} ></textarea>
				</form>
			</div>
		);
	}

}

export default ProductForm