import React, {Component} from 'react';
import {Card, CardMedia} from 'material-ui';

export class Thumb extends Component{
	constructor(props){
		super(props);
		this.state = {};
	}

	componentDidMount(){
	    var reader = new FileReader();
	    reader.onload = (e) => {
	      this.setState({
	        image: e.target.result
	      });
	    };
	    reader.readAsDataURL(this.props.image);
	}

	render(){
		return (
			<Card style={{margin: '10px'}} onTouchTap={this.props.onClick.bind(this)}>
				<CardMedia>
			      <img src={this.state.image}/>
			    </CardMedia>
			</Card>
			);
	}
}

export default Thumb;