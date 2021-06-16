import React, { FunctionComponent, memo } from 'react';
import {
 AppBar, Button, IconButton, Toolbar, Typography
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { useStyles } from '../../constants/styles';
import './header.scss';

const Header: FunctionComponent = () => {
    const { header, typography } = useStyles();

    return (
        <>
            <AppBar className={`header ${header}`} position="static">
                <Toolbar className="toolbar">
                    <Button
                        href="/"
                    >
                        <Typography
                            className={typography}
                            variant="h6"
                        >
                            MarcoPollo
                        </Typography>
                    </Button>
                    <IconButton edge="start">
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </>
    );
};
Header.displayName = 'Header';

export default memo(Header);
