import express, { response } from 'express'
import axios from 'axios';
const app=express()
const port=5000

const url = "https://api.worldbank.org/v2/country/IND/indicator/CM.MKT.TRNR?date=2010:2025&format=json";
fetch(url)
  .then(response => response.json())
  .then(data => console.log('Gdp of India from 2010 to 2025-->',data[1]))
  .catch(error => console.error("Error fetching data:", error));

app.listen(port,(req,res)=>{
    console.log('The server started at the port -->',port)
})