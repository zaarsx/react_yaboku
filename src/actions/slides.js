export function slidesFetchDataSuccess(slides) {
    return {
        type: 'SLIDES_FETCH_DATA_SUCCESS',
        slides
    }
}

export function slidesFetchData(url) {
    return (dispatch) => {
        fetch(url, {})
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText)
                }
                return response
            })
            .then(response => response.json())
            .then(slides => dispatch(slidesFetchDataSuccess(slides)))
    };
}