import React from 'react';

import API from '../baseURL';
import options from '../option';

export const getPostList = async (id) => {
    const response = await API.get(`/pt/view_all_articles`,{
        params:{
            "doctor_id":id
        }
    }, options);
    return response.data;
};
export const getallPostList = async () => {
    const response = await API.get(`/pt/view_all_articles`, options);
    // console.log("res out "+response.data)
    return response.data;
};

export const fullArticle = async (id,id1) => {
    const response = await API.get(`/pt/view_single_articles`,{
        params:{
            "article_id":id,
            "doctor_id":id1
        }
    }, options);
    return response.data;
};

export const getCommentCount = async (id) => {

    const response = await API.get(`/pt/no_of_article_comments`,{
        params:{
            "article_id":id
        }
    }, options);
    return response.data;
};
export const Imageupload = async (image) => {

    const response = await API.post(`/pt/imageupload`,{
        params:{
            "image":image
        }
    }, options);
    return response;
};

export const getCommentList = async (id) => {

    const response = await API.get(`/pt/view_article_comments`,{
        params:{
            "article_id":id
        }
    }, options);
    return response.data;
};
export const blockComments = async (id) => {

    const response = await API.post(`/pt/block_article_comments`,{
        params:{
            "comment_id":id
        }
    }, options);
    return response.data;
};

export const unblockComments = async (id) => {

    const response = await API.post(`pt/unblock_article_comments`,{
        params:{
            "comment_id":id
        }
    }, options);
    return response.data;
};

export const today_article_comments = async (today) => {

    const response = await API.get(`/pt/get_today_comments`,{
        params:{
            "today":today
        }
    }, options);
    return response.data;
};


export const getFollowerListForPediatrician = async(id) => {
    const response = await API.get(`/pt/view_followers`,{
        params:{
            "doctor_id":id
        }
    }, options);
    return response.data;
};