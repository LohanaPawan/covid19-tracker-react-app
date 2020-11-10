import React , {useState, useEffect} from 'react'
import styles from './CountrySelector.module.css'
import {NativeSelect, FormControl} from '@material-ui/core'
import {countriesDataFromApi} from '../../api'


function CountrySelector({handleChange}) {
    const [countriesList, setCountriesList] = useState([])

    useEffect(() => {
        async function fetchData(){
           const res = await countriesDataFromApi()
           setCountriesList(res)
        }
        fetchData()
    })
    return (
        <FormControl className={styles.container}>
            <NativeSelect onChange={(e) => handleChange(e.target.value)} defaultValue="">
            <option
                        value="Global">
                            Global
                        </option>
                {
                    countriesList.map(item => (
                        <option
                        key = {item}
                        value={item}>
                            {item}
                        </option>
                    ))
                }
            </NativeSelect>
        </FormControl>
    )
}

export default CountrySelector
