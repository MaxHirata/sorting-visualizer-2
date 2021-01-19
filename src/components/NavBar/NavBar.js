import React, {Fragment} from 'react';
import {Label, Menu, Button, Segment, Header, Icon} from 'semantic-ui-react';
import './NavBar.css';

const NavBar = () => {
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
                    onClick={() => {}}
                >
                    <Button primary>Generate New Random Array</Button>
                </Menu.Item>
                <Menu.Item
                    name='mergesort'
                    onClick={() => {}}
                    active=''
                >
                    Mergesort
                </Menu.Item>
                <Menu.Item
                    name="quicksort"
                    onClick={() => {}}
                    active=''>
                    Quicksort
                </Menu.Item>
                <Menu.Item
                    name="heapsort"
                    onClick={() => {}}
                    active=''>
                    Heapsort
                </Menu.Item>
                <Menu.Item
                    name='bubblesort'
                    onClick={() => {}}
                    active=''>
                    Bubblesort
                </Menu.Item>
                <Menu.Item>
                    <Button onClick={() => {}} color='red'>SORT!</Button>
                </Menu.Item>
            </Menu>
        </Fragment>
    );
};

export default NavBar;