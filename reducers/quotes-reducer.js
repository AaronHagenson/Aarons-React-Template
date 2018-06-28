
const initState = {
    testThing: []
};

export default (state = initState, action) => {

	switch(action.type) {
        case 'GET_QUOTES_SUCCESS' :
            let thing = {...state, quotes: action.quotes}
			return {...state, quotes: action.quotes}
		default :
			return state
	}

}