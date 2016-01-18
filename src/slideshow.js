import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setImages } from './actions/slides';
import Slide from './slide';
import DropZone from './dropzone';
import ThumbList from './thumblist';

export class Slideshow extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.slides.images.length ? 
          [
          <ThumbList />,
          <Slide /> 
          ]
          : 
          <DropZone dropCallback={this.dropCallback.bind(this)} random={true}/>}
      </div>
    );
  }

  dropCallback(images) {
    this.props.setImages(images);
  }
}

export default connect(
  state => ({slides: state.slides}),
  {setImages}
)(Slideshow);
