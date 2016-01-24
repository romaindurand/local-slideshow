import React, { Component } from 'react';
import $ from 'jquery';
import { connect } from 'react-redux';
import { nextSlide, previousSlide, toggleSlideshow } from './actions/slides';

export class Slide extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.timerId;
  }

  componentDidMount() {
    this.loadCurrentImage(0);
    $('#slide img').on('load', () => {
      this.keepAspectRatio();
    });

    $(window).keyup(function () {
      if (document.activeElement.tagName === 'INPUT') return;

      switch(event.which) {
        case 32:
          this.props.toggleSlideshow(this.props.slides);
        break;
        case 37:
          //resetTimer();
          this.props.previousSlide(this.props.slides);
        break;
        case 39:
          //resetTimer();
          this.props.nextSlide(this.props.slides);
        break;
      }
    }.bind(this));
  }

  loadCurrentImage(index){
    if (this.props.slides.filtered_images.length == 0) {
      return;
    }
    
    var file = this.props.slides.filtered_images[index];
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

  onTimerTick() {
    this.props.nextSlide(this.props.slides);
  }

  manageTimer(playing) {
    window.clearInterval(this.timerId);
    this.timerId = null;
    if(playing) {
      this.timerId = window.setInterval(this.onTimerTick.bind(this), this.props.slides.delay);
    }
  }

  render() {
    this.manageTimer(this.props.slides.playing);
    this.loadCurrentImage(this.props.slides.currentIndex);
    return (
      <div id="slide" style={{
        textAlign: 'center',
        margin: 'auto'
      }}><img src="" onTouchTap={this.props.nextSlide.bind(this, this.props.slides)}/></div>
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
  (state) => ({slides: state.slides}),
   {nextSlide, previousSlide, toggleSlideshow}
)(Slide);
