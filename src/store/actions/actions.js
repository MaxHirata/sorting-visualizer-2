import {randomIntFromIntervals} from '../../Util/Utility';
import bubbleSort from '../../SortingAlgorithm/BubbleSort';
import mergeSort from '../../SortingAlgorithm/MergeSort';
import heapSort from '../../SortingAlgorithm/HeapSort';
import quickSort from '../../SortingAlgorithm/QuickSort';

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

export const sortArray = (selectedAlgorithm, unsortedArray) => dispatch => {
    const animationSequence = [];

    switch(selectedAlgorithm) {
        case 'bubblesort':
            console.log("SELECTED BUBBLESORT");
            break;
        case 'mergesort':
            console.log("SELECTED MERGESORT");
            break;
        case 'quicksort':
            console.log("SELECTED QUICKSORT");
            break;
        case 'heapsort':
            console.log("SELECTED HEAPSORT");
            break;
        default:
            break;
    }

    dispatch({
        type: 'SORT_ARRAY',
        payload: {
            selectedAlgorithm: null
        }
    });
}


