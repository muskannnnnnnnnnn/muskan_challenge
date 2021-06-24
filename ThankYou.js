import React from 'react';
import {makeStyles} from '@material-ui/core/styles';






export default function ThankYou(props){

    return (
        <div style={{display:'flex',justifyContent:'center'}}>
            <div style={{display:'flex',background:'#f3f3f3',justifyContent:'center',width:500,alignItems:'center',marginTop:240}}>
                <div style={{display:'flex',flexDirection:'column',height:150,justifyContent:'center',alignItems:'center'}}>
                    <h3 style={{color:'red'}}>Checkout</h3>
                    <span style={{fontFamily:'cursive'}}>Thankyou For Your Order.</span>
                </div>
            </div>
            </div>
    )

}