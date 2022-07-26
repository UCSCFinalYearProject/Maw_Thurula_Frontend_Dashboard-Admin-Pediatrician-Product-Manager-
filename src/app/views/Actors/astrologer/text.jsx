import MaterialTable from "material-table";
// import React from 'react'
import LockIcon from '@mui/icons-material/LockRounded';
import LockOpenIcon from '@mui/icons-material/LockOpenRounded';
import VisibilityIcon from '@mui/icons-material/Visibility';
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const AstrologerNewJobRequest = ( ) => {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const checkStatus=(data)=>{
        console.log("data - "+data)
        return true
    }
    return (

        <div>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Subscribe</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        This message will show on this users window
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="reason"
                        label="Reason for Block"
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Submit</Button>
                </DialogActions>
            </Dialog>

            <MaterialTable
                title="Mothers List"
                columns={[
                    {
                        field: 'url',
                        title: 'Avatar',
                        render: rowData => <img src={rowData.url} style={{width: 30, borderRadius: '50%',boxShadow: "0px 3px 6px #9E9E9E"}}/>,
                        cellStyle: {
                            paddingLeft:30
                        },
                        headerStyle: {
                            paddingLeft:30
                        }                },
                    { title: 'Name', field: 'name',width: "10%" },
                    { title: 'Email', field: 'Email',width: "10%" },
                    { title: 'Posts', field: 'Posts',width: "10%" },
                    { title: 'Comments', field: 'Comments',width: "10%" },
                    { title: 'Status', field: 'Status',lookup:{0:'Unblock',1:'Block'},width: "10%" },
                ]}
                data={[
                    {url:'https://avatars0.githubusercontent.com/u/7895451?s=460&v=4', name: 'Akila Anjana', Email: 'anjanadissanayaka@gmail.com', Posts: 1987, Comments: 63 ,Status:1},
                    { url:'https://avatars0.githubusercontent.com/u/7895451?s=460&v=4',name: 'Anura Anjana', Email: 'anjanadissanayaka@gmail.com', Posts: 1987, Comments: 63 ,Status:1},
                    { url:'https://avatars0.githubusercontent.com/u/7895451?s=460&v=4',name: 'Kasun Anjana', Email: 'anjanadissanayaka@gmail.com', Posts: 1987, Comments: 63 ,Status:0},
                    { url:'https://avatars0.githubusercontent.com/u/7895451?s=460&v=4',name: 'Pasan Anjana', Email: 'anjanadissanayaka@gmail.com', Posts: 1987, Comments: 63 ,Status:1},
                ]}
                onRowClick={(event, rowData) => console.log(rowData)}
                actions={[
                    (rowData) => {
                        return rowData.Status
                            ? { icon: LockIcon, onClick: (rowData) => { /* anythink */ } }
                            : { icon: LockOpenIcon, onClick: (rowData) => { handleClickOpen() } }
                    },
                    {
                        icon: VisibilityIcon,
                        tooltip: 'Save User',
                        onClick: (event, rowData) => alert("You saved " + rowData.name),
                    }
                ]}
                options={{sorting:true, exportAllData:true ,exportButton:true ,actionsColumnIndex: -1}}
            />


        </div>
    )
}

export default  AstrologerNewJobRequest ;