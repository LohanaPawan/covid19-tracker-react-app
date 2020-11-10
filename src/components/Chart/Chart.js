import React, { useEffect, useState } from 'react'
import { dailyDataFromApi } from '../../api'
import { Line, Bar } from 'react-chartjs-2'
import styles from './Chart.module.css'

const Chart = ({countryData:{confirmed, recovered, deaths} , country}) => {

    // console.log(countryData, country)
    const [data, setData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const res = await dailyDataFromApi()
            
            setData(res)
        }
        fetchData()
    }, [])

    const lineChart = (
       data.length ? <Line
            data={{
                labels: data.map(({ date }) => date),
                datasets :[{
                    data : data.map(({confirmed}) => confirmed) ,
                    label : 'Infected',
                    borderColor: '#3333ff',
                    fill: true
                    
                },
                {
                    data : data.map(({deaths}) => deaths) ,
                    label : 'Deaths',
                    borderColor: 'red',
                    backgroundColor : 'rgba(255, 0, 0, 0.5)',
                    fill: true
                }]
            }}
        /> : null )

        const barChart = (
            confirmed ? (
                <div className={styles.barChart}>
            <Bar 
            data = {{
                labels : ['Infected', 'Recovered', 'Deaths'],
                datasets : [{
                    label: 'People',
                    backgroundColor : [
                        'rgb(0, 0, 255, 0.5)',
                        'rgb(0, 255, 0, 0.5)',
                        'rgb(255, 0,0, 0.5)'
                    ],
                    data : [confirmed.value,recovered.value,deaths.value]
                }]
            }}

            options = {{
                legend: {display: false},
                title : {display: true, text: `Current state in ${country}` }
            }}
            />
            </div>
            ): null
        )
    
    return (
         <div className={styles.container}>
           {country ? barChart : lineChart}
        </div> 
    )
}

export default Chart
