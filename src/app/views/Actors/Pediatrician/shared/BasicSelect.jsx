import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function BasicSelect({Handleclick1}) {
    const [age, setAge] = React.useState('');
    let age1

    const handleChange = (event) => {
        setAge(event.target.value);
        age1=event.target.value
        Handleclick1(age1)
    };

    return (
        <Box sx={{ minWidth: 120 }}>

            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Article category</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}