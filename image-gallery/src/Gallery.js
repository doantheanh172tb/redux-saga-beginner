import React, { Component } from 'react'
import './css/gallery.css';

const flickrImages = [
  "http://data.whicdn.com/images/17745253/622087-bigthumbnail_large.jpg",
  "http://donpk.com/wp-content/uploads/2016/04/Beautiful_nature_3d_wallpapers_for-desktop_brackgrounds03-1024x573.jpg?x46012",
  "http://f9view.com/wp-content/uploads/2013/06/Heart-Touching-Wallpapers-For-Desktop-Natural-Scene_3.jpg",
  "http://f9view.com/wp-content/uploads/2013/06/Wallpapers-for-Desktop-Heart-Touching-View.jpg",
  "http://image.desk7.net/Landscape%20Wallpapers/5589_1280x800.jpg"
];

export default class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: flickrImages,
      selectedImage: flickrImages[0]
    }
  }
  handleThumbClick(selectedImage) {
    this.setState({
      selectedImage
    })
  }
  render() {
    const { images, selectedImage } = this.state;
    return (
      <div className="image-gallery">
        <div className="gallery-image">
          <div>
            <img src={selectedImage} />
          </div>
        </div>
        <div className="image-scroller">
          {images.map((image, index) => (
            <div key={index} onClick={this.handleThumbClick.bind(this, image)}>
              <img src={image} />
            </div>
          ))}
        </div>
      </div>
    )
  }
}