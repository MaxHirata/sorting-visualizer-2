import React, {Component, Fragment} from 'react';
import './SortingVisualizer.css';
import { connect } from 'react-redux';
import { startGenerateRandomArray } from '../../store/actions/actions';
import { AppState } from '../../store/store';
import { ThunkDispatch } from 'redux-thunk';
import { AppActions } from '../../store/actions/actionTypes';
import { bindActionCreators } from 'redux';

const PrimaryColor = '#00ffcc';

interface SortingVisualizerProps {
    // None
}

interface SortingVisualizerState {
    // None 
}

// Aggregate ALL Props Interfaces into one type
type Props = SortingVisualizerProps & LinkStateProps & LinkDispatchProps;

class SortingVisualizer extends Component<Props, SortingVisualizerState> {
    componentDidMount() {
        this.props.generateArray();
    }

    render() {
        return (
            <Fragment>
                <div className='array-container'>
                    {this.props.unsortedArray.map((value, index) => (
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

interface LinkStateProps {
    unsortedArray: number[]
}

interface LinkDispatchProps {
    generateArray: () => void;
}

const mapStateToProps = (state: AppState, ownProps: SortingVisualizerProps) => ({
    unsortedArray: state.userActions.array
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AppActions>, ownProps: SortingVisualizerProps) => ({
    generateArray: bindActionCreators(startGenerateRandomArray,dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(SortingVisualizer);