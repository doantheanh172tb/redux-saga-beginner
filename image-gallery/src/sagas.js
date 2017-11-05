import { fetchImages } from './api'
import { put } from 'redux-saga/effects'

export function* loadImages() {
  const images = yield fetchImages()
  console.log("Saga::loagImages>put->IMAGES_LOADED", images)
  yield put({ type: 'IMAGES_LOADED', images })
}