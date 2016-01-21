import React, {Component} from 'react';
import {Thumb} from './thumb';
import { connect } from 'react-redux';
import { setCurrentSlide } from './actions/slides';
import { sidebarToggle } from './actions/sidebar';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';
import $ from 'jquery';

export class Sidebar extends Component {
	constructor(props){
		super(props);
	}

	componentDidMount() {
		$(window).keyup(function(){
			switch(event.which) {
				case 27:
					this.props.sidebarToggle();
					break;
			}
		}.bind(this));
	}

	render(){
		return (<LeftNav open={this.props.sidebar.open} />);
	}
}

export default connect(
  (state) => ({slides: state.slides, sidebar: state.sidebar}),
  {setCurrentSlide, sidebarToggle}
)(Sidebar);
