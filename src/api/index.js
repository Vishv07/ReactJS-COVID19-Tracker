import axios from 'axios';

const url = "https://covid19.mathdro.id/api";


export const fatchData = async(country) =>{

  let updateurl =url;
try{
if(country){
  updateurl= `${url}/countries/${country}`;
 }

const {data:{confirmed , recovered , deaths, lastUpdate}} = await axios.get(updateurl);
return {confirmed , recovered , deaths, lastUpdate};
}
catch(error){
  console.log(error);
}
}
export const fetchDailyData = async () => {
    try {
      const { data } = await axios.get(`${url}/daily`);
  
      return data.map(({ confirmed, deaths, reportDate: date }) => ({ confirmed: confirmed.total, deaths: deaths.total, date }));
    } catch (error) {
      return error;
    }
  };

  export const getcountries = async () => {
    try {
      
      const {data:{countries}} =await axios.get(`${url}/countries`);
        return countries.map((countries)=>countries.name);
    } catch (error) {
      return error;
    }
  };


 