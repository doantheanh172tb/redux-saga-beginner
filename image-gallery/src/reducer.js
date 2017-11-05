export default function images(state, action) {
    console.log(state, action)
    switch (action.type) {
        case 'TEST':
            console.log('THIS IS ONLY A TEST')
            return state
        default:
            state
    }
}