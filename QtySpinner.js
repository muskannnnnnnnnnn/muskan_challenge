import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect,useState } from 'react';
 const useStyles = makeStyles((theme) => ({
   root:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
     },
}))




export default function QtySpinner(props){
    const classes = useStyles();
    const [value,setValue]=useState(props.value)


    const handleDecreament=()=>{
        var c=value-1
        if(c>=0)
        setValue(c)
        props.onChange(c)
    
    }
    

    const handleIncreament=()=>{
        var c=value+1
        setValue(c)
        props.onChange(c)
    }
const handleClick=()=>{
    setValue(1)
    props.onChange(1)
}

    return(


    <div>
               {  value>=1?
               (
                    <div style={{display:'flex',flexDirection:'row',marginLeft:50}}>
                        <Avatar style={{backgroundColor:'#ffea29',width:45,height:45}} onClick={()=>handleDecreament()}>-</Avatar>
                        <span style={{display:'flex',justifyContent:'center',alignItems:'center',fontWeight:400,fontSize:20,width:35}}>
                        {value}
                        </span>
                        <Avatar style={{backgroundColor:'#ffea29',width:45,height:45}} onClick={()=>handleIncreament()}>+</Avatar>
                
                    </div>
                )
                :
                (
                    <Button onClick={()=>handleClick()} style={{backgroundColor:'#ffea29',width:250}}>Add To Cart</Button>
                )           
               }
            
            </div>
                
)



}