import React, {
 FunctionComponent, memo, useEffect, useState
} from 'react';
import { Grid, Typography, useTheme } from '@material-ui/core';
import CheckOutlinedIcon from '@material-ui/icons/CheckOutlined';
import { iPollenItem } from '../../../../types/interfaces';
import { useAppSelector } from '../../../../redux-modules/hooks';
import { selectPollenById } from '../../../../redux-modules/pollen/pollenSelectors';
import { useStyles } from '../../../../constants/styles';
import './pollenItem.scss';

const PollenItem: FunctionComponent<iPollenItem> = ({ id }) => {
    const pollen = useAppSelector((state) => selectPollenById(state, id));

    const { pollenItemText, pollenItemIcon } = useStyles();
    const theme = useTheme();

    const [height, setHeight] = useState(150);
    const [isSelected, setIsSelected] = useState(false);

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
                className="pollen-item-wrapper"
                onClick={() => { setIsSelected(!isSelected); }}
                style={{
                    height
                }}
            >
                <div
                    id={`pollen-item-${pollen?.id}`}
                    className="pollen-item"
                    style={{
                        backgroundImage: `url(${pollen?.image})`,
                        height
                    }}
                >
                    <Typography
                        className={`pollen-item-text ${pollenItemText}`}
                        variant="h6"
                        style={{
                            backgroundColor: isSelected ? theme.palette.primary.main : 'rgba(0,0,0,0.25)'
                        }}
                    >
                        {pollen?.name}
                    </Typography>
                </div>
                {
                    isSelected
                    && (
                        <CheckOutlinedIcon
                            className={pollenItemIcon}
                            style={{
                                backgroundColor: theme.palette.primary.main,
                                borderRadius: '50px'
                            }}
                        />
                    )
                }
            </div>
        </Grid>
    );
};

PollenItem.displayName = 'PollenItem';

export default memo(PollenItem);
