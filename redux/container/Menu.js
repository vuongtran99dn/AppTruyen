import { connect } from 'react-redux';
import Menu from '../../Components/Menu/Menu';
import { getData } from '../reducers/doMenu';

const mapStatetoProps = (state) =>{
    return{
        data: state.doBanner.items
    };
}

const mapActionToProps = {
    getDataMenu : getData
};

export default connect(mapStatetoProps,mapActionToProps)(Menu)
