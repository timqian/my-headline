import axios from 'axios'

var aFetch = axios.create({
  baseURL: 'https://raw.githubusercontent.com/timqian/my-headline-crawler/master/data/',
  timeout: 7000,
});
