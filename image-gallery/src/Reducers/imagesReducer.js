import { defaultImageState } from './initialState'
import { IMAGE_SELECTED, IMAGES_LOADED } from '../Constants/actionsType'

export default function imagesReducer(state = defaultImageState, action) {
    console.log("Reducer/imagesReducer");
    console.log(state, action)
    switch (action.type) {
        case IMAGE_SELECTED:
            return { ...state, selectedImage: action.image }
        case IMAGES_LOADED:
            return { ...state, images: action.images }
        default:
            return state
    }
}