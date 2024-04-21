import { useState } from 'react';
// material-ui
import { Typography, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Card, Container, Grid } from  '@mui/material/index';
// project import
import MainCard from 'components/MainCard';
import { CalculatorLineDropdown, CalculatorHeadline, CalculatorLineInput, CalculatorSliderLine, CalculatorTotal } from '../CalculatorLine';

const industryOptions = ["Apparel", "Biotech, healthcare and Pharma", "Fossil Fuels", "Hospitality", "Infrastructure", "Manufacturing", "Materials", "Power Generation", "Retail", "Services", "Transportation", "Other"];

// ==============================|| SAMPLE PAGE ||============================== //
const Calculator = () => {
  const theme = useTheme();
  const [electricityUsage, setElectricityUsage] = useState(0);
  const [renewable, setRenewable] = useState(50);
  const [naturalGasUsage, setNaturalGasUsage] = useState(0);
  const [coalUsage, setCoalUsage] = useState(0);
  const [LPGUsage, setLPGUsage] = useState(0);
  const [OilUsage, setOilUsage] = useState(0);
  const [propaneUsage, setPropaneUsage] = useState(0);
  const [industryType, setIndustryType] = useState(0);
  const [employeeCount, setEmployeeCount] = useState(0);
  const [drivingDistance, setDrivingDistance] = useState(0);

  return (
    <Card sx={{padding: '20px'}}>
      <Grid>
        <CalculatorHeadline heading="Industry Information"></CalculatorHeadline>
        <CalculatorLineDropdown title="Industry Type" options={industryOptions}/>
        <CalculatorHeadline heading="Electricty Usage"></CalculatorHeadline>
        <CalculatorLineInput title="Electricity Usage" calculation={true} constant={(100 - renewable) * 345.6 / 100000000} units={"kWh"} value={electricityUsage} setValue={setElectricityUsage}/>
        <CalculatorSliderLine units="%" title="Percentage Renewable (Solar, Wind etc.): " constant={0.01} setValue={setRenewable}></CalculatorSliderLine>
        <CalculatorHeadline heading="Fuel Usage"></CalculatorHeadline>
        <CalculatorLineInput title="Natural Gas" calculation={true} constant={182.93 / 1000000} units={"kWh"} value={naturalGasUsage} setValue={setNaturalGasUsage}/>
        <CalculatorLineInput title="Coal" calculation={true} constant={2904.95 / 1000000} units={"kgs"} value={coalUsage} setValue={setCoalUsage}/>
        <CalculatorLineInput title="Heating Oil" calculation={true} constant={9615.44 / 1000000} units={"US gallons"} value={OilUsage} setValue={setOilUsage}/>
        <CalculatorLineInput title="LPG" calculation={true} constant={62.86 / 1000000} units={"therms"} value={LPGUsage} setValue={setLPGUsage}/>
        <CalculatorLineInput title="Propane" calculation={true} constant={5156.92 / 1000000} units={"US gallons"} value={propaneUsage} setValue={setPropaneUsage}/>

        <CalculatorHeadline heading="Employee Usage"></CalculatorHeadline>
        <CalculatorLineInput title="Employee Count" calculation={false} constant={1} units={"people"} value={employeeCount} setValue={setEmployeeCount}/>
        <CalculatorLineInput title="Employee Distance Travelled Daily" calculation={true} constant={(411 * 30 * 2 / 1000000) * employeeCount} units={"miles"} value={drivingDistance} setValue={setDrivingDistance}/>
        <CalculatorTotal amount={electricityUsage + naturalGasUsage + coalUsage + OilUsage + propaneUsage + drivingDistance} />
        
        <Grid container justifyContent="center">
            <Button variant="contained" sx={{width: '500px', marginTop: "20px"}}>Save Information</Button>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Calculator;
