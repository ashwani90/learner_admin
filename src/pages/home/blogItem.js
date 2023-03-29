import React from 'react';
import MainCard from 'components/MainCard';
import { Stack, Grid, Typography,AvatarGroup,Avatar,Button } from '@mui/material';
import avatar1 from 'assets/images/users/avatar-1.png';
import avatar2 from 'assets/images/users/avatar-2.png';
import avatar3 from 'assets/images/users/avatar-3.png';
import avatar4 from 'assets/images/users/avatar-4.png';


const BlogItem = ({xs=12,sm=12,md=6,lg=6, ...props}) => {
    return (
        
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
                            <Typography variant="h6" color="secondary" noWrap>
                                       User Description
                                    </Typography>
                                {/* <AvatarGroup sx={{ '& .MuiAvatar-root': { width: 32, height: 32 } }}>
                                    <Avatar alt="Remy Sharp" src={avatar1} />
                                    <Avatar alt="Travis Howard" src={avatar2} />
                                    <Avatar alt="Cindy Baker" src={avatar3} />
                                    <Avatar alt="Agnes Walker" src={avatar4} />
                                </AvatarGroup> */}
                            </Grid>
                        </Grid>
                        <Grid container justifyContent="space-between" alignItems="center">
                        <img
        src={avatar1}
        height='300'
        width="100%"
        alt={"title"}
        loading="lazy"
      />
                        </Grid>
                        <Grid container justifyContent="space-between" alignItems="center">
                        <Grid item>
                        <Button size="small" variant="contained" sx={{ textTransform: 'capitalize' }}>
                            Need Help?
                        </Button>
                            </Grid>
                            <Grid item>
                            <AvatarGroup sx={{ '& .MuiAvatar-root': { width: 32, height: 32 } }}>
                                    <Avatar alt="Remy Sharp" src={avatar1} />
                                    <Avatar alt="Travis Howard" src={avatar2} />
                                    <Avatar alt="Cindy Baker" src={avatar3} />
                                    <Avatar alt="Agnes Walker" src={avatar4} />
                                </AvatarGroup>
                            </Grid>
                        </Grid>
                        
                    </Stack>
                </MainCard>
            </Grid>
    
                );
}

export default BlogItem;