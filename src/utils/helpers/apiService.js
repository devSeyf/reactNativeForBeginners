import axios from "axios";
import React from 'react'


const BASE_URL = "https://newsdata.io/api/1/news";
const API_KEY = "pub_3c38aff9d43749079cf6f92509e0e9ff";


export default function get(url) {
  const MyURL =`${BASE_URL}${url}&apikey=${API_KEY}`  
    return axios.get(MyURL);
}