import React,{useEffect, useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
const useStyles=makeStyles((theme)=>({    

    root:{
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      //  backgroundColor:'#ecf0f1',
      //  height:window.screen.height*0.8,
  }
  }))
export default function FoodApp(props){
   

    const classes=useStyles();
    return(
        <div className={classes.root}>
            <div style={{width:'100%'}}>
                     <Header history={props.history}/>
                     
                     
                     <div style={{display:'flex',alignItems:'center',justifyContent:'center',margin:40}}>
                            <div style={{display:'flex',flexDirection:'column',padding:80}}>
                                <span style={{display:'flex',fontFamily:'cursive',fontWeight:'bold',fontSize:25}}>Welcome To Muskan's Kitchen</span>
                                <div style={{display:'flex',justifyContent:'center',marginTop:12}}>
                                <Button variant="contained" color="secondary" onClick={()=>props.history.push({pathname:'/fooditems'},{product:true})} style={{width:200}}>Go To Menu <ArrowForwardIosIcon /> </Button>
                                </div>
                                
                            </div>
                         </div>
                     
                     
                     <Footer history={props.history}/>
             </div>
        </div>
    )
}