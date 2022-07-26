import {Button, Card, Grid, styled, useTheme} from '@mui/material';
import { Fragment } from 'react';
import PediatriciansRequestStatCards from  "./component/Pediatriciansrequeststatcard";
import PediatriciansRequestListTable from  "./component/PediatriciansRequestListTable";





const Astrologers = () => {

    const ContentBox = styled('div')(({ theme }) => ({
        margin: '30px',
        [theme.breakpoints.down('md')]: { margin: '16px' },
    }));
    return (
        <Fragment>
            <ContentBox className="analytics" >
                <Grid container item lg={12} spacing={3} >
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <PediatriciansRequestStatCards/>
                        <PediatriciansRequestListTable/>
                    </Grid>
                </Grid>
            </ContentBox>
        </Fragment>
    );
};

export default Astrologers;
