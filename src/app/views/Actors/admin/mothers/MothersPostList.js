import {Grid, styled, useTheme,Card } from '@mui/material';
import {Fragment} from 'react';
import Typography from "@mui/material/Typography";
import MotherProfileTopcard from "./component/MotherProfileTop";
import MotherPosts from "./component/MotherPosts";




const ContentBox = styled('div')(({theme}) => ({
    margin: '30px',
    [theme.breakpoints.down('sm')]: {margin: '16px'},
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

const MothersList = () => {
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
            <Grid container spacing={0}>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <MotherProfileTopcard />
              </Grid>

              <Grid item lg={12} md={12} sm={12} xs={12}>
                <Card style={{paddingLeft:30,paddingRight:30,}}>
                  <Typography gutterBottom variant="h6" component="div" style={{marginTop:10, marginBottom:20}}>
                    Recent Posts
                  </Typography>
                  <MotherPosts/>
                </Card>
              </Grid>

            </Grid>
          </ContentBox>
        </Fragment>
    );
};

export default MothersList;
