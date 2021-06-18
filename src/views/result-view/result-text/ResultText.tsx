import React, { memo } from 'react';
import { Container, Typography } from '@material-ui/core';

const ResultText = () => (
    <Container maxWidth="md">
        <Typography variant="h2" className="second-page__header">
            Dein Ergebnis
        </Typography>
        <Typography variant="body1" className="second-page__text">
            Wir haben Dir mal direkt eine Übersicht zusammen gestellt, mit all Deinen Allergien :)
            Hoffentlich können wir Dir mit dem Umgang Deiner Allergie helfen.
        </Typography>
    </Container>
);

ResultText.displayName = 'ResultText';

export default memo(ResultText);
