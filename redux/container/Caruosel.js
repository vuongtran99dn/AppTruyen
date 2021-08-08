import { connect } from 'react-redux';
import Carousel from '../../Components/Banner/Caruosel';
import { getData } from '../reducers/doBanner';

const mapStatetoProps = (state) =>{
    return{
        data: state.doBanner.items
    };
}

const mapActionToProps = {
    getDataBanner : getData
};

export default connect(mapStatetoProps,mapActionToProps)(Carousel)
