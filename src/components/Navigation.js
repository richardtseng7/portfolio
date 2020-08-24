import React from 'react'
import { Link } from 'react-router-dom'
import { Drawer, MenuList, MenuItem } from '@material-ui/core'

export const Navigation = () => (
    <Drawer variant="permanent" style={{ width: '250px'}}>
        <MenuList>
            <MenuItem component={ Link } to="/">Home</MenuItem>
            <MenuItem component={ Link } to="/about">About</MenuItem>
            <MenuItem component={ Link } to="/skills">Skills</MenuItem>
            <MenuItem component={ Link } to="/work">Work</MenuItem>
        </MenuList>
    </Drawer>
)