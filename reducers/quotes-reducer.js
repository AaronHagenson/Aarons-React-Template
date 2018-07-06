
const initState = {
    quotes: []
};

export default (state = initState, action) => {

	switch(action.type) {
        case 'GET_QUOTES_SUCCESS' :
			return {...state, quotes: action.quotes}
		default :
			return state
	}

}