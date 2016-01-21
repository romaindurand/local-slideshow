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

$('#dropzone').on('dragover', function(event) {
    event.preventDefault();
    event.stopPropagation();
});

$(window).on('dragleave', function(event) {
    event.preventDefault();
    event.stopPropagation();
});

$(window).on('drop', function(event) {
    event.preventDefault();
    event.stopPropagation();
});
