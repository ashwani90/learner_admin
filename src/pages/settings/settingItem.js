import React from 'react';
import MainCard from 'components/MainCard';
import Switch from '@mui/material/Switch';
import { Grid,Stack, Typography } from '../../../node_modules/@mui/material/index';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const SettingItem = ({xs=12,sm=12,md=6,lg=6, ...props}) => {
    return (
        <>
        <Grid item xs={xs} sm={sm} md={md} lg={lg} sx={{ mb: -2.25 }}>
            <MainCard sx={{ mt: 2 }}>
                    <Stack spacing={3}>
                        <Grid container justifyContent="space-between" alignItems="center">
                            <Grid item>
                                <Stack>
                                    <Typography variant="h5" noWrap>
                                        Title
                                    </Typography>
                                    <Typography variant="caption" color="secondary" noWrap>
                                        Date
                                    </Typography>
                                </Stack>
                            </Grid>
                            <Grid item>
                            <Switch {...label} defaultChecked />
                            </Grid>
                        </Grid>
                        </Stack>
                        </MainCard>
                        </Grid>
        </>
    );
}

export default SettingItem;

