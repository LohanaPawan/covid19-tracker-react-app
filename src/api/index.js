import axios from 'axios'
const dataUrl = "https://covid19.mathdro.id/api"

export const fetchData = async(country) => {
  let variableUrl = dataUrl

  if(country){
      variableUrl = `${dataUrl}/countries/${country}`
  }

    try{
        const {data : {confirmed, recovered, deaths, lastUpdate} } = await axios.get(variableUrl)
        
    return {
        confirmed,
        recovered,
        deaths,
        lastUpdate
    }
    }catch(error) {
console.log(error.message)
    }
}

export const dailyDataFromApi = async() => {

    try{
        const {data} = await axios.get(`${dataUrl}/daily`)
        const modifiedData = data.map(item => ({
            confirmed : item.confirmed.total,
            deaths: item.deaths.total,
            date: item.reportDate
        }))
        return modifiedData
    }catch(error) {
   console.log(error.message)
    }
}

export const countriesDataFromApi = async() => {
    try{
        const {data : {countries} } = await axios.get(`${dataUrl}/countries`)

        const modifiedData = countries.map(({name}) => name)

        return modifiedData
        
    }catch(error) {

    }
}