import React from 'react'
import Cards from '../src/components/Cards/Cards'
import Chart from '../src/components/Chart/Chart'
import CountrySelector from '../src/components/CountrySelector/CountrySelector'
import styles from './App.module.css'
import {fetchData} from './api'
class App extends React.Component {

  state ={
    country : '',
    data : {},
    countryData: {}
  }
  async componentDidMount(){
     const data = await fetchData()
     this.setState({data: data})
  }

  handleChange = async(country) => {
    const fetchedData = await fetchData(country)
    this.setState({
      countryData: fetchedData,
      country : country
    })
  }

  render(){
    const {data, country, countryData} = this.state
    console.log(data, country)
    return(
      <div className ={styles.container} >
        <Cards data = {data}/>
        <CountrySelector handleChange = {this.handleChange}/>
        <Chart countryData={countryData} country={country} />
      </div>
    )
  }
}

export default App;
