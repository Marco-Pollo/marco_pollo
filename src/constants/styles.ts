import { makeStyles } from '@material-ui/core';

// eslint-disable-next-line import/prefer-default-export
export const useStyles = makeStyles((theme) => ({
    offset: theme.mixins.toolbar,
    header: {
        backgroundColor: 'transparent',
        boxShadow: 'none'
    },
    typography: {
        textTransform: 'none'
    },
    paper: {
        background: 'black'
    },
    menuLink: {
        textDecoration: 'none',
        color: 'inherit'
    },
    categoryContainer: {
        paddingTop: '10px',
        marginTop: '40px'
    },
    pollenItemText: {
        padding: '2px 10px',
        width: '100%'
    },
    pollenItemIcon: {
        position: 'absolute',
        top: 0,
        right: 0,
        margin: 7,
        padding: 2,
        scale: '1.2'
    }
}));
