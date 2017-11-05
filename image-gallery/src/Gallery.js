import React, { Component } from 'react'
import {connect} from 'react-redux';
import './css/gallery.css';

export class Gallery extends Component {
  constructor(props) {
    super(props);
    this.props.dispatch({type: 'TEST'});
    console.log(props);
    this.state = {
      images: []
    }
  }
  handleThumbClick(selectedImage) {
    this.setState({
      selectedImage
    })
  }
  componentDidMount() {
    const API_KEY = 'a46a979f39c49975dbdd23b378e6d3d5';
    const API_ENDPOINT = `https://api.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=${API_KEY}&format=json&nojsoncallback=1&per_page=5`;

    fetch(API_ENDPOINT).then((response) => {
      return response.json().then((json) => {
        const images = json.photos.photo.map(({ farm, server, id, secret }) => {
          return `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`
        });

        this.setState({ images, selectedImage: images[0] });
      })
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
export default connect()(Gallery)