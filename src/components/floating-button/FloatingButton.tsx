import React, { memo } from 'react';
import { Fab } from '@material-ui/core';
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded';
import './floatingButton.scss';

const Header = () => {
    const selectedItems: number[] = [1, 2];

    if (!selectedItems || selectedItems.length === 0) {
        return null;
    }

    return (
        <div className="floating-button">
            <Fab href="/result" color="primary" aria-label="add">
                <ArrowForwardRoundedIcon />
            </Fab>
        </div>
    );
};

Header.displayName = 'Header';

export default memo(Header);
