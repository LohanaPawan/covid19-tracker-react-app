import React from 'react'
import {Grid, Card, CardContent, Typography} from '@material-ui/core'
import CountUp from 'react-countup'
import cx from 'classnames'
import styles from './Cards.module.css'
function Cards({data : {confirmed, recovered, deaths, lastUpdate}}) {

    if(!recovered){
        return "Please wait.."
    }
    return (
        <div className ={styles.container}>
           <Grid container spacing={3} justify="center" >
               <Grid item component={Card} xs={12} md={3} className = {cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography className={styles.label}> Infected </Typography>
                        <Typography> 
                            <CountUp 
                              start={0}
                              end={confirmed.value}
                              duration = {3}
                              separator=","
                            />
                      </Typography>
                        <Typography> {new Date(lastUpdate).toDateString()} </Typography>
                        <Typography> Number of active cases </Typography>
                    </CardContent>
               </Grid>
               <Grid item component={Card} xs={12} md={3} className = {cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography className={styles.label}> Recovered </Typography>
                        <Typography>  
                        <CountUp 
                              start={0}
                              end={recovered.value}
                              duration = {3}
                              separator=","
                            />
                        </Typography>
                        <Typography> {new Date(lastUpdate).toDateString()} </Typography>
                        <Typography> Number of recoveries from Covid-19 </Typography>
                    </CardContent>
               </Grid>
               <Grid item component={Card} xs={12} md={3} className = {cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography className={styles.label}> Deaths </Typography>
                        <Typography>  
                        <CountUp 
                              start={0}
                              end={deaths.value}
                              duration = {3}
                              separator=","
                            />
                        </Typography>
                        <Typography> {new Date(lastUpdate).toDateString()} </Typography>
                        <Typography> Number of deaths due to covid-19 </Typography>
                    </CardContent>
               </Grid>
           </Grid>
        </div>
    )
}

export default Cards
