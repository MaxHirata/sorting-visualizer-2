import {randomIntFromIntervals} from '../../Util/Utility';
import {Action, Dispatch} from 'redux';
import bubbleSort from '../../SortingAlgorithm/BubbleSort';
import mergeSort from '../../SortingAlgorithm/MergeSort';
import heapSort from '../../SortingAlgorithm/HeapSort';
import quickSort from '../../SortingAlgorithm/QuickSort';
import { AppActions } from './actionTypes';
import { AppState } from '../store';

const PRIMARY_COLOR = '#00ffcc';
const SECONDARY_COLOR = 'red';
const ANIMATION_SPEED_MS = 5;

export const setSelectedAlgorithm = (algorithm: string | null): AppActions => ({
        type: 'SET_ALGORITHM',
        algorithm
});

export const generateRandomArray = (array: number[]): AppActions => ({
    type: "GENERATE_RANDOM_ARRAY",
    array
});

export const sortArray = (): AppActions => ({
    type: "SORT_ARRAY",
    algorithm: null
}); 

export const startGenerateRandomArray = () => {
    return(dispatch: Dispatch<AppActions>, getState: () => AppState) => {
        const randomArray = [];
        for (let i = 0; i < 80; i++) {
            randomArray.push(randomIntFromIntervals(7, 750));
        }

        dispatch(
            generateRandomArray(randomArray)
        )
    }
}

export const startSortArray = (selectedAlgorithm: string | null, unsortedArray: number[]) => {
    return(dispatch: Dispatch<AppActions>, getState: () => AppState) => {
        let animationSequence: any[] = [];

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
            let arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 3 !== 2;
            if (isColorChange) {
                const [
                    barOneIdx,
                    barTwoIdx
                ] = animationSequence[i];
                const barOneStyle = (arrayBars[barOneIdx] as any).style;
                const barTwoStyle = (arrayBars[barTwoIdx] as any).style;
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
                    const barOneStyle = (arrayBars[barOneIdx] as any).style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * ANIMATION_SPEED_MS);
            }
        }

        dispatch(sortArray());
    }


}


