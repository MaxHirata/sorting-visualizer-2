import logo from './logo.svg';
import './App.css';
import { Container, Grid, Segment } from 'semantic-ui-react';
import NavBar from './components/NavBar/NavBar';
import SortingVisualizer from './components/SortingVisualizer/SortingVisualizer';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Container>
          <Grid>
            <Grid.Row>
              <Grid.Column style={{ padding: 0, margin: '0 0 0 auto'}} width={3}>
                <NavBar/>
              </Grid.Column>
              <Grid.Column style={{padding: 0, margin: '0 auto 0 0'}} width={12}>
                <Segment raised>
                  <SortingVisualizer/>
                </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    </Provider>
  );
}

export default App;
