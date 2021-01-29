import React, {Component, Fragment} from 'react';
import {Label, Menu, Button, Segment, Header, Icon} from 'semantic-ui-react';
import './NavBar.css';
import { connect } from 'react-redux';
import {setSelectedAlgorithm ,startGenerateRandomArray, startSortArray} from '../../store/actions/actions';
import { AppState } from '../../store/store';
import { ThunkDispatch } from 'redux-thunk';
import { AppActions } from '../../store/actions/actionTypes';
import { bindActionCreators } from 'redux';

interface NavProps {
    // None
};

interface NavState {
    // None
}

// Aggregate ALL the interface of all props
type Props = NavProps & LinkStateProp & LinkDispatchProp;

class NavBar extends Component<Props, NavState> {
    render() {
        return (
            <Fragment>
                <Menu vertical>
                    <Segment raised>
                        <Header as='h2'>
                            <Icon name='cog'/>
                            <Header.Content>Sorting Visualizer</Header.Content>
                        </Header>
                    </Segment>
                </Menu>

                <Menu vertical>
                    <Menu.Item
                        name="generatedArray"
                        onClick={() => this.props.generateRandomArray()}
                    >
                        <Button primary>Generate New Random Array</Button>
                    </Menu.Item>
                    <Menu.Item
                        name='mergesort'
                        onClick={() => this.props.setSelectedAlgorithm('mergesort')}
                        active={ (this.props.selectedAlgorithm ) === 'mergesort'}
                    >
                        Mergesort
                        {this.props.selectedAlgorithm === 'mergesort' ? <Label color="red" content="Selected" /> : null}
                    </Menu.Item>
                    <Menu.Item
                        name="quicksort"
                        onClick={() => this.props.setSelectedAlgorithm('quicksort')}
                        active={this.props.selectedAlgorithm === 'quicksort'}>
                        Quicksort
                        {this.props.selectedAlgorithm === 'quicksort' ? <Label color="red" content="Selected" /> : null}
                    </Menu.Item>
                    <Menu.Item
                        name="heapsort"
                        onClick={() => this.props.setSelectedAlgorithm('heapsort')}
                        active={this.props.selectedAlgorithm === 'heapsort'}>
                        Heapsort
                        {this.props.selectedAlgorithm === 'heapsort' ? <Label color="red" content="Selected" /> : null}
                    </Menu.Item>
                    <Menu.Item
                        name='bubblesort'
                        onClick={() => this.props.setSelectedAlgorithm('bubblesort')}
                        active={this.props.selectedAlgorithm === 'bubblesort'}>
                        BubbleSort
                        {this.props.selectedAlgorithm === 'bubblesort' ? <Label color="red" content="Selected" /> : null}
                    </Menu.Item>
                    <Menu.Item
                        name='trigger_sort_array'>
                        <Button 
                            onClick={() => this.props.sortArray(this.props.selectedAlgorithm, this.props.unsortedArray)} 
                            color='red'>
                                SORT!
                        </Button>
                    </Menu.Item>
                </Menu>
            </Fragment>
        );
    }
}

interface LinkStateProp {
    selectedAlgorithm: string | null,
    unsortedArray: number[]
}

interface LinkDispatchProp {
    generateRandomArray: () => void,
    setSelectedAlgorithm: (algorithm: string | null) => void,
    sortArray: (selectedAlgorithm: string | null, unsortedArray: number[]) => void
}

const mapStateToProps = (state: AppState, ownProps: NavProps) => ({
    selectedAlgorithm: state.userActions.selectedAlgorithm,
    unsortedArray: state.userActions.array
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AppActions>, ownProps: NavProps) => ({
    generateRandomArray: bindActionCreators(startGenerateRandomArray, dispatch),
    setSelectedAlgorithm: bindActionCreators(setSelectedAlgorithm, dispatch),
    sortArray: bindActionCreators(startSortArray, dispatch)

});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);