import React from "react";
import {useSelector,useDispatch} from "react-redux"
import {useNavigate} from "react-router-dom"
import { Box } from "@mui/material";
import {SearchSharpIcon,LocalMallSharpIcon,Person2SharpIcon,} from '@mui/icons-material';

const Navbar = () => {

  const Navigate=useNavigate()
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        height: "60px",
        position:"fixed",
        backgroundColor:"#c8d6e5",
        color:"#1e272e",
        top:0,
        left:0,
        zIndex:1
      }}
    >
      <Box
        sx={{
          display:"flex",
          justifyContent: "space-between",
          width:"80%",
          margin:"auto"
        
        }}
      >
      <Box onClick={()=>Navigate("/")}
      sx={{
      "&:hover":{cursor:"pointer"}
      }}
      >
      MyKarts
      </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
