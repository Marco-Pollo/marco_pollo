import React, { FunctionComponent, memo, useState } from 'react';
import {
    AppBar,
    Button,
    Divider,
    Drawer,
    IconButton,
    Link,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    MenuItem,
    Toolbar,
    Typography
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { useStyles } from '../../constants/styles';
import './header.scss';
import { Home } from '@material-ui/icons';

const Header: FunctionComponent = () => {
    const { header, menuLink, typography, paper } = useStyles();

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <AppBar className={`header ${header}`} position="sticky">
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
                    <IconButton
                        edge="start"
                        aria-controls="simple-menu"
                        aria-haspopup="true"
                        onClick={() => { setIsOpen(true); }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Drawer
                        classes={{ paper }}
                        open={isOpen}
                        id="simple-menu"
                        anchor="right"
                        onClose={() => { setIsOpen(false); }}
                    >
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
                        </Toolbar>
                        <Divider />
                        <Link className={menuLink} href="/"><MenuItem>Home</MenuItem></Link>
                        <Link className={menuLink} href="/select"><MenuItem>Get Started</MenuItem></Link>
                        <Link className={menuLink} href="/about"><MenuItem>About</MenuItem></Link>
                        <Link className={menuLink} href="/result"><MenuItem>Result</MenuItem></Link>
                    </Drawer>
                </Toolbar>
            </AppBar>
        </>
    );
};
Header.displayName = 'Header';

export default memo(Header);
