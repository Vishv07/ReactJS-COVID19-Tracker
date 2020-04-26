import React ,{useEffect,useState}from 'react';
import {NativeSelect , FormControl ,Box} from '@material-ui/core';
import styles from './CountryPicker.module.css';
import { getcountries } from '../../api';
import { keys } from '@material-ui/core/styles/createBreakpoints';


const CountryPicker = ({whencountrychange}) =>{

    const [fatchedCountries,setfatchedCountries] = useState([]);
    useEffect(() =>{
            
        const fatchedCountries = async()=>{
            setfatchedCountries(await getcountries());
        }

        fatchedCountries();
    } ,[setfatchedCountries])
       


return(

    <FormControl className={styles.formControl}>
     
        <NativeSelect className={styles.dropdown} defaultValue="" onChange ={(e)=>whencountrychange(e.target.value)} >
        <option value="">Global</option>
        {fatchedCountries.map((country,i)=> <option key={i} value={country}>{country}</option>)}
        </NativeSelect>
       
    </FormControl>
);
}

export default CountryPicker;