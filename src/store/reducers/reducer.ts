import { UserActionTypes } from "../actions/actionTypes";
import { SortingAlgorithm } from "../actions/types";

const initialState: SortingAlgorithm = {
    selectedAlgorithm: null,
    array: []
};

export default function(state = initialState, action: UserActionTypes): SortingAlgorithm {
    switch (action.type) {
        case 'GENERATE_RANDOM_ARRAY':
            return {
                ...state, 
                array: action.array
            };
        case 'SET_ALGORITHM':
            return {
                ...state, 
                selectedAlgorithm: action.algorithm
            };
        case 'SORT_ARRAY':
            return {
                ...state,
                selectedAlgorithm: action.algorithm
            }
        default:
            return state;
    }
} 