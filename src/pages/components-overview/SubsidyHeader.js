// material-ui
import { useTheme } from '@mui/material/styles';
import { Card, Container, Stack, MenuItem, InputLabel, OutlinedInput, InputAdornment, Divider, Box, Grid, Slider, Button, Paper } from '@mui/material';
import { Typography, Select } from '@mui/material/index';
import { useState } from 'react'; 
import { styled } from '@mui/material/styles';
import MuiInput from '@mui/material/Input';
import { func } from 'prop-types';

// ==============================|| SAMPLE PAGE ||============================== //
export const SubsidyHeader = (props) => {
  return (
    <Grid container justifyContent="center" sx={{padding: '20px'}}>
        <Grid item>
            <Typography variant="h2">
                Clean Carbon Score: 74
            </Typography>
        </Grid>
    </Grid>
  );
};

export const SubsidyButton = (props) => {
    return (
        <Grid container justifyContent="center" sx={{paddingBelow: '20px'}}>
            <Grid item>
                <Button variant="contained" color="success" onClick={() => props.callFunction(true)}>
                Calculate Available Government Subsidies and Other Rewards!
                </Button>
            </Grid>
        </Grid>
    )
}

export const SubsidyPage = (props) => {
    let [active, setActive] = useState([1, 0, 0, 0, 0]);

    return (
        <Grid container spacing={2}>
            {/* Left-side panel with buttons */}
            <Grid item xs={12} sm={4} md={3}>
                <LeftPanel active={active} setActive={setActive}/>
            </Grid>

            <Divider orientation="vertical" flexItem/>

            {/* Right-side panel with text */}
            <Grid item xs={8}>
                <RightPanel activeSubsidy={active}/>
                
            </Grid>
        </Grid>
    )
}

const subsidies = [
    {
        name: "Test Subsidy Name",
        content: "Test Subsidy Content", 
    }, 
    {
        name: "Test Subsidy Name 1",
        content: "Test Subsidy Content", 
    },
    {
        name: "Test Subsidy Name 2",
        content: "Test Subsidy Content", 
    },
    {
        name: "Test Subsidy Name 3",
        content: "Test Subsidy Content", 
    },
    {
        name: "Test Subsidy Name 4",
        content: "Test Subsidy Content", 
    }
]

const RightPanel = (props) => {
    return (
        <Container>
            <Grid container direction="column" sx={{ padding: 2 }} spacing={3}>
                <Grid item sx={{marginTop:'10px'}}>
                    <Typography variant="h3" >{subsidies[props.activeSubsidy.indexOf(1)].name}</Typography>
                </Grid>
                <Grid item >
                    <Typography variant='body1'>{subsidies[props.activeSubsidy.indexOf(1)].content}</Typography>
                </Grid>
                <Grid item>
                    <Button variant="contained" color="success">
                        Click here to go to subsidy page
                    </Button>
                </Grid>
            </Grid>
        </Container>
    );
};


const TransparentButton = (props) => (
    <Button
        variant="text"
        fullWidth
        onClick={props.onClick}
        disableRipple
        sx={{
            backgroundColor: props.green ? 'lightgreen' : 'transparent', // Transparent background
            border: 'none', // No border
            color: 'black', // Change text color as needed
            textTransform: 'none', // Optional: Keep text case
            height: '80px', // Span full height
            '&:hover': {
                backgroundColor: props.green ? 'lightgreen' : 'transparent', // Keeps the background color on hover
            },
            '&:focus': {
                boxShadow: 'none', // Removes focus outline
            },
            '&:active': {
                backgroundColor: props.green ? 'lightgreen' : 'transparent', // No change in background on click
            },
            padding: 0, // No internal padding
            margin: 0, // No external margin
            minWidth: 'auto', // Removes default minimum width
            minHeight: 'auto', // No minimum height

        }}
    >
        {props.subsidyName.name}
    </Button>
);

const LeftPanel = (props) => {
    return (
        <Container sx={{ padding: 2 }}>
            <Grid container direction="column" spacing={0}>
                <Grid item>
                    <TransparentButton onClick={() => props.setActive([1, 0, 0, 0, 0])} green={props.active[0]} subsidyName={subsidies[0]} >Button 1</TransparentButton>
                </Grid>
                <Divider />
                <Grid item>
                    <TransparentButton onClick={() => props.setActive([0, 1, 0, 0, 0])} green={props.active[1]} subsidyName={subsidies[1]}>Button 2</TransparentButton>
                </Grid>
                <Divider />
                <Grid item>
                    <TransparentButton onClick={() => props.setActive([0, 0, 1, 0, 0])} green={props.active[2]} subsidyName={subsidies[2]}>Button 3</TransparentButton>
                </Grid>
                <Divider />
                <Grid item>
                    <TransparentButton onClick={() => props.setActive([0, 0, 0, 1, 0])} green={props.active[3]} subsidyName={subsidies[3]}>Button 4</TransparentButton>
                </Grid>
                <Divider />
                <Grid item>
                    <TransparentButton onClick={() => props.setActive([0, 0, 0, 0, 1])} green={props.active[4]} subsidyName={subsidies[4]}>Button 5</TransparentButton>
                </Grid>
            </Grid>
        </Container>
    );
};




