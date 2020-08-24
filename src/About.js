import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import richard from './assets/richard.jpeg'

const countries = [
    {
        name: "Taiwan",
        description: "I call Taipei, Taiwan home",
        image: require('./assets/taiwan.png')
    },

    {
        name: "Canada",
        description: "I grew up in Vancouver, BC",
        image: require('./assets/canada.png')
    },

    {
        name: "USA",
        description: "I'm currently living in Verona, WI",
        image: require('./assets/usa.png')
    },
]


export const About = () => (
    <React.Fragment>
        <div>
            <Typography variant="h5">Hi I'm Richard.</Typography>

            <Grid container spacing={1} direction="row" xs={7}>
            {countries.map(country => (
                <Grid item container direction="column" align="center" xs={4}>
                    <Grid item >
                        <img src={country.image} alt="flag" width="50%"/>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1">{country.description}</Typography>
                    </Grid>
                </Grid>
            ))}
            </Grid>
            
            <Typography variant="body1">
                I'm a software engineer interested in delivering software that makes people's lives easier, so they can focus on what's important to them.
                I currently work on the interoperability team at Epic Systems in Verona, WI. I graduated from Duke University with a B.S. in Computer Science and minors in Biology and Chemistry in May 2019.
                In my spare time, I like playing board games with friends, lifting weights, learning about the stock market, and bringing my ideas to life by building websites like this one.
            </Typography>

        </div>
        <img src={richard} alt="richard"/>
    </React.Fragment>
)