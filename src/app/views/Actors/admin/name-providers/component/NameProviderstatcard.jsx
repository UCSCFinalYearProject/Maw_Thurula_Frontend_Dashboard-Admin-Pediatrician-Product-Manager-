import { Box, Grid, Icon, IconButton, styled, Tooltip } from '@mui/material';
import { Small } from 'app/components/Typography';
import * as React from 'react';
import Card from '@mui/material/Card';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import PendingIcon from '@mui/icons-material/Pending';
import {useEffect, useState} from "react";
import {
    Get_Astrologers_Month_Profit,
    getAListForAdmin
} from "../../../../../services/Admin/Astrologer/admin_astrologer_service";
import {Get_NP_Month_Profit, getNPListForAdmin} from "../../../../../services/Admin/Name_Provider/admin_np_service";

const StyledCard = styled(Card)(({ theme }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '24px !important',
    background: theme.palette.background.paper,
    [theme.breakpoints.down('sm')]: { padding: '16px !important' },
}));

const ContentBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    '& small': { color: theme.palette.text.secondary },
    '& .icon': { opacity: 0.6, fontSize: '44px', color: theme.palette.primary.main },
}));

const Heading = styled('h6')(({ theme }) => ({
    margin: 0,
    marginTop: '4px',
    fontSize: '14px',
    fontWeight: '500',
    color: theme.palette.primary.main,
}));

const MotherStatCards = () => {
    const [AList, setAList] = useState([]);
    const [all, setAll] = useState(0);
    const [block, setBlock] = useState(0);
    const [active, setActive] = useState(0);
    const [monthProfit, setMonthProfit] = useState(0);


    useEffect(() => {
        getNPListForAdmin().then(data => {
            setAList(data);
        }).catch(err => {
            console.log(err.error)
        })

        Get_NP_Month_Profit().then(data => {
            // console.log("-----------------")
            // console.log(data.Data[0].sum)
            setMonthProfit(data.Data[0].sum)
        }).catch(err => {
            console.log(err.error)
        })

    }, []);
    useEffect(async () => {
        let tall=0;
        let tblock=0;
        let tactive=0;
        AList.np ? AList.np.map((p, index) => {
            tall++;
            if(p.STATUS == 1){
                tblock++;
            }
            if(p.STATUS==2){
                tactive++;
            }
        }) : console.log("")
        // console.log(tall)
        // console.log(tblock)
        // console.log(tactive)

        setAll(tall)
        setActive(tactive)
        setBlock(tblock)
    }, [AList]);
    // function numberWithCommas(x) {
    //     return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    // }
    function numberWithCommas(x) {
        if(x){
            return "Rs. "+x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+".00";
        }
        else{
            return "Rs. 0.00";
        }

        // return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    const cardList = [
        { name: 'Registered Name Providers', amount: all, icon: 'person_rounded',size:50 },
        { name: 'Pending Requests', amount: active, icon: 'pending_actions', size:55},
        { name: 'Profit of the month', amount: numberWithCommas(monthProfit), icon: 'monetization_on', size:45}
    ];

    return (
        <Grid container spacing={3} sx={{ mb: '24px' }}>
            {cardList.map((item, index) => (
                <Grid item xs={12} md={4} key={index} >
                    <StyledCard elevation={6} style={{maxHeight:100 ,minHeight:100}}>
                        <ContentBox>
                            <Icon className="icon" style={{fontSize:item.size}}>{item.icon}</Icon>
                            <Box ml="12px">
                                <Small>{item.name}</Small>
                                <Heading>{item.amount}</Heading>
                            </Box>
                        </ContentBox>


                    </StyledCard>
                </Grid>
            ))}
        </Grid>
    );
};

export default MotherStatCards;
