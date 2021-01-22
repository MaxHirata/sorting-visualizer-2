import React, {Component, Fragment} from 'react';
import './SortingVisualizer.css';
import { connect } from 'react-redux';
import { generateRandomArray } from '../../store/actions/actions';

const PrimaryColor = '#00ffcc';

class SortingVisualizer extends Component {
    componentDidMount() {
        this.props.generatedArray();
    }

    render() {
        return (
            <Fragment>
                <div className='array-container'>
                    {this.props.animationArray.map((value, index) => (
                        <div
                            className="array-bar"
                            key={index}
                            style={{
                                background: PrimaryColor,
                                height: `${value}px`
                            }}
                        >
                        </div>
                    ))}
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
        generatedArray: () => dispatch(generateRandomArray())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SortingVisualizer);