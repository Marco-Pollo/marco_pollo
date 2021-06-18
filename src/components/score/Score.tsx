import React, { FunctionComponent } from 'react';
import './score.scss';
import {
 Container, createStyles, Theme, Typography, WithStyles, withStyles
} from '@material-ui/core';
import clsx from 'clsx';
import { selectScore } from '../../redux-modules/working-data/workingDataSelectors';
import { useAppSelector } from '../../redux-modules/hooks';

const styles = createStyles((theme: Theme) => ({
    score: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'end',
        marginTop: '40px',
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: '100%',
        padding: '30px',
        backgroundColor: 'rgba(255,255,255,0.1)',
        [theme.breakpoints.up('sm')]: {
            bottom: 20,
            right: 20,
            width: '250px',
            borderRadius: 20
        }
    },
    scoreWrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'end',
        position: 'sticky',
        bottom: 0,
        right: 0,
        width: '100%'
    }
}));
type ScoreProps = WithStyles<typeof styles>;

const Score: FunctionComponent<ScoreProps> = ({ classes }) => {
    const score = useAppSelector(selectScore);

    const getBackgroundColor = (val: number) => {
        switch (val) {
            case 0: return 'rgba(255,255,255,0.1)';
            case 1: return 'rgba(233,206,30,0.8)';
            case 2: return 'rgba(233,125,30,0.8)';
            default: return 'rgba(233,30,99,0.8)';
        }
    };

    return (
        // @ts-expect-error stupid
        <Container className={clsx(classes.scoreWrapper)}>
            <Container
                /* @ts-expect-error stupid */
                className={clsx('pollen-score', classes.score)}
                style={{
                    backgroundColor: getBackgroundColor((score?.hard?.score && 3)
                                                        || (score?.mild?.score && 2)
                                                        || (score?.light?.score && 1)),
                }}
            >
                <Typography
                    className="pollen-score_number"
                    variant="h1"
                >
                    {score?.score}
                </Typography>
                <Typography
                    className="pollen-score_text"
                    variant="h4"
                >
                    Score
                </Typography>
            </Container>
        </Container>
    );
};

Score.displayName = 'Calendar';

export default withStyles(styles)(Score);
