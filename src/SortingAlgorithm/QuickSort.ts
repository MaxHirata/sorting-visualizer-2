export default function quickSort(array: number[]): any[] {
	const animations: any[] = [];
	console.log(array);
	_quickSort(array, 0, array.length - 1, animations);
	console.log(array);
	return animations;
}

function _quickSort(arr: number[], low: number, high: number, animations: any[]) {
	if (low < high) {
		// pivot is partitioning index, arr[pivot] is now at the right place
		let pivot = _partition(arr, low, high, animations);

		// Before Pivot
		_quickSort(arr, low, pivot - 1, animations);
		// Above Pivot
		_quickSort(arr, pivot + 1, high, animations);
	}
}

function _partition(array: number[], low: number, high: number, animations: any[]): number {
	let i = low;
	let j = high;
	let pivot = array[low];
	// let i = low;
	// let j = high;
	// while (arr[i] < pivot) i++;
	// while (arr[j] > pivot) j--;

	// while (i < j) {
	// 	let temp = arr[i];
	// 	arr[i] = arr[j];
	// 	arr[j] = temp;,max
	// 	i += 1;
	// 	j -= 1;
	// }
	while (i < j) {
		while (array[i] <= pivot) i++;
		while (array[j] > pivot) j--;

		if (i < j) {
			//add animation sequence
			animations.push([ i, j ]);
			animations.push([ i, j ]);
			animations.push([ i, array[j] ]);

			animations.push([ i, j ]);
			animations.push([ i, j ]);
			animations.push([ j, array[i] ]);

			var temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		}
	}

	//add animation sequence for Pivot Swap
	animations.push([ low, j ]);
	animations.push([ low, j ]);
	animations.push([ low, array[j] ]);

	animations.push([ low, j ]);
	animations.push([ low, j ]);
	animations.push([ j, array[low] ]);

	// put pivot in correct position with swap
	var temp = array[low]; //pivot
	array[low] = array[j];
	array[j] = temp;

	return j;
}
