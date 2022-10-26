const UPDATE_CONTENTS = "contents/UPDATE_CONTENTS";

export const updateContents = contents => ({
    type: UPDATE_CONTENTS,
    contents
})

const defaultContents = {
    contents: ["Payton", "Ronny", "Yanxi", "Ivy", "Peter", "Kin", "Ayce"]
}

const contentsReducer = (state = defaultContents, action) => {
    // Object.freeze(state);
    // const nextState = {...state};
    switch(action.type) {
        case UPDATE_CONTENTS:
            // state.contents = action.contents;
            return action.contents
        default:
            return state;
    }
}

export default contentsReducer;