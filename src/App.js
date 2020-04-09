import React from 'react';
import { Cards, Charts, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';
class App extends React.Component {

    state = {
        data: {},
    }

    // fetch data from api
   async componentDidMount() {
        const fetchedData = await fetchData();
        console.log(fetchedData); // for debugging 
        this.setState({
            data: fetchedData,
        });
    }

    render() {

        // a better way to send props
        const { data } = this.state;

        return(
            <div className={ styles.container }>
                <Cards data={ data } />
                <CountryPicker />
                <Charts />
            </div>
        )
    }
}

export default App;