import React, { Component } from 'react'
import { connect } from 'react-redux';
import './css/gallery.css';

import { bindActionCreators } from 'redux'
import * as GalleryActions from './actions.js';

export class Gallery extends Component {
  componentDidMount() {
    this.props.loadImages();
  }
  render() {
    const { images, selectedImage, selectImage } = this.props;
    return (
      <div className="image-gallery">
        <div className="gallery-image">
          <div>
            <img src={selectedImage} />
          </div>
        </div>
        <div className="image-scroller">
          {images.map((image, index) => (
            <div key={index} onClick={() => selectImage(image)}>
              <img className={image == selectedImage ? "image-selected" : "image-unselect"} src={image} />
            </div>
          ))}
        </div>
      </div>
    )
  }
}
function mapStateToProps(state) {
  console.log("Gallery:mapStateToProps", state)
  return {
    images: state.images,
    selectedImage: state.selectedImage
  }
}
function mapActionCreatorsToProps(dispatch) {
  return bindActionCreators(GalleryActions, dispatch);
}
export default connect(mapStateToProps, mapActionCreatorsToProps)(Gallery)