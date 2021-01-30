export default function mergeSort(array: number[]): any[] {
    const animation: any[] = [];
    if(array.length == 1) return animation;
    const auxArray = array.slice(); //Shallow copy of array
    _mergesort(array, 0, array.length - 1, auxArray, animation);
    return animation;
};

function _mergesort(mainArray: number[], start: number, end: number, auxArray: number[], animation: any[] ) {
    if(start == end) return;
    const middle = Math.floor((start + end) /2);
    _mergesort(auxArray, start, middle, mainArray, animation);
    _mergesort(auxArray, middle + 1, end, mainArray, animation);
    _merge(mainArray, start, middle, end, auxArray, animation);
}

function _merge(mainArray: number[], start: number, middle: number, end: number, auxArray: number[], animation: any[]) {
    let k = start;
    let i = start;
    let j = middle + 1;

    while( i <= middle && j <= end ) {
        animation.push([i,j]);
        animation.push([i,j]);

        if(auxArray[i] < auxArray[j]) {
            animation.push([k, auxArray[i]]);
            mainArray[k++] = auxArray[i++];
        } else {
            animation.push([k, auxArray[j]]);
            mainArray[k++] = auxArray[j++];
        }
    }

    while( i <= middle) {
        animation.push([i, i]);
        animation.push([i, i]);
        animation.push([k, auxArray[i]]);
        mainArray[k++] = auxArray[i++];
    }

    while( j <= end) {
        animation.push([j, j]);
        animation.push([j, j]);
        animation.push([k, auxArray[j]]);
        mainArray[k++] = auxArray[j++];
    }
}