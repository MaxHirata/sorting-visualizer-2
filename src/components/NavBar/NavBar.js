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
                        onClick={() => this.props.setSelectedAlgorithm('bubblesort')}
                        active=''
                    >
                        Mergesort
                    </Menu.Item>
                    <Menu.Item
                        name="quicksort"
                        onClick={() => this.props.setSelectedAlgorithm('quicksort')}
                        active=''>
                        Quicksort
                    </Menu.Item>
                    <Menu.Item
                        name="heapsort"
                        onClick={() => this.props.setSelectedAlgorithm('heapsort')}
                        active=''>
                        Heapsort
                    </Menu.Item>
                    <Menu.Item
                        name='bubblesort'
                        onClick={() => this.props.setSelectedAlgorithm('bubblesort')}
                        active=''>
                        BubbleSort
                    </Menu.Item>
                    <Menu.Item
                        name='trigger_sort_array'>
                        <Button 
                            onClick={() => this.props.sortArray(this.props.selectedAlgorithm)} 
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
        selectedAlgorithm: state.selectedAlgorithm
    }
}

const mapDispatchToProps = dispatch => {
    return {
        generateRandomArray: () => dispatch(generateRandomArray()),
        setSelectedAlgorithm: (algorithm) => dispatch(setSelectedAlgorithm(algorithm)),
        sortArray: (selectedAlgorithm) => dispatch(sortArray(selectedAlgorithm))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);