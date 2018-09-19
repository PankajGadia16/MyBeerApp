import { GET_BEER_INFO, GET_BEERS, GET_MORE_BEERS } from './constants'


export function listBeers() {
    return {
        type: GET_BEERS,
        payload: {
            request: {
                url: `https://api.punkapi.com/v2/beers?page=1&per_page=20`
            }
        }
    }
}

export function getBeerDetails(id) {
    return {
        type: GET_BEER_INFO,
        payload: {
            request: {
                url: `https://api.punkapi.com/v2/beers/${id}`
            }
        }
    }
}

export function listMoreBeers(page = 1, perPage = 20) {
    return {
        type: GET_MORE_BEERS,
        payload: {
            request: {
                url: `https://api.punkapi.com/v2/beers?page=${page}&per_page=${perPage}`
            }
        }
    }
}