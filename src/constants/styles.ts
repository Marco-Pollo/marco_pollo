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
    }
}));
