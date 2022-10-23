import { Box, Grid, Icon, IconButton, styled, Tooltip } from '@mui/material';
import { Small } from 'app/components/Typography';
import * as React from 'react';
import Card from '@mui/material/Card';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import PendingIcon from '@mui/icons-material/Pending';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import {useEffect, useState} from "react";
import {getPListForAdmin} from "../../../../../services/Admin/Pediatrician/admin_pediatrician_service";
import {
    Get_Astrologers_Month_Profit,
    getAListForAdmin
} from "../../../../../services/Admin/Astrologer/admin_astrologer_service";

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

const AstrologerRequestStatCards = () => {
    const [AList, setAList] = useState([]);
    const [all, setAll] = useState(0);
    const [block, setBlock] = useState(0);
    const [active, setActive] = useState(0);
    const [monthProfit, setMonthProfit] = useState(0);


    useEffect(() => {
        getAListForAdmin().then(data => {
            setAList(data);
        }).catch(err => {
            console.log(err.error)
        })

        Get_Astrologers_Month_Profit().then(data => {
            // console.log("-----------------")
            // console.log()
            setMonthProfit(data.Data[0].sum)
        }).catch(err => {
            console.log(err.error)
        })

    }, []);
    useEffect(()=>{
        // console.log("====================")
        // console.log(monthProfit)
        // console.log("====================")
    },[monthProfit])
    useEffect(async () => {
        let tall=0;
        let tblock=0;
        let tactive=0;
        AList.astrologers ? AList.astrologers.map((p, index) => {
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
    function numberWithCommas(x) {
        // console.log("======================");
        // console.log(x);
        // // console.log(x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
        // console.log("======================");
        if(x){
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        else{
            return 0;
        }

        // return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    const cardList = [
        { name: 'Registered Astrologers', amount: all, icon: 'person_rounded',size:55 },
        { name: 'Pending Requests', amount: active, icon: 'pending_actions', size:50},
        { name: 'Profit of the month', amount: numberWithCommas(monthProfit), icon: 'monetization_on', size:50},
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
                                {item.name =='Profit of the month' ?  <Heading>Rs. {item.amount}.00</Heading>:<Heading>{item.amount}</Heading>}
                            </Box>
                        </ContentBox>


                    </StyledCard>
                </Grid>
            ))}
        </Grid>
    );
};

export default AstrologerRequestStatCards;















// import { Box, Grid, Icon, IconButton, styled, Tooltip } from '@mui/material';
// import { Small } from 'app/components/Typography';
// import * as React from 'react';
// import Card from '@mui/material/Card';
// import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
// import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
// import PendingIcon from '@mui/icons-material/Pending';
//
// const StyledCard = styled(Card)(({ theme }) => ({
//     display: 'flex',
//     flexWrap: 'wrap',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     padding: '24px !important',
//     background: theme.palette.background.paper,
//     [theme.breakpoints.down('sm')]: { padding: '16px !important' },
// }));
//
// const ContentBox = styled(Box)(({ theme }) => ({
//     display: 'flex',
//     flexWrap: 'wrap',
//     alignItems: 'center',
//     '& small': { color: theme.palette.text.secondary },
//     '& .icon': { opacity: 0.6, fontSize: '44px', color: theme.palette.primary.main },
// }));
//
// const Heading = styled('h6')(({ theme }) => ({
//     margin: 0,
//     marginTop: '4px',
//     fontSize: '14px',
//     fontWeight: '500',
//     color: theme.palette.primary.main,
// }));
//
// const MotherStatCards = () => {
//     const cardList = [
//         { name: 'Registered Astrologers', amount: 3050, icon: 'person_rounded',size:50 },
//         { name: 'Active Astrologers', amount: 3050, icon: 'supervisor_account', size:55},
//         { name: 'Blocked Astrologers', amount: 3050, icon: 'person_offIcon', size:45},
//     ];
//
//     return (
//         <Grid container spacing={3} sx={{ mb: '24px' }}>
//             {cardList.map((item, index) => (
//                 <Grid item xs={12} md={4} key={index} >
//                     <StyledCard elevation={6} style={{maxHeight:100 ,minHeight:100}}>
//                         <ContentBox>
//                             <Icon className="icon" style={{fontSize:item.size}}>{item.icon}</Icon>
//                             <Box ml="12px">
//                                 <Small>{item.name}</Small>
//                                 <Heading>{item.amount}</Heading>
//                             </Box>
//                         </ContentBox>
//
//
//                     </StyledCard>
//                 </Grid>
//             ))}
//         </Grid>
//     );
// };
//
// export default MotherStatCards;
