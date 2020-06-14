export function slides(state = [], action) {
    switch (action.type) {
        case 'SLIDES_FETCH_DATA_SUCCESS':
            return action.slides;
        default:
            return state;
    }
}