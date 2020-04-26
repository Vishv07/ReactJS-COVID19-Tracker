import React from 'react';

import {Cards , Chart, CountryPicker} from './components';
import {fatchData} from './api';
import styles from './App.module.css';

class App extends React.Component{
    state ={

        Data:{},
        country:'',
    }

    
    async componentDidMount(){
        const Fatheddata = await fatchData();
        // console.log(Fatheddata);
    this.setState({Data:Fatheddata});
    }
    whencountrychange = async (country) => {
        const Fatheddata = await fatchData(country);
        this.setState({Data:Fatheddata , country:country});
      }
render(){

    const {Data , country} = this.state;
    return(
        <div className={styles.container}>
            <Cards data={Data} />
        <CountryPicker  whencountrychange={this.whencountrychange}/>
        <Chart data={Data} country={country}/>
        </div>
 
    )
}

}

export default App;
