import React, {Component, Fragment} from 'react';
import {Label, Menu, Button, Segment, Header, Icon} from 'semantic-ui-react';
import './NavBar.css';
import { connect } from 'react-redux';
import {setSelectedAlgorithm, generateRandomArray, sortArray} from './../../store/actions/actions';

class NavBar extends Component {
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
                        active={this.props.selectedAlgorithm === 'mergesort'}
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

};

const mapStateToProps = state => {
    return {
        selectedAlgorithm: state.selectedAlgorithm,
        unsortedArray: state.array
    }
}

const mapDispatchToProps = dispatch => {
    return {
        generateRandomArray: () => dispatch(generateRandomArray()),
        setSelectedAlgorithm: (algorithm) => dispatch(setSelectedAlgorithm(algorithm)),
        sortArray: (selectedAlgorithm, unsortedArray) => dispatch(sortArray(selectedAlgorithm, unsortedArray))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);