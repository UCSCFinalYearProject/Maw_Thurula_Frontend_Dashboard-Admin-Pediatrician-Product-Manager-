import React from 'react';

import API from '../baseURL';
import options from '../option';




export const load_req = async (u_id) => {

    const response = await API.get('/AL/new_request/'+u_id,options)
    console.log("stat card1")

    let data1=response.data
    console.log(data1)
    return data1;
};