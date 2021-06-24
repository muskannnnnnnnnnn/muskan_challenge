import React,{useEffect, useState} from 'react';
import Divider from '@material-ui/core/Divider';
import {makeStyles} from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';



const FData=[
    {heading:'Company',content:['About Us','Careers','Support','Contact Us','Charity']},
   
    {heading:'Services',content:['Corporate Wellness','Fitness and Nutrition Courses']},
    
    {heading:'Explore',content:['Healthy Recipes','Nutrition Facts','Transformations']},
    
    // {heading:'Tools',content:['BMR Calculator','Macro Calculator','Body Fat Calculator','1RM Calculator'],href: ['https://www.calculator.net/bmr-calculator.html', 'https://www.calculator.net/macro-calculator.html', 'https://www.calculator.net/body-fat-calculator.html', 'https://strengthlevel.com/one-rep-max-calculator']},
    
    {heading:'Social',content:['Facebook','YouTube','Linkedin','Instagram','Twitter'],href: ['https://www.facebook.com/','https://www.youtube.com/','https://in.linkedin.com/','https://www.instagram.com/','https://www.twitter.com/'],icon:[<FacebookIcon />,<YouTubeIcon />,<LinkedInIcon />,<InstagramIcon />,<TwitterIcon />]},



]
const useStyles=makeStyles((theme)=>({

    root:{
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
    //    backgroundColor:'#ecf0f1',
       flexDirection:'column',
       marginTop:'20px'
      
  },
  button: {
    textDecoration: 'none',
    color: '#606060',
    marginTop: '6px',
    marginBottom: '6px'
},
  input: {
      display: 'none',
    },
    footer:{
        display:'flex',
        flexDirection:'row',
        // padding:'80px',
        backgroundColor:'white'
    },
  subdiv:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    backgroundColor:'#fff',
    flexFlow: 'column',
    width:'100%'
  }
  })
  );
  

export default function Footer(props){
const classes=useStyles();

  return(
    <div className={classes.root}>
        <div className={classes.subdiv}>
           
         <div style={{display:'flex',flexDirection:'column'}}>
          <h2>{FData[0].heading}</h2>
                {FData[0].content.map((item)=>(
                    <a href='#' className={classes.button}>{item}</a>
                ))
                }
         </div>

         <div style={{display:'flex',flexDirection:'column'}}>

             <h2>{FData[1].heading}</h2>
             {FData[1].content.map((item)=>(

                 <a href='#' className={classes.button}>{item}</a> 

             ))}
         </div>

         <div style={{display:'flex',flexDirection:'column'}}>

             <h2>{FData[2].heading}</h2>
             {FData[2].content.map((item)=>(

                 <a href='#'  className={classes.button}>{item}</a> 

             ))}
         </div>

         <div style={{display:'flex',flexDirection:'column'}}>

             <h2>{FData[3].heading}</h2>
             {FData[3].content.map((item,index)=>(

    <a href={FData[3].href[index]} className={classes.button}>{item} {FData[3].icon[index]}</a>

             ))}
         </div>

        
         
         
     </div>

            <div style={{display:'flex',flexDirection:'column'}}>
                <br />
                <Divider variant='fullWidth'/>
                <br />
                
            
            <div style={{display:'flex',flexDirection:'row',alignItems:'flex-start',justifyContent:'space-evenly',flexWrap:'wrap',flexFlow:'row'}}>
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

   

    )
    
}
