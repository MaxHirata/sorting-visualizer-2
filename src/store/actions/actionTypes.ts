export const SET_ALGORITHM = "SET_ALGORITHM";
export const GENERATE_RANDOM_ARRAY = "GENERATE_RANDOM_ARRAY";
export const SORT_ARRAY = "SORT_ARRAY";

export interface SetAlgorithm {
    type: typeof SET_ALGORITHM,
    algorithm: string
}

export interface GenerateRandomArray {
    type: typeof GENERATE_RANDOM_ARRAY,
    array: number[]
}

export interface SortArray {
    type: typeof SORT_ARRAY,
    algorithm: string | null
}

/* UserActionTypes is the aggregation of all the interface types for the given set of actions */
export type UserActionTypes = SetAlgorithm | GenerateRandomArray | SortArray;


/** AppActions represents the aggregation of all the actionTypes sets throughout the application. In this caes, we only have one (UserActionTypes) but in a real application there would multiple sets */
export type AppActions = UserActionTypes;