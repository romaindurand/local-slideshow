import React, { Component } from 'react';
import $ from 'jquery';
import { connect } from 'react-redux';

export class Slide extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.setCurrentImage(0);
    $('#slide img').on('load', () => {
      this.keepAspectRatio();
    });
  }

  setCurrentImage(index){
    var file = this.props.slides.images[index];
    var reader = new FileReader();

    reader.onload = (e) => {
      console.log("reader.load");//eslint-disable-line
      this.renderImage(e.target.result);
    };
    reader.readAsDataURL(file);
  }

  renderImage(data) {
    $('#slide img').attr('src', data);
  }

  render() {
    this.setCurrentImage(this.props.slides.currentIndex);
    return (
      <div id="slide" style={{
        height: '100%',
        textAlign: 'center',
        margin: 'auto'
      }}>
        <img src=""/>
        <span>{this.props.slides.currentIndex}</span>
      </div>
    );
  }

  keepAspectRatio() {
    console.log("keepAspectRatio");//eslint-disable-line
    var currentImage = $('#slide img');
    var imageRatio = currentImage.height() / currentImage.width();
    var windowRatio = $(window).innerHeight() / ($(window).innerWidth());
    if (imageRatio < windowRatio) {
      $('#slide img').css('height', $(window).innerWidth() * imageRatio);
      $('#slide img').css('padding-top', ($(window).innerHeight() - $(window).innerWidth() * imageRatio) / 2 + 'px');
    } else {
      $('#slide img').css('height', $(window).innerHeight());
      $('#slide img').css('padding-top', '0px');
    }
  }
}

export default connect(
  (state) => ({slides: state.slides})
)(Slide);
