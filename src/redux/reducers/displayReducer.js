const getDisplay = (state = [], action) => {
    if (action.type === 'SET_DISPLAY') {

        console.log('in diaplay reducer', action.payload);
        return action.payload;
    }
    return state

};

export default getDisplay;