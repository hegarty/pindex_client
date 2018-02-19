import { ADD_RESULTS } from "../constants/action-types";

const initialState = { results: [] };

const rootReducer = (state = initialState, action) => {
	switch (action.type) 
	{
		case ADD_RESULTS:
	  		return { ...state, results: [...state.results, action.payload] };
		
		default:
	  		return state;
  	}

};

export default rootReducer;
