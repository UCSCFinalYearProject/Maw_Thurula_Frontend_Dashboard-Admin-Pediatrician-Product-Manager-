import {Grid, styled, useTheme} from '@mui/material';
import {Fragment} from 'react';

import {useParams,} from 'react-router-dom';
import MotherPostblockcard from "./component/MotherPostTopBlock";
import MotherPostDescription from "./component/MotherPostDescription";
import AdminPostCommentMother from "./component/MotherPostCommentTable";
import MotherRequestPostacceptcard from "./component/MotherRequestPostTopAccept";
import MotherRequestPostDescription from "./component/MotherRequestPostDescription";
import SingleMotherPostListTable from "./component/SingleMotherPostsListTable";
import SingleMotherPostsListTable from "./component/SingleMotherPostsListTable";

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

const MothersRequestList = () => {
    let { uid } = useParams();
    let { pid } = useParams();


    // console.log("location")
    // console.log(uid)
    // console.log(pid)

    const Container = styled('div')(({theme}) => ({
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
            <ContentBox className="analytics" >

                <Grid container spacing={3}>
                    <Grid item lg={6} md={12} sm={12} xs={12}>
                        <MotherRequestPostacceptcard/>
                    </Grid>

                    <Grid item lg={6} md={12} sm={12} xs={12}>

                        <MotherRequestPostDescription/>

                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <SingleMotherPostListTable/>
                    </Grid>

                </Grid>
            </ContentBox>
        </Fragment>
    );
};

export default MothersRequestList;
