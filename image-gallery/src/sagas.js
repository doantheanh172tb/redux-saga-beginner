import { fetchImages } from './api';

export function* loadImages() {
  const images = yield fetchImages();
  console.log("Saga::loagImages>images", images)
}