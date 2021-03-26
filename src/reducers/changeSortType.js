const initialState = {
    data: "story",
    data1: false
};

export const changeSortType = (state = initialState, action) => {
    switch (action.type) {
        case "CHANGE_SORT_TYPE":
            return {
                data: action.sortName
            }
        default:
            return state
    }
}