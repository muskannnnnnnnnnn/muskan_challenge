import React,{useEffect, useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
const useStyles=makeStyles((theme)=>({    

    root1:{
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      //  backgroundColor:'#ecf0f1',
      //  height:window.screen.height*0.8,
  }, root: {
    width: 340,
    margin:10
  },
  media: {
    height: 140,
  }
  }))

  const foodList=[
    {
        "name": "Hamburger",
        "price": "200",
        "image": "burger.jpeg"
    },
    {
        "name": "Fries",
        "price": "100",
        "image": "fries.jpeg"
    },
    {
        "name": "Coke",
        "price": "50",
        "image": "coke.jpeg"
    },
    {
        "name": "Pepsi",
        "price": "50",
        "image": "pepsi.jpeg"
    }
]


export default function FoodItems(props){

   

    const classes=useStyles();
    const [hamQty,sethamQty]=useState(0);
    const [pepQty,setpepQty]=useState(0);
    const [frQty,setfrQty]=useState(0);
    const [ckQty,setckQty]=useState(0);



const handlePlus=(id)=>{
    if(id==0){
        var c=hamQty
        sethamQty(c+1)
    }
    if(id==1){
        var c=frQty
        setfrQty(c+1)
    }
    if(id==2){
        var c=ckQty
        setckQty(c+1)
    }
    if(id==3){
        var c=pepQty
        setpepQty(c+1)
    }
}
const handleMinus=(id)=>{
    if(id==0){
        if(hamQty==0){

        }
        else{
            var c=hamQty
            sethamQty(c-1)
        }
        
    }    
    if(id==1){
        if(frQty==0){

        }
        else{
            var c=frQty
        setfrQty(c-1)
        }
       
    }
    if(id==2){
        if(ckQty==0){

        }
        else{
            var c=ckQty
        setckQty(c-1)
        }
       
    }
    if(id==3){
        if(pepQty==0){

        }
        else{
            var c=pepQty
            setpepQty(c-1)
        }
       
    }
   
}
    const FoodItems=()=>{
        return( foodList.map((item)=>{
            return (
                <Card className={classes.root}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={`assets/${item.image}`}
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {item.name}
                      </Typography>


                     
                       
{item.name=="Hamburger"?(
        <Typography variant="body2" color="textSecondary" component="p">
          <span style={{fontWeight:'bold',fontSize:15}}>Price:  {item.price}</span>  
        </Typography>):(<></>)}

        {item.name=="Pepsi"?(
        <Typography variant="body2" color="textSecondary" component="p">
          <span style={{fontWeight:'bold',fontSize:15}}>Price:  {item.price}</span>  
        </Typography>):(<></>)}

        {item.name=="Coke"?(
        <Typography variant="body2" color="textSecondary" component="p">
          <span style={{fontWeight:'bold',fontSize:15}}>Price:  {item.price}</span>  
        </Typography>):(<></>)}

        {item.name=="Fries"?(
        <Typography variant="body2" color="textSecondary" component="p">
          <span style={{fontWeight:'bold',fontSize:15}}>Price:  {item.price}</span>  
        </Typography>):(<></>)}
        {item.name=="Hamburger" &&hamQty!=0?(
                            <Typography variant="body2" color="textSecondary" component="p">
                             <span style={{fontWeight:'bold',fontSize:15}}>Quantity:  {hamQty}</span>  
                            </Typography>
                        ):<></>}
                        {item.name=="Pepsi" &&pepQty!=0?(
                            <Typography variant="body2" color="textSecondary" component="p">
                             <span style={{fontWeight:'bold',fontSize:15}}>Quantity:  {pepQty}</span>  
                            </Typography>
                        ):<></>}
                        {item.name=="Fries" &&frQty!=0?(
                            <Typography variant="body2" color="textSecondary" component="p">
                             <span style={{fontWeight:'bold',fontSize:15}}>Quantity:  {frQty}</span>  
                            </Typography>
                        ):<></>}
                        {item.name=="Coke" &&ckQty!=0?(
                            <Typography variant="body2" color="textSecondary" component="p">
                             <span style={{fontWeight:'bold',fontSize:15}}>Quantity:  {ckQty}</span>  
                            </Typography>
                        ):<></>}
                    {item.name=="Hamburger"?(
                        <Typography variant="body2" color="textSecondary" component="p">
                        {!hamQty?(
                       <></>
                         ):(<span style={{fontWeight:'bold',fontSize:15}}>Cost:   {hamQty*item.price}</span>  )}
                         </Typography>  
                    ):<></>}

{item.name=="Pepsi"?(
                        <Typography variant="body2" color="textSecondary" component="p">
                        {!pepQty?(
                        <></>
                         ):(<span style={{fontWeight:'bold',fontSize:15}}>Cost:   {pepQty*item.price}</span>  )}
                         </Typography>  
                    ):<></>}
                    {item.name=="Coke"?(
                        <Typography variant="body2" color="textSecondary" component="p">
                        {!ckQty?(
                       <></>  
                         ):(<span style={{fontWeight:'bold',fontSize:15}}>Cost:   {ckQty*item.price}</span>  )}
                         </Typography>  
                    ):<></>}
                    {item.name=="Fries"?(
                        <Typography variant="body2" color="textSecondary" component="p">
                        {!frQty?(
                       <></>  
                         ):(<span style={{fontWeight:'bold',fontSize:15}}>Cost:   {frQty*item.price}</span>  )}
                         </Typography>  
                    ):<></>}

                                         
                    </CardContent>
                  </CardActionArea>
                 
                    {item.name=="Hamburger"?(
                    <CardActions>
                    <Avatar style={{backgroundColor:'#ffea29',width:55,height:55,cursor:'pointer'}} onClick={()=>handlePlus(0)}>+</Avatar>
                    <Avatar style={{backgroundColor:'#ffea29',width:55,height:55,cursor:'pointer'}} onClick={()=>handleMinus(0)}>-</Avatar>
                    </CardActions>):<></>}

                    {item.name=="Pepsi"?(
                    <CardActions>
                    <Avatar style={{backgroundColor:'#ffea29',width:55,height:55,cursor:'pointer'}} onClick={()=>handlePlus(3)}>+</Avatar>
                    <Avatar style={{backgroundColor:'#ffea29',width:55,height:55,cursor:'pointer'}} onClick={()=>handleMinus(3)}>-</Avatar>
                    </CardActions>):<></>}

                    {item.name=="Coke"?(
                    <CardActions>
                    <Avatar style={{backgroundColor:'#ffea29',width:55,height:55,cursor:'pointer'}} onClick={()=>handlePlus(2)}>+</Avatar>
                    <Avatar style={{backgroundColor:'#ffea29',width:55,height:55,cursor:'pointer'}} onClick={()=>handleMinus(2)}>-</Avatar>
                    </CardActions>):<></>}

                    {item.name=="Fries"?(
                    <CardActions>
                    <Avatar style={{backgroundColor:'#ffea29',width:55,height:55,cursor:'pointer'}} onClick={()=>handlePlus(1)}>+</Avatar>
                    <Avatar style={{backgroundColor:'#ffea29',width:55,height:55,cursor:'pointer'}} onClick={()=>handleMinus(1)}>-</Avatar>
                    </CardActions>):<></>}

                </Card>
              )
        })
        
          )
    }

    return(
        <div className={classes.root1}>
            <div style={{width:'100%'}}>
                     <Header history={props.history}/>
                     
                     <div style={{display:'flex',justifyContent:'center',backgroundColor:'#f3f3f3',alignItems:'center',margin:15,flexDirection:'row',flexWrap:'wrap'}}>
                       {FoodItems()}
                     </div>
                     
                     <div style={{display:'flex',justifyContent:'center'}}>
                     <Button variant="contained" color="secondary" onClick={()=>props.history.push({pathname:'/thankyou'})} style={{width:200}}>Confirm Order <ArrowForwardIosIcon /> </Button>
                     </div>
                     
                     <Footer history={props.history}/>
             </div>
        </div>
    )
}