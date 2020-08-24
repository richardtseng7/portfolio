import React from 'react'
import { makeStyles, Drawer, Grid, MenuList, MenuItem, Link as L} from '@material-ui/core'
import { IconContext } from "react-icons";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi" 
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Home } from './Home'
import { About } from './About'
import { Skills } from './Skills'
import { Work } from './Work'
import { Error } from './Error'

const drawerWidth = 250;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  menuItem: {
    justifyContent: 'center',
    hoverColor: theme.palette.text.primary,
  },

  link: {
    color: theme.palette.text.primary,
  }


}))

function App() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Router>
        <div style={{ display: "flex"}}>
            <Drawer className={ classes.drawer } variant="permanent" classes={{paper: classes.drawerPaper}}>
                <MenuList>
                    <MenuItem className={classes.menuItem} component={ Link } to="/">Home</MenuItem>
                    <MenuItem className={classes.menuItem} component={ Link } to="/about">About</MenuItem>
                    <MenuItem className={classes.menuItem} component={ Link } to="/skills">Skills</MenuItem>
                    <MenuItem className={classes.menuItem} component={ Link } to="/work">Work</MenuItem>
                </MenuList>

                <Grid container justify="center" spacing={1} style={{ color:"primary", position: "absolute", bottom: 15, alignSelf: "center"}}>        
                  
                  <Grid item xs={2} style={{ textAlign: "center" }}>
                      <L color="inherit" href="https://www.github.com/richardtseng7">
                        <IconContext.Provider value={{ size: 20 }}>
                         <FiGithub/>
                        </IconContext.Provider>
                      </L>
                  </Grid>
                  
                  <Grid item xs={2} style={{ textAlign: "center" }}>
                      <L color="inherit" href="https://www.linkedin.com/in/richardtseng/">
                        <IconContext.Provider value={{ size: 20 }}>
                            <FiLinkedin/>
                        </IconContext.Provider>
                      </L>
                  </Grid>
                 
                  <Grid item xs={2} style={{ textAlign: "center" }}>
                      <L color="inherit" href="mailto: richardtseng820@gmail.com">
                        <IconContext.Provider value={{ size: 20 }}>
                          <FiMail/>
                        </IconContext.Provider>
                      </L>
                  </Grid>

                </Grid>
                
            </Drawer>
            
            <div style={{ flexGrow: 1, padding: 10 }}>
              <Switch>
                <Route component={ Home } exact path="/"/>
                <Route component={ About } path="/about"/>
                <Route component={ Skills } path="/skills"/>
                <Route component={ Work } path="/work"/>
                <Route component={ Error }>Error</Route>
              </Switch>
            </div>
            
        </div> 
      </Router>
    </React.Fragment>
  );
}

export default App;