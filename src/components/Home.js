import { Button, FormControl, InputLabel, makeStyles, MenuItem, Select, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { bindActionCreators } from "redux";
import { updateActiveCountry } from '../actions';
import '../App.css';


const useStyles = makeStyles((theme) => ({
    formControl: {
      minWidth: 300,

    },
    selectEmpty: {
      marginTop: theme.spacing(2)
    },
    selected: {
        "&$selected": {
            backgroundColor: "white'",
              "&:hover": {
                backgroundColor: "rgb(34,150,243)"
               }
            },
    },
    nonSelected:{
        backgroundColor:'whitesmoke'
    }
    
  }));

const Home=(props)=>{
    const classes = useStyles();
    const history = useHistory()

    const [selectedCountry,setSelectedCountry]=useState('KL')
    const handleChange = (event) => {
        setSelectedCountry(event.target.value);
    };
    const myRequest = new Request('http://api.weatherapi.com/v1/current.json?key=ff9f895b2e884d6680530135202710&q=Kuala%20Lumpur');
    
    const routeChange=()=> {
        history.push('/Details');
    }
    

    const _onClick=()=>{
        if(selectedCountry==='KL'){
            fetch(myRequest)
            .then(response => response.json())
            .then(data => {
                 props.updateActiveCountry(data.current)
            })
        }else{
            props.updateActiveCountry('')

        }

        routeChange()
       
    }

    return(
        <div className='App'>
            <p>
             Your API Key
            </p>
            <TextField className={classes.formControl} label={'ff9f895b2e884d6680530135202710'} />
            <p>
             City Name
            </p>
            <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label"></InputLabel>
            <Select 
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={selectedCountry}
            onChange={handleChange}
            label=""
            >
            <MenuItem value={'KL'} className={classes.selected}>Kuala Lumpur</MenuItem>
            <MenuItem value={'SG'} className={classes.selected}>Singapore</MenuItem>
            </Select>
            </FormControl>
            <div className='button-style'>
                <Button variant="contained" style={{backgroundColor:'rgb(248,95,106)',color:'white'}} className={classes.formControl} onClick={_onClick}>
                Submit
                </Button>
           </div>
        </div>
    )

}

  
function mapDispatchToProps(dispatch) {
return bindActionCreators({
    updateActiveCountry
    }, dispatch);
}

export default connect(mapDispatchToProps)(Home);
