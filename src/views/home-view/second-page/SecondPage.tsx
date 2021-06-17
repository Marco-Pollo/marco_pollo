import React, { memo } from 'react';
import LearnMoreButton from '../../../components/learn-more-button/LearnMoreButton';
import GetStartedButton from '../../../components/get-started-button/GetStartedButton';
import '../homeView.scss';
import './secondPage.scss';
import { Container, Grid, Typography } from '@material-ui/core';
import Footer from '../../../components/footer/Footer';

const SecondPage = () => (
    <div className="home-view__view-port second-page">
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
