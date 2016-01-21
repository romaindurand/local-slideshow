import React, { Component } from 'react';
import $ from 'jquery';
import _ from 'lodash';

export class DropZone extends Component {
  render() {
    return (
      <div id='dropzone' style={{
        maxWidth: '100%',
        backgroundColor: '#ccc',
        borderRadius: '30px',
        border: '10px dashed #aaa',
        boxSizing: 'border-box',
        margin: '10px',
      }}>
        <div style={{
          position: 'relative',
          textAlign: 'center',
          fontSize: '50px',
          verticalAlign: 'middle',
          width: '100%',
          color: '#999',
          top: '50%',
          textShadow: '2px 2px 0 #eee'
      }}>Drop your image files or image folder here !</div>
      </div>
    );
  }

  componentDidMount() {
    $('#dropzone').css('height', window.innerHeight - 20 + 'px');
    $('#dropzone').on('drop', ()=> {
      event.preventDefault();
      var length = event.dataTransfer.files.length;
      var images = [];
      for (var i = 0; i < length; i++) {
        images.push(event.dataTransfer.files[i]);
      }
      if(this.props.random) {
        images = _.shuffle(images);
      }
      console.log('dropzone calling dropCallback');
      this.props.dropCallback(images);
    })
  }
}

export default DropZone;
