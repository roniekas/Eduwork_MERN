import { Box} from "@mui/material";
import Stack from "@mui/material/Stack";
import React from "react";
import Feed from "./Feed";
import Kanan from "./Kanan";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

class Tugas5 extends React.Component{
  state={
    nilai: ''
  }

  handleInputApp = (e) => {
    console.log('Langsung dari event dari App : ' + e);
    this.setState({
      nilai: e
    }, () => console.log('Langsung dari event dari App STATE : ' + this.state.nilai));
    

}
  render(){
  return (
      <Box>
        <Navbar handleinput={this.handleInputApp}/>
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar/>
          <Feed inputan={this.state.nilai}/>
          <Kanan />
        </Stack>
      </Box>
    );
  }
}
export default Tugas5;
