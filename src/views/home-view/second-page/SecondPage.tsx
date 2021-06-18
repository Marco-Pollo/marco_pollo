import React, { memo } from 'react';
import LearnMoreButton from '../../../components/learn-more-button/LearnMoreButton';
import GetStartedButton from '../../../components/get-started-button/GetStartedButton';
import '../homeView.scss';
import './secondPage.scss';
import { Container, Grid, Typography } from '@material-ui/core';

const SecondPage = () => (
    <div className="home-view__view-port second-page">
        <div className="second-page__blobs">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                    fill="#e91e63"
                    fillOpacity="1"
                    d="M0,192L18.5,181.3C36.9,171,74,149,111,165.3C147.7,181,185,235,222,218.7C258.5,203,295,117,332,74.7C369.2,32,406,32,443,37.3C480,43,517,53,554,85.3C590.8,117,628,171,665,208C701.5,245,738,267,775,245.3C812.3,224,849,160,886,138.7C923.1,117,960,139,997,176C1033.8,213,1071,267,1108,261.3C1144.6,256,1182,192,1218,170.7C1255.4,149,1292,171,1329,197.3C1366.2,224,1403,256,1422,272L1440,288L1440,0L1421.5,0C1403.1,0,1366,0,1329,0C1292.3,0,1255,0,1218,0C1181.5,0,1145,0,1108,0C1070.8,0,1034,0,997,0C960,0,923,0,886,0C849.2,0,812,0,775,0C738.5,0,702,0,665,0C627.7,0,591,0,554,0C516.9,0,480,0,443,0C406.2,0,369,0,332,0C295.4,0,258,0,222,0C184.6,0,148,0,111,0C73.8,0,37,0,18,0L0,0Z"
                />
            </svg>
        </div>
        <Container maxWidth="md">
            <Grid
                container
                spacing={3}
                md
            >
                <Grid item sm={11} md={10}>
                    <Typography variant="h2" className="second-page__header">
                        Sed enim ut sem viverra aliquet eget sit
                    </Typography>
                    <Typography variant="body1" className="second-page__text">
                        Sed odio morbi quis commodo odio aenean sed adipiscing.
                        Cursus euismod quis viverra nibh cras pulvinar mattis nunc.
                        Dui accumsan sit amet nulla facilisi morbi tempus iaculis.
                        Sed lectus vestibulum mattis ullamcorper velit sed.
                        Cras sed felis eget velit aliquet sagittis id consectetur purus.
                    </Typography>
                </Grid>
                <Grid
                    alignItems="center"
                    container
                    direction="row"
                    item
                    justify="flex-start"
                    spacing={1}
                >
                    <Grid
                        item
                        md={3}
                        sm={4}
                        xs={12}
                    >
                        <div className="second-page__buttons">
                            <LearnMoreButton />
                        </div>
                    </Grid>
                    <Grid
                        item
                        md={3}
                        sm={4}
                        xs={12}
                    >
                        <div className="second-page__buttons">
                            <GetStartedButton />
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    </div>
);

SecondPage.displayName = 'SecondPage';

export default memo(SecondPage);
