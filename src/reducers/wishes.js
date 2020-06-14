export function wishes(state = [], action) {
    switch (action.type) {
        case 'WISHES_FETCH_DATA_SUCCESS':
            return action.wishes;
        default:
            return state;
    }
}