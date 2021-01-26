import {randomIntFromIntervals} from '../../Util/Utility';
import bubbleSort from '../../SortingAlgorithm/BubbleSort';
import mergeSort from '../../SortingAlgorithm/MergeSort';
import heapSort from '../../SortingAlgorithm/HeapSort';
import quickSort from '../../SortingAlgorithm/QuickSort';

const PRIMARY_COLOR = '#00ffcc';
const SECONDARY_COLOR = 'red';
const ANIMATION_SPEED_MS = 5;

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
    let animationSequence = [];

    switch(selectedAlgorithm) {
        case 'bubblesort':
            console.log("SELECTED BUBBLESORT");
            animationSequence = bubbleSort(unsortedArray);
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

    for (let i = 0; i < animationSequence.length; i++) {
        const arrayBars = document.getElementsByClassName('array-bar');
        const isColorChange = i % 3 !== 2;
        if (isColorChange) {
            const [
                barOneIdx,
                barTwoIdx
            ] = animationSequence[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
            setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
            }, ANIMATION_SPEED_MS);
        } else {
            setTimeout(() => {
                const [
                    barOneIdx,
                    newHeight
                ] = animationSequence[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                barOneStyle.height = `${newHeight}px`;
            }, i * ANIMATION_SPEED_MS);
        }
    }

    dispatch({
        type: 'SORT_ARRAY',
        payload: {
            selectedAlgorithm: null
        }
    });
}


