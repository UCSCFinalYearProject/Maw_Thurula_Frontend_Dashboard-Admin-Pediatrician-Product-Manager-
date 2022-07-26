import { Card, Grid, styled, useTheme } from '@mui/material';
import { Fragment } from 'react';
import Campaigns from './shared/Campaigns';
import DoughnutChart from './shared/Doughnut';
import RowCards from './shared/RowCards';
import StatCards from './shared/StatCards';
import ProfitStatCards from './shared/admin/ProfitStatCards';
import TopSellingTable from './shared/TopSellingTable';
import UpgradeCard from './shared/UpgradeCard';
import AdminStatCards from "./shared/admin/AdminStatCards";
import LatestCommunityPostRequestTable from "./shared/admin/LatestCommunityPostRequestTable";
import PediatricianRequestTable from "./shared/admin/PediatricianRequestTable";
import SimpleCard from "../../components/SimpleCard";
import LineChart from "../charts/echarts/LineChart";


const ContentBox = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
}));

const Title = styled('span')(() => ({
  fontSize: '1rem',
  fontWeight: '500',
  marginRight: '.5rem',
  textTransform: 'capitalize',
}));

const SubTitle = styled('span')(({ theme }) => ({
  fontSize: '0.875rem',
  color: theme.palette.text.secondary,
}));

const H4 = styled('h4')(({ theme }) => ({
  fontSize: '1rem',
  fontWeight: '500',
  marginBottom: '16px',
  textTransform: 'capitalize',
  color: theme.palette.text.secondary,
}));

const Analytics = () => {
  const { palette } = useTheme();

  const Container = styled('div')(({ theme }) => ({
    margin: '30px',
    [theme.breakpoints.down('sm')]: {
      margin: '16px',
    },
    '& .breadcrumb': {
      marginBottom: '30px',
      [theme.breakpoints.down('sm')]: {
        marginBottom: '16px',
      },
    },
  }));
  return (
    <Fragment>
      <ContentBox className="analytics">
        <Grid container spacing={3}>
          <Grid item lg={8} md={8} sm={12} xs={12}>
            <AdminStatCards />
            <LatestCommunityPostRequestTable />
            {/*<H4>Trending Articles </H4>*/}
            {/*<RowCards />*/}
            <PediatricianRequestTable />

          </Grid>

          <Grid item lg={4} md={4} sm={12} xs={12}>
            <ProfitStatCards />
            <Card sx={{ px: 3, py: 2, mb: 3 }}>
              <Title>Monthly Profits Summary</Title>

              <LineChart
                  height="350px"
                  color={[palette.primary.dark, palette.primary.main, palette.primary.light]}
              />
            </Card>

            {/*<UpgradeCard />*/}
            {/*<Campaigns />*/}
          </Grid>
        </Grid>
      </ContentBox>
    </Fragment>
  );
};

export default Analytics;
