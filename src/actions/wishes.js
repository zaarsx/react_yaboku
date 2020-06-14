export function wishesFetchDataSuccess(wishes) {
    return {
        type: 'WISHES_FETCH_DATA_SUCCESS',
        wishes
    }
}

export function wishesFetchData(url) {
    return (dispatch) => {
        fetch(url, {})
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText)
                }
                return response
            })
            .then(response => response.json())
            .then(wishes => dispatch(wishesFetchDataSuccess(wishes)))
    };
}
