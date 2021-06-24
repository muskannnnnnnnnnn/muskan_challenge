import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
// import {ServerURL} from '../FetchNodeServices'
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import PersonOutlineSharpIcon from '@material-ui/icons/PersonOutlineSharp';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
// import {useDispatch,useSelector} from 'react-redux';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import DeleteOutlined from '@material-ui/icons/DeleteOutlined';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import Grid from '@material-ui/core/Grid';

const useStyles=makeStyles((theme)=>({    

  root:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    //  backgroundColor:'#ecf0f1',
    //  height:window.screen.height*0.8,
}
}))

export default function Header(props) {
  const classes = useStyles();
  
  return (
    
      <AppBar color='inherit'  position="sticky">
        <Toolbar>
         <img  src='/assets/restaurant_48px.svg'></img>

         <div style={{marginLeft:'80px'}}>
          <span style={{display:'flex',fontFamily:'cursive',fontWeight:'bold',fontSize:50}}>Muskan's Restaurant </span>

           

        </div>



          
         
        </Toolbar>
      
    
    
      </AppBar>
  );
}
