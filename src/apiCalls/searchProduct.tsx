import React from "react";
import axios from "axios";

const searchProduct = async (query : string = '') : Promise< Record <string, any >[] >  => {

    query = query.toLocaleLowerCase();
   
    if(query) {

     
    const options = {
        method: 'GET',
        url: 'https://real-time-amazon-data.p.rapidapi.com/search',
        params: {
          query: query,
          page: '1',
          country: 'IN'
        },
        headers: {
          'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
          'X-RapidAPI-Host': process.env.REACT_APP_RAPID_API_HOST
        }
      };

      console.log("process.env.RAPID_API_KEY====>", process.env.REACT_APP_RAPID_API_KEY);
     
      try {
          const response = await axios.request(options);
          console.log("response====>", response);
          return response.data.data.products;
      } catch (error) {
          console.error(error);
          
          return [];
      }

   
    }
    else {
        return [];
    }
}
 
export default searchProduct;