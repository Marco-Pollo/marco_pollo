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
    menuLink: {
        textDecoration: 'none',
        color: 'inherit'
    },
    categoryContainer: {
        paddingTop: '10px',
    },
    pollenItemText: {
        backgroundColor: 'rgba(0,0,0,0.25)',
        padding: '2px 10px',
        width: '100%',
    }
}));
