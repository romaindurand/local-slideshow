import React from 'react';
import { render } from 'react-dom';
import Slideshow from './slideshow';
import $ from 'jquery';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider } from 'react-redux';
import { bindActionCreators } from 'redux';
import initStore from './config/store';
import isDev from 'isdev';
import DevTools from './config/devtools';

injectTapEventPlugin();
const devTools = isDev ? <DevTools /> : null;
const store = initStore();

render(<Provider store={store}>
    <div>
      {devTools}
      <Slideshow />
    </div>
  </Provider>, document.getElementById('root'));

$("#dropzone").on("dragover", function(event) {
    event.preventDefault();
    event.stopPropagation();
});

$(window).on("dragleave", function(event) {
    event.preventDefault();
    event.stopPropagation();
});

$(window).on("drop", function(event) {
    event.preventDefault();
    event.stopPropagation();
});

function initTimer() {
  timerId = window.setInterval(function() {
    if(playing) {
      nextImage();
    }
  }, delay);
}

function resetTimer() {
  window.clearTimeout(timerId);
  initTimer();
}

function nextImage() {
  currentIndex ++;
  if(currentIndex > images.length -1) {
    currentIndex = 0;
    if(playing) {
      images = _.shuffle(images);
    }
  }
  //displayCurrentImage();
}

function previousImage() {
  currentIndex --;
  if(currentIndex < 0) {
    currentIndex = images.length -1;
  }
  //displayCurrentImage();
}



$(window).keyup(function () {
  // console.log(event.which); // eslint-disable-line
  switch(event.which) {
    case 32:
      resetTimer();
      playing = !playing;
    break;
    case 37:
      resetTimer();
      previousImage();
    break;
    case 39:
      resetTimer();
      nextImage();
    break;

    //mark as delete
    case 46: //suppr
    case 96: //numpad 0
      deleteList.push(images[currentIndex].name);
      console.log(deleteList);//eslint-disable-line
      nextImage();
    break;
  }
});

$("#slide img").click(function () {
  resetTimer();
  nextImage();
})