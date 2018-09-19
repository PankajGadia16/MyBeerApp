import { connect } from 'react-redux'
import BeersListComponent from './BeersListComponent'
import { listBeers, listMoreBeers } from '../../actions'

const mapStateToProps = state => {

    let storedBeers = state.beers.map(beer => ({ key: beer.id, ...beer }))
    
    return {
        beers: storedBeers,
        page: state.page,
        perPage: state.perPage,
        loading: state.loading
    }
}

const mapDispatchToProps = {
    listBeers,
    listMoreBeers
}

export default connect(mapStateToProps, mapDispatchToProps)(BeersListComponent)
