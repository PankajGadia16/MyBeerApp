import { connect } from 'react-redux'
import { getBeerDetails } from '../../actions'
import BeerDetailsComponent from './BeerDetailsComponent'

const mapStateToProps = state => {
    return {
        beerDetails: state.beerDetails,
        loadingInfo: state.loadingInfo
    }
}

const mapDispatchToProps = {
    getBeerDetails
}

export default connect(mapStateToProps, mapDispatchToProps)(BeerDetailsComponent)