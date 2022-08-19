import MaterialTable from "material-table";

import LockIcon from '@mui/icons-material/LockRounded';
import LockOpenIcon from '@mui/icons-material/LockOpenRounded';
import VisibilityIcon from '@mui/icons-material/Visibility';

import * as React from 'react';
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import {useNavigate} from 'react-router-dom';

const MotherListTable=()=> {
    const navigate = useNavigate();
    // const handleOnClick = () => navigate('/admin/mother_details/2', {replace: false});
    const handleOnClick = () => navigate('/admin/target_mothers_post_list/2', {replace: false});

    // const handleOnClick = () => navigate('/admin/mother_details', {replace: false});

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
            <DialogTitle>Reason for this action</DialogTitle>
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
                { title: 'Status', field: 'Status',lookup:{0:'Unblock',1:'Block'},width: "10%",hidden:true } ,
            ]}
            data={[
                {
                    url: 'https://i.postimg.cc/q7jS5mTj/12.jpg',
                    name: 'Maduni Tharukshi',
                    Email: 'maduni12@gmail.com',
                    Posts: 6,
                    Comments: 63,
                    Status: 1
                },
                {
                    url: 'https://i.postimg.cc/43yRsCwr/13.jpg',
                    name: 'Senuri wikramanayake',
                    Email: 'wikramanayake@gmail.com',
                    Posts: 12,
                    Comments: 63,
                    Status: 1
                },
                {
                    url: 'https://i.postimg.cc/Zn0j1C0B/6.jpg',
                    name: 'Kasunika jayathilake',
                    Email: 'jayathilake@gmail.com',
                    Posts: 1,
                    Comments: 34,
                    Status: 0
                },
                {
                    url: 'https://i.postimg.cc/PryVPnn5/8.jpg',
                    name: 'Nisansala sewwandi',
                    Email: 'sewwandi@gmail.com',
                    Posts: 5,
                    Comments: 15,
                    Status: 1
                },
                {
                    url: 'https://i.postimg.cc/sDp1kW0t/10.jpg',
                    name: 'Hiruni mahisha',
                    Email: 'mahisha@gmail.com',
                    Posts: 4,
                    Comments: 87,
                    Status: 1
                },

            ]}
            onRowClick={(event, rowData) => handleOnClick()}
            actions={[
                (rowData) => {
                    return rowData.Status
                        ? {
                            icon: LockIcon, onClick: (rowData) => { /* anythink */
                            }
                        }
                        : {
                            icon: LockOpenIcon, onClick: (rowData) => {
                                handleClickOpen()
                            }
                        }
                },
                {
                    icon: VisibilityIcon,
                    tooltip: 'Save User',
                    onClick: (event, rowData) => alert("You saved " + rowData.name),
                }
            ]}
            options={{sorting:true, exportAllData:true ,exportButton:true ,actionsColumnIndex: -1,
                paging: true,
            }}
            localization={{
                pagination: {
                    labelDisplayedRows: '',
                    labelRowsPerPage:''
                },
            }}
        />
        </div>
    )
}
export default MotherListTable;
