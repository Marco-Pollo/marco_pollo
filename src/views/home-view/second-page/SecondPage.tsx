import React, { memo } from 'react';
import LearnMoreButton from '../../../components/learn-more-button/LearnMoreButton';
import GetStartedButton from '../../../components/get-started-button/GetStartedButton';
import '../homeView.scss';
import './secondPage.scss';
import { Container, Typography } from '@material-ui/core';

const SecondPage = () => (
    <div className='second-page'>
        <Container maxWidth='sm'>
            <Typography variant='h4'>
                Sed enim ut sem viverra aliquet eget sit
            </Typography>
            <Typography variant='body1'>
                Sed odio morbi quis commodo odio aenean sed adipiscing.
                Cursus euismod quis viverra nibh cras pulvinar mattis nunc.
                Dui accumsan sit amet nulla facilisi morbi tempus iaculis.
                Sed lectus vestibulum mattis ullamcorper velit sed.
                Cras sed felis eget velit aliquet sagittis id consectetur purus.
            </Typography>
            <div className='second-page__buttons'>
                <LearnMoreButton />
            </div>
            <div className='second-page__buttons'>
                <GetStartedButton />
            </div>
        </Container>
    </div>
);

SecondPage.displayName = 'SecondPage';

export default memo(SecondPage);
