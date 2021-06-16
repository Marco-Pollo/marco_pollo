import React, { FunctionComponent, memo } from 'react';
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import './header.scss';

const Header: FunctionComponent = () => (
    <AppBar className="header" position="static">
        <Toolbar className="toolbar">
            <Typography variant="h6">
                Marco Pollo
            </Typography>
            <IconButton edge="start">
                <MenuIcon />
            </IconButton>
        </Toolbar>
    </AppBar>
);

Header.displayName = 'Header';

export default memo(Header);
