import React from "react";
import Backdrop from '@mui/material/Backdrop';
import JoinForm from "./JoinForm";
const BackDrop = (props) => {
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={props.open}
    >
      <JoinForm/>
    </Backdrop>
  );
};

export default BackDrop;