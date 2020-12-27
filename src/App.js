import React, { Component } from "react";
/*
import Cards from './components/Cards';
import Chart from './components/Chart';
import Countries from './components/Countries';
*/

import { Cards, Chart, Countries } from "./components";

import styles from "./App.module.css";
import { fetchData } from "./api";

import covid from "./images/covid.png";

class App extends Component {
  state = {
    data: {},
    country: "",
  };
  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);

    this.setState({ data: fetchedData, country: country });
  };

  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img className={styles.image} src={covid} alt="COVID-19" />
        <Cards data={data} />
        <Countries handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
