const initialState = {
    selectedAlgorithm: null,
    array: []
};

export default function(state = initialState, action) {
    switch (action.type) {
        case 'GENERATE_RANDOM_ARRAY':
            return {
                ...state, 
                array: action.payload.array, 
                selectedAlgorithm: action.payload.selectedAlgorithm
            };
        case 'SET_ALGORITHM':
            return {
                ...state, 
                selectedAlgorithm: action.payload
            };
        default:
            return state;
    }
} 