const UPDATE_CONTENTS = "contents/UPDATE_CONTENTS";

export const updateContents = wheel => ({
    type: UPDATE_CONTENTS,
    wheel
})

const defaultContents = {
    
        title: "Default Wheel",
        contents: ["Payton", "Ronny", "Yanxi", "Ivy", "Peter", "Kin", "Ayce"]
    
}

const contentsReducer = (state = defaultContents, action) => {
    Object.freeze(state);
    const nextState = {...state};
    switch(action.type) {
        case UPDATE_CONTENTS:
            // state.contents = action.contents;
            
            return {...nextState, ...action.wheel}
        default:
            return state;
    }
}

export default contentsReducer;