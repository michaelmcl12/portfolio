import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import StoreIcon from '@mui/icons-material/Store';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

export default function WorkTimeline() {
  return (
    <Timeline>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="h5"
          color="#a8dadc"
        >
          NBT Bank
          <Typography>June 2023 - August 2023</Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <AccountBalanceIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" color="#f1faee">
             Information Technology Intern	
          </Typography>
          <List>
            <ListItem >
              <Typography color="rgba(255, 255, 255, 0.6)">Assisted the information technology team in a variety of projects</Typography>
            </ListItem>
            <ListItem >
              <Typography color="rgba(255, 255, 255, 0.6)">Deployed and troubleshooted equipment</Typography>
            </ListItem>
            <ListItem >
              <Typography color="rgba(255, 255, 255, 0.6)">Worked with team to image equipment</Typography>
            </ListItem>
          </List>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="h5"
          color="#a8dadc"
        >
          McLaughlin’s Department Store	
          <Typography>August 2017 – August 2021</Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <StoreIcon/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" color="#f1faee">
            Sales Associate	
          </Typography>
          <List>
            <ListItem >
              <Typography color="rgba(255, 255, 255, 0.6)">Worked with customers in helping them find what they are looking for </Typography>
            </ListItem>
            <ListItem >
              <Typography color="rgba(255, 255, 255, 0.6)">Participated in training for various brands to stay up to date on technologies available </Typography>
            </ListItem>
            <ListItem >
              <Typography color="rgba(255, 255, 255, 0.6)">Managed customer transactions </Typography>
            </ListItem>
          </List>
        </TimelineContent>
      </TimelineItem>


      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="h5"
          color="#a8dadc"
        >
          NBT Bank
          <Typography>May 2017 – August 2017</Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <AccountBalanceIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" color="#f1faee">
            Direct Lending Intern
          </Typography>
          <List>
            <ListItem >
              <Typography color="rgba(255, 255, 255, 0.6)">Worked with the underwriting team</Typography>
            </ListItem>
            <ListItem >
              <Typography color="rgba(255, 255, 255, 0.6)">Reviewed applications to make sure all the information was correctly filled out</Typography>
            </ListItem>
            <ListItem >
              <Typography color="rgba(255, 255, 255, 0.6)">Worked with team to disperse loans</Typography>
            </ListItem>
          </List>
        </TimelineContent>
      </TimelineItem>

     </Timeline> 
  );
}