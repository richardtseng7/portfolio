import React from 'react'
import { Grid, Typography } from '@material-ui/core'

const posts = [
    {
        company: "Epic Systems",
        title: "Software Developer",
        time: "September 2019 - Present",
        description: "At Epic, I am a developer on the interoperability team that supports over two million patient record exchanges daily. I work on designing scalable, back-end solutions to complex mapping problems and improving our discarding and deduplication logic. I also work on the project team for a web activity that allows users to query other organizations for patient records.",
        image: require('./assets/epic.png')
    },

    {
        company: "Duke University",
        title: "Teaching Assistant",
        time: "January 2017 - December 2017",
        description: "As an undergraduate teaching assistant, I led weekly in-person office hours for the upper level courses Computer Architecture and Operating Systems. I also taught a weekly lab section of 25 students, graded coursework, and held online office hours on Piazza.",
        image: require('./assets/duke.png')
    }
]

export const Work = () => (
    <React.Fragment>
        <Grid container spacing={4} style={{ width: "100%" }}>
            {posts.map(post => (
            <Grid item container>
                <Grid item xs={2} align="center" style={{ alignSelf: "center" }}>
                    <img src={post.image} alt="logo" width="85%"/>
                </Grid>
                <Grid item xs={8} justify="center">
                    <Typography variant="h6">{post.company}</Typography>
                    <Typography variant="subtitle1">{post.title}</Typography>
                    <Typography variant="body1" align="justify">{post.description}</Typography>
                </Grid>
            </Grid>
            ))}
        </Grid>
    </React.Fragment>
)