import React, { memo } from 'react';
import {
 Box, Card, CardContent, Container, Grid, Typography
} from '@material-ui/core';
import Header from '../../components/header/Header';
import Footer from '../../components/waves/footer-wave/Footer';

const AboutView = () => (
    <>
        <Header />
        <Container maxWidth="md">
            <Box pt={2} pb={3}>
                <Typography variant="h2">
                    Hey! We are MarcoPollo
                </Typography>
                <Typography variant="body1">
                    Refinery29 is the leading media and entertainment company
                    focused on women with a global audience footprint
                    of 249 million across all platforms. Over the past
                    14 years, Refinery29 has upended the global media
                    space by emphasizing diverse storytelling that
                    delivers refreshing new perspectives to its
                    audience and drives growth across numerous platforms
                    for its partners.
                </Typography>
            </Box>
            <Grid
                direction="row"
                justify="center"
                alignItems="stretch"
                container
                spacing={2}
            >
                <Grid item sm={6} xs={12}>
                    <Card style={{ height: '100%', backgroundColor: '#e91e63' }}>
                        <CardContent>
                            <Typography variant="h3">
                                Our mission
                            </Typography>
                            <Typography variant="body1">
                                Refinery29 is a catalyst for women to feel, see, and claim their power.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item sm={6} xs={12}>
                    <Card style={{ height: '100%', backgroundColor: '#e91e63' }}>
                        <CardContent>
                            <Typography variant="h3">
                                Our essence
                            </Typography>
                            <Typography variant="body1">
                                At our core, Refinery29 operates on Imagination, Individuality, Inclusivity, & Impact.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item sm={6} xs={12}>
                    <Card style={{ height: '100%', backgroundColor: '#e91e63' }}>
                        <CardContent>
                            <Typography variant="h3">
                                Our promise
                            </Typography>
                            <Typography variant="body1">
                                We deliver optimistic and diverse storytelling, experiences, and points of view to our
                                audience of smart, curious, passionate women.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item sm={6} xs={12}>
                    <Card style={{ height: '100%', backgroundColor: '#e91e63' }}>
                        <CardContent>
                            <Typography variant="h3">
                                Our vibe
                            </Typography>
                            <Typography variant="body1">
                                At Refinery29, we make magic. We dream it, and then do it—together—every day reinventing
                                what&apos;s possible.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
        <Footer />
    </>
);

AboutView.displayName = 'AboutView';

export default memo(AboutView);
