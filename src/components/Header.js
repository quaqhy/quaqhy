// import React from "react";

// function Header(props) {
//   function handleClickMenu(e) {
//     console.log(e.target.classList.toggle("active"));

//     document.querySelector(".nav-dot").classList.toggle("active");
//   }

//   function handleClick(e) {
//     document.querySelector(".menu-dot").classList.toggle("active");

//     document.querySelector(".nav-dot").classList.toggle("active");
//   }
//   return (
//     // header
//     <header>
//       <div className="menu-dot" onClick={handleClickMenu}></div>
//       <ul className="nav-dot">
//         <li className="nav-item">
//           <a href="#project" onClick={handleClick}>
//             projects
//           </a>
//         </li>
//         <li className="nav-item">
//           <a href="#contact" onClick={handleClick}>
//             contact
//           </a>
//         </li>
//       </ul>
//     </header>
//   );
// }

// export default Header;

import React from "react";
import {
  Button,
  Container,
  AppBar,
  IconButton,
  Typography,
  Toolbar,
  Box,
} from "@material-ui/core";

import { MenuIcon } from "@mui/icons-material";

function Header(props) {
  return (
    <Container fixed>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            Photos
          </Typography>
        </Toolbar>
      </AppBar>
    </Container>
  );
}

export default Header;
