import React, { Component } from 'react'
import { connect } from 'react-redux';
import './css/gallery.css';

export class Gallery extends Component {
  render() {
    const { images, selectedImage, dispatch } = this.props;
    return (
      <div className="image-gallery">
        <div className="gallery-image">
          <div>
            <img src={selectedImage} />
          </div>
        </div>
        <div className="image-scroller">
          {images.map((image, index) => (
            <div key={index} onClick={() => dispatch({ type: 'IMAGE_SELECTED', image })}>
              <img src={image} />
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
export default connect(mapStateToProps)(Gallery)