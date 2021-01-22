import React, {Component, Fragment} from 'react';
import './SortingVisualizer.css';
import { connect } from 'react-redux';

const PrimaryColor = '#00ffcc';

class SortingVisualizer extends Component {

    render() {
        return (
            <Fragment>
                <div className='array-container'>
                    Array Visualizer Container
                </div>
                <div>
                    {this.props.animationArray}
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        animationArray: state.array
    };
}

const mapDispatchToProps = dispatch => {
    return {
        getBubbleSort: () => dispatch({type: 'SET_BUBBLESORT', payload: { msg: 'bubblesort'}})
    };
}

export default connect(mapStateToProps)(SortingVisualizer);
//export default connect(mapStateToProps, mapDispatchToProps)(SortingVisualizer);