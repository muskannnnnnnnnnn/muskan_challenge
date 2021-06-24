import React, { useEffect,useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from './Header';
import Footer from './Footer';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import Grid from '@material-ui/core/Grid';

 
// --For Icon Visibility Password--
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import { ClearAll } from '@material-ui/icons';




const useStyles = makeStyles((theme) => ({

    root:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
         backgroundColor:'#f3f3f3',
    },
    button: {
        textDecoration: 'none',
        color: '#606060',
        marginTop: '6px',
        marginBottom: '6px'
    }
}));


export default function Login(props){
const classes=useStyles()
const FirstView=()=>{
    return(
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',marginBottom:40}}>
                                            <div style={{marginBottom:20}}>
                                                <span className="Font1" style={{justifyContent:'center',display:'flex',fontFamily:'cursive',fontWeight:'bold',fontSize:60}}>Sign In</span>
                                                <span className="categoryfont" style={{justifyContent:'center',display:'flex',fontFamily:'cursive',fontWeight:'bold',fontSize:25}}>Enter The Registered Number</span> 
                                            </div>
                                            <div style={{display:'flex',flexDirection:'row'}}>
                                                <Grid container spacing={2}>
                                                    <Grid item xs={15}  style={{display:'flex',alignItems:'center'}}>
                                                    <TextField
                                                        // backgroundColor='#fff'
                                                        color='primary'
                                                        label="Phone Number"
                                                        // onChange={(e)=>setMobile(e.target.value)}
                                                        id="Phone Number"
                                                        //   className={clsx(classes.margin, classes.textField)}
                                                        InputProps={{
                                                            startAdornment: <InputAdornment position="start">+91</InputAdornment>,
                                                        }}
                                                        variant="filled"
                                                        />
                                                    </Grid>
                                                </Grid>
                                                <Button style={{outline:'none',flexShrink:'1',display:'flex'}}>
                                                <PlayCircleFilledIcon onClick={()=>props.history.push({pathname:'/foodapp'})} style={{height:65,width:65,color:'#2e86de'}}/>
                                                </Button>
                                            </div>
                                        </div>
    )
}


return(

            <div className={classes.root}>
                <div style={{width:'100%'}}>
                        <Header />
                            <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:35}}>
                               <div style={{display:'flex',flexDirection:'row',border:'1px solid #0082c3',backgroundColor:'#fff',borderRadius:15,height:500,width:1100}}>
                                    
                                    <div style={{width:500}}>
                                        <img src='/assets/fries.jpeg' style={{height:498,width:498,borderRadius:15|0|0|15}} />
                                    </div>
                                
                                    <div style={{display:'flex',width:600,justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
                                        {FirstView()}                                       
                                    </div>
                               </div>  
                            </div>
                      
                            <div style={{marginTop:20,display:'flex',flexDirection:'row',alignItems:'flex-start',justifyContent:'space-evenly',flexWrap:'wrap',flexFlow:'row'}}>
                                <div style={{margin: '10px'}}>
                                Copyright &#169; 2015-2020 All Rights Reserved.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </div>
                                <div style={{margin: '8px'}}>
                                <a href='#' className={classes.button}>Privacy Policy</a>&nbsp;|&nbsp;
                                <a href='#' className={classes.button}>Terms & Conditions</a>&nbsp;|&nbsp;
                                <a href='#' className={classes.button}>SiteMap</a>&nbsp;|&nbsp;
                                </div>

                           </div>
                </div>
            </div>



)}

