const initialState = {
	arr:[]
}

export default function(state = initialState, action) {
	switch (action.type) {
		case 'GET_ARR':
			return{...state, arr:action.payload}
		default:
			return state
	}
}
