import { IMAGE_SELECTED, LOAD_IMAGES } from '../Constants/actionsType'

export function selectImage(image) {
    return {
        type: IMAGE_SELECTED,
        image
    }
}

export function loadImages() {
    return {
        type: LOAD_IMAGES
    }
}