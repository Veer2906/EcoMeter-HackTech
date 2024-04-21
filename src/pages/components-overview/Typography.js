// material-ui
import { Breadcrumbs, Divider, Grid, Link, Stack, Typography, Card } from '@mui/material';

// project import
import ComponentSkeleton from './ComponentSkeleton';
import MainCard from 'components/MainCard';
import { Container } from '@mui/material/index';
import { SubsidyHeader, SubsidyButton, SubsidyPage } from './SubsidyHeader';
import { useState } from 'react';

// ==============================|| COMPONENTS - TYPOGRAPHY ||============================== //

const ComponentTypography = () => {
  let [active, setActive] = useState(false);
  return (
    <Container>
      <Card sx={{paddingBottom: '16px' }}>
        <SubsidyHeader />
        <SubsidyButton callFunction={setActive} />
        {active && <SubsidyPage />}
      </Card>
    </Container>
  );
};

export default ComponentTypography;
