import {randomIntFromIntervals} from '../../Util/Utility';

export const setSelectedAlgorithm = (algorithm) => dispatch => {
    console.log("Set Algorithm");
    dispatch({
        type: 'SET_ALGORITHM',
        payload: algorithm
    });
}

export const generateRandomArray = () => dispatch => {
    console.log('generating random array');
    const randomArray = [];
    for(let i = 0; i < 80; i++) {
        randomArray.push(randomIntFromIntervals(7, 750));
    }
    dispatch({
        type: 'GENERATE_RANDOM_ARRAY',
        payload: { 
            array: randomArray,
            selectedAlgorithm: null
        }
    });
}


