import React, {Component} from 'react';
import {Thumb} from './thumb';
import { connect } from 'react-redux';
import { setCurrentSlide } from './actions/slides';

export class ThumbList extends Component {
	constructor(props){
		super(props);
	}

	render(){
		var thumbs = this.props.slides.images.map((thumb, index) => {
			return <Thumb image={thumb} onClick={this.props.setCurrentSlide.bind(this, index)}/>	
		});
		return (<div style={{width: '20%', height: '100%', position: 'absolute', top: 0, left: 0}}>{thumbs}</div>);
	}
}

export default connect(
  state => ({slides: state.slides}),
  {setCurrentSlide}
)(ThumbList);
