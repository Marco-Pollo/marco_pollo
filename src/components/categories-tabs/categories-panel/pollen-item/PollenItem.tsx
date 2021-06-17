import React, {
 FunctionComponent, memo, useEffect, useState
} from 'react';
import { Grid, Typography } from '@material-ui/core';
import { iPollenItem } from '../../../../types/interfaces';
import { useAppSelector } from '../../../../redux-modules/hooks';
import { selectPollenById } from '../../../../redux-modules/pollen/pollenSelectors';
import './pollenItem.scss';
import { useStyles } from '../../../../constants/styles';

const PollenItem: FunctionComponent<iPollenItem> = ({ id }) => {
    const pollen = useAppSelector((state) => selectPollenById(state, id));

    const { pollenItemText } = useStyles();

    const [height, setHeight] = useState(150);

    const adjustHeight = () => {
        const element = document.querySelector(`#pollen-item-${pollen?.id}`);
        setHeight(element?.clientWidth || 150);
    };

    useEffect(() => {
        window.addEventListener('resize', adjustHeight);
        adjustHeight();
    }, []);

    return (
        <Grid
            item
            xs={6}
            sm={4}
            md={3}
            lg={3}
            xl={1}
        >
            <div
                id={`pollen-item-${pollen?.id}`}
                className="pollen-item"
                style={{
                    backgroundImage: `url(${pollen?.image})`,
                    height
                }}
            >
                <Typography className={pollenItemText} variant="h6">
                    {pollen?.name}
                </Typography>
            </div>
        </Grid>
    );
};

PollenItem.displayName = 'PollenItem';

export default memo(PollenItem);
