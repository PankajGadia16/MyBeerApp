import {
    GET_BEER_INFO,
    GET_BEERS,
    GET_BEER_INFO_SUCCESS,
    GET_BEER_INFO_FAIL,
    GET_BEERS_SUCCESS,
    GET_BEERS_FAIL,
    GET_MORE_BEERS,
    GET_MORE_BEERS_SUCCESS,
    GET_MORE_BEERS_FAIL
} from './constants'


const initialState = {
    beers: [],
    beerDetails: {},
    page: 1,
    perPage: 20,
    loading: false
}

export default function reducer(state = initialState, action) {

    switch (action.type) {

        case GET_BEERS:
            return { ...state, loading: true }

        case GET_BEERS_SUCCESS:
            return { ...state, loading: false, beers: action.payload.data }

        case GET_BEERS_FAIL:
            return { ...state, loading: false, error: 'Error getting Beers List!' }

        case GET_BEER_INFO:
            return { ...state, loadingInfo: true }

        case GET_BEER_INFO_SUCCESS:
            return { ...state, loadingInfo: false, beerDetails: action.payload.data[0] }

        case GET_BEER_INFO_FAIL:
            console.log(action.payload)
            return { ...state, loadingInfo: false, errorInfo: 'Error getting Beer details!' }

        case GET_MORE_BEERS:
            return { ...state, loading: true }

        case GET_MORE_BEERS_SUCCESS:
            return { ...state, loading: false, beers: [...state.beers, ...action.payload.data], page: (state.page + 1) }

        case GET_MORE_BEERS_FAIL:
            return { ...state, loading: false, error: 'Error getting more Beers!' }

        default:
            return state
    }
}