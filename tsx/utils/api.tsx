import React, {Component} from 'react';
// import axios from 'axios';
import dataSource from './data-source';

export default  {
   
    // getMenuItems: function():any{
    //     return axios.get("https://desolate-stream-50260.herokuapp.com/proxy?url=https://www.qualcomm.com/api/menus",{})
    //     .then(function(response) {  
    //         return response.data;
    //         // return response.data.find(function(value){
    //         //     return value.name === menuName;
    //         // })
    //         // console.log ('api results', menu)
    //         // return menu.items;
    //     })
    // },

    getDataSource: function():any {
        return dataSource.children;
    },

};