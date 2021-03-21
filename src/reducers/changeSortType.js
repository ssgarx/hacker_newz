const initialState = {
    data: "story"
};

const changeSortType = (state = initialState, action) => {
    switch (action.type) {
        case "CHANGE_SORT_TYPE":
            return {
                data: action.sortName
            }
        default:
            return state
    }
}

export default changeSortType;