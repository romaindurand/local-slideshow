import React, {Component} from 'react';
import { connect } from 'react-redux';
import { setCurrentSlide, setTimer, toggleSlideshow } from './actions/slides';
import { sidebarToggle } from './actions/sidebar';
import LeftNav from 'material-ui/lib/left-nav';
import TextField from 'material-ui/lib/text-field';
import Paper from 'material-ui/lib/paper';
import FloatingActionButton from 'material-ui/lib/floating-action-button';
import AvPlayArrow from 'material-ui/lib/svg-icons/av/play-arrow';
import AvPause from 'material-ui/lib/svg-icons/av/pause';
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

	setTimerDelay() {
		this.props.setTimer($('#delayInput').val())
	}

	setSlideIndex() {
		this.props.setCurrentSlide(+$('#slideIndexInput').val() -1, this.props.slides);
	}

	render(){
		var paperConf = {margin: '5px', padding: '10px'};
		var buttonToggle = this.props.slides.playing ? <AvPause /> : <AvPlayArrow />;
		return (
			<LeftNav open={this.props.sidebar.open}>
				<Paper style={paperConf}>
					<span style={{marginTop: '15px'}}>Slideshow delay (ms) : </span>
					<TextField style={{width: '100%'}} id='delayInput' value={this.props.slides.delay} onChange={this.setTimerDelay.bind(this)} />
				</Paper>
				<Paper style={paperConf}>
					<FloatingActionButton onTouchTap={this.props.toggleSlideshow.bind(this, this.props.slides)}>
						{buttonToggle}
					</FloatingActionButton>
				</Paper>
				<Paper style={paperConf}>
					<TextField style={{width: '100px'}} id='slideIndexInput' value={this.props.slides.currentIndex+1} onChange={this.setSlideIndex.bind(this)} />
					/ {this.props.slides.images.length}
				</Paper>
			</LeftNav>);
	}
}

export default connect(
  (state) => ({slides: state.slides, sidebar: state.sidebar}),
  {setCurrentSlide, sidebarToggle, setTimer, toggleSlideshow}
)(Sidebar);
