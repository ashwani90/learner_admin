import React from 'react';
import MainCard from 'components/MainCard';
import Switch from '@mui/material/Switch';
import { Grid,Stack, Typography, Paper } from '../../../node_modules/@mui/material/index';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'justify',
    backgroundColor: '#f9f7f1',
  }));

const StyledH2 = styled('h2')(({theme}) => ({
  fontSize: '30px'
}))

const StyledP = styled('p')(({theme}) => ({
  fontSize: '17px'
}))

const NewsItem = ({xs=12,sm=12,md=6,lg=6, ...props}) => {
    return (
        <>
        <Grid item xs={xs} sm={sm} md={md} lg={lg}>
        <Paper elevation={0} variant='outlined'/>
        <Item key={5} elevation={0}>
                  <StyledH2>Election Result 2023: All About Karnataka Election Results Date And Coverage Online</StyledH2>
                  <StyledP>Workers arrange EVMs in a strong room in Bengaluru after Karnataka Assembly elections.Karnataka election result 2023 will 
                  be declared on Saturday, May 13, three days after the voting to elect the 224 members of the state Assembly. Karnataka recorded 
                  a voting percentage of 73.19 - its highest ever - in Wednesdays polling. The state witnessed a fierce fight between the ruling 
                  Bharatiya Janata Party BJP and the Congress, with both the parties claiming they will cross the magic figure and form the 
                  government on their own. Janata Dal Secular, which has previously formed the government in Karnataka, has also expressed 
                  confidence about its electoral fortunes. JDS leader HD Kumaraswamy asserted on Wednesday that his party will be King and 
                  not just the King maker.Karnataka Assembly election 2023 were held almost a year before the 2024 general elections. 
                  All the parties would want to emerge victorious in this electoral battle.Exit polls released after the polling on 
                  Wednesday evening indicated a close contest between the Congress and the BJP in the Karnataka Assembly elections. 
                  Most pollsters have given Congress a slight advantage in the race.Answer: The Karnataka election result coverage 
                  and counting will begin at 8am on Saturday, May 13, 2023.Answer: The detailed coverage and overall results of 
                  Karnataka Assembly election 2023 can be checked live on ndtv.com. You may also watch the live stream of the 
                  election coverage on NDTV 24x7 and NDTV India.The one-stop shop for results from each constituency and the fate of individual 
                  candidates is here.Answer: The state has 224 Assembly seats and the fate of all the contestants will be decided on Saturday. 
                  The counting will be held in 36 centres across Karnataka, and poll officials expect a clear picture about the outcome is likely 
                  to emerge by mid-day.Answer: The two main parties that have contested the elections are BJP which is in power and Congress. 
                  The ruling BJP is looking to break a 38-year-old poll jinx where people have never voted the incumbent party to power, while 
                  the Congress is hoping for a morale booster victory to give it a much-needed elbow room and momentum to position itself as the 
                  main opposition player in the 2024 Lok Sabha elections.The Aam Aadmi Party AAP, which is in power in Delhi and Punjab, has also 
                  fielded its candidates. Also there were some smaller parties in the fray in a few constituencies.Answer: The BJP had then emerged
                   as the single largest party by winning 104 seats, followed by Congress with 80 seats and JDS 37. There was also one independent 
                   member, while the Bahujan Samaj Party BSP and Karnataka Pragnyavantha Janatha Party KPJP got one legislator each elected.In the 
                   2018 elections, the Congress garnered a vote-share of 38.04 per cent, followed by the BJP 36.22 per cent and the JDS 18.36 per 
                   cent.Track Latest News and Karnataka Elections 2023  Coverage Live on NDTV.com and get news updates from India and around the world.</StyledP>
                </Item>
          </Grid>
        </>
    );
}

export default NewsItem;

