// material-ui
import { useTheme } from '@mui/material/styles';
import { Card, Container, Stack, MenuItem, InputLabel, OutlinedInput, InputAdornment, Box, Grid, Slider } from '@mui/material';
import { Typography, Select } from '@mui/material/index';
import { useState } from 'react'; 
import { styled } from '@mui/material/styles';
import MuiInput from '@mui/material/Input';

// ==============================|| SAMPLE PAGE ||============================== //
export const CalculatorLineDropdown = (props) => {
  const theme = useTheme();
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
      <Grid container alignItems="center">
        <Grid sm={3}>
          <Typography variant="body1">{props.title}</Typography>
        </Grid>
        <Grid sm={3}>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={value}
            displayEmpty
            onChange={handleChange}
            sx={{width: '300px'}}
          >
            {props.options.map((option) => <MenuItem key={option} value={option}>{option}</MenuItem>)}
          </Select>
        </Grid>
      </Grid>
  );
};

export const CalculatorLineInput = (props) => {
  const theme = useTheme();
  const [insideValue, setInsideValue] = useState(0);

  const handleChange = (event) => {
    props.setValue(event.target.value * props.constant);
    setInsideValue(event.target.value);
  };

  return (
    <Grid container alignItems="center" sx={{ marginTop: '20px', marginBottom: '20px' }}>
      <Grid item sm={3}>
        <Typography variant="body1">{props.title}</Typography>
      </Grid>
      <Grid item sm={4}>
        <OutlinedInput
            sx={{width: '300px'}}
            id="outlined-adornment-weight"
            endAdornment={<InputAdornment position="end">{props.units}</InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}
            value={insideValue}
            onChange={handleChange}
          />
      </Grid>
      { props.calculation ? <Typography variant="body1">Carbon Production: {(props.constant * insideValue).toFixed(4)} Metric Tonnes</Typography> : "" } 
    </Grid>
  );
};

export const CalculatorSliderLine = (props) => {
  const theme = useTheme();
  const [insideValue, setInsideValue] = useState(30);

  const handleSliderChange = (event, newValue) => {
    setInsideValue(newValue);
    props.setValue(newValue * props.constant)
  };

  const handleInputChange = (event) => {
    setInsideValue(event.target.value === '' ? 0 : Number(event.target.value));
    props.setValue(event.target.value === '' ? 0 : Number(event.target.value) * props.constant)
  };

  const handleBlur = () => {
    if (insideValue < 0) {
      setInsideValue(0);
    } else if (insideValue > 100) {
      setInsideValue(100);
    }
  };

  return (
    <Box>
    <Grid container spacing={2} alignItems="center" sx={{ marginTop: '20px', marginBottom: '20px' }}>
      <Grid item xs={3}>
        <Typography variant='body1'>{props.title}</Typography>
      </Grid>
      <Grid item>
        <Slider
          value={typeof insideValue === 'number' ? insideValue : 0}
          onChange={handleSliderChange}
          aria-labelledby="input-slider"
          sx={{width: '180px'}}
        />
      </Grid>
      <Grid item xs={1}>
        <OutlinedInput
          value={insideValue}
          onChange={handleInputChange}
          onBlur={handleBlur}
          endAdornment={<InputAdornment position="end">{props.units}</InputAdornment>}
          inputProps={{
            step: 10,
            min: 0,
            max: 100,
            type: 'number',
            'aria-labelledby': 'input-slider',
          }}
          sx={{width: '100px'}}
        />
      </Grid>
    </Grid>
  </Box>
  )
};

export const CalculatorHeadline = (props) => {
    const theme = useTheme();
    return (
        <Stack sx={{ marginTop: '20px', marginBottom: '20px' }}>
            <Typography variant="h2">{props.heading}</Typography>
        </Stack>
    );
  };

export const CalculatorTotal = (props) => {
  const theme = useTheme();
  return (
    <Grid container alignItems="center">
      <Grid item xs={3} />

      <Grid item sm={4} alignItems="center">
        <Typography variant="h4">Total Carbon Produced in this month: </Typography>
      </Grid>
      <Grid item sm={3}  alignItems="center">
        <Typography variant="h4">{props.amount.toFixed(4)} Metric Tonnes</Typography>
      </Grid>
    </Grid>
  );
};


