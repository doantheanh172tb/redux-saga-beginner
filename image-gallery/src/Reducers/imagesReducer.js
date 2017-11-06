const defaultState = {
    images: []
}
export default function images(state = defaultState, action) {
    console.log(state, action)
    switch (action.type) {
        case 'IMAGE_SELECTED':
            return { ...state, selectedImage: action.image }
        case 'IMAGES_LOADED':
            return { ...state, images: action.images }
        default:
            return state
    }
}