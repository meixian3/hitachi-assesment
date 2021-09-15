import { makeStyles, TextField } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    formControl: {
      marginTop: theme.spacing(-3),
      minWidth: 300,
    }
    
}))

const Details =(props)=>{
    const classes = useStyles();
    if(props.activeCountry!==''){
        return(
            <div className='App'>
            <p> Celsius</p>
            <TextField className={classes.formControl} label={props.activeCountry.temp_c} />
            <br/>
            <br/>
            <p> Fahrenheit</p>
            <TextField className={classes.formControl} label={props.activeCountry.temp_f} />
            </div>
        )
    }else{
        return(
            <div className='App'>
            <p> No data</p>
            </div>
        )
    }
   

}


function mapStateToProps(state) {
    return {
        activeCountry:state.app.activeCountry
    }
}
  

export default connect(mapStateToProps)(Details);