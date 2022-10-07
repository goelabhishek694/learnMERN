const initialState = {
    bats: 50
}

const BatReducer = (state = initialState, action) => {
    switch (action.type) {
        case "BUY_BAT":
            return { ...state, bats: state.bats - 1 }
        default:
            return state;
    }
}

export default BatReducer