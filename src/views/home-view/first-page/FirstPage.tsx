import React, { memo } from 'react';
import { Typography } from '@material-ui/core';
import '../homeView.scss';
import './firstPage.scss';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const FirstPage = ({ secondPage }: any) => {
    const handleClick = () => {
        if (secondPage && secondPage.current) {
            secondPage.current.scrollIntoView({ behavior: 'smooth', inline: 'nearest' });
        }
    };

    return (
        <div className='home-view__view-port first-page'>
            <Typography variant='h2' align='center' className='home-view__headline'>
                MarcoPollo to empower your daily life
            </Typography>
            <div
                onClick={handleClick}
                className='home-view__view-port--scroll-down'
            >
                <ExpandMoreIcon />
            </div>
        </div>
    );
};

FirstPage.displayName = 'FirstPage';

export default memo(FirstPage);
