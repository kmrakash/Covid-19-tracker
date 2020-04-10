import React from 'react';
import { Cards, Charts, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';
class App extends React.Component {

    state = {
        data: {},
        country: ''
    }

    // fetch data from api
   async componentDidMount() {
        const fetchedData = await fetchData();
        console.log(fetchedData); // for debugging 
        this.setState({
            data: fetchedData,
        });
    }

    handleCountryChange = async (country) => {
        
        const fetchedData = await fetchData(country);

        this.setState({
            data: fetchedData,
            country:country
        })
    }

    render() {
        // a better way to send props
        const { data, country } = this.state;

        return(
            <div className={ styles.container }>
                <Cards data={ data } />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Charts data={ data } country={ country } />
            </div>
        )
    }
}

export default App;