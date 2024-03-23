"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import neb from "../nebsite.png";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { Link } from "react-router-dom";
import Library from "./Library";

const returnTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const returnTop2 = () => {
  window.scrollTo({
    top: 0,
  });
};

const drawerWidth = 240;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window?: () => Window;
}

export default function ResponsiveDrawer(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "red" }} />}
            aria-controls="panel1-content"
            id="panel1-header"
            sx={{ backgroundColor: "#070707" }}
          >
            <div className="text-red-600">
              <button>お気に入り</button>
            </div>
          </AccordionSummary>
          <AccordionDetails sx={{ backgroundColor: "#070707" }}>
            <Link to={"/movie"}>
              <div
                className="w-full text-gray-400 hover:text-red-600 cursor-pointer"
                onClick={returnTop2}
              >
                映画
              </div>
            </Link>
          </AccordionDetails>
          <AccordionDetails sx={{ backgroundColor: "#070707" }}>
            <Link to={"/tvshow"}>
              <div
                className="w-full text-gray-400 hover:text-red-600 cursor-pointer"
                onClick={returnTop2}
              >
                ドラマ
              </div>
            </Link>
          </AccordionDetails>
        </Accordion>
      </List>
      <List>
        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "red" }} />}
            aria-controls="panel1-content"
            id="panel1-header"
            sx={{ backgroundColor: "#070707" }}
          >
            <div className="text-red-600">映画日記</div>
          </AccordionSummary>
          <AccordionDetails sx={{ backgroundColor: "#070707" }}>
            <Link to={"/2024"}>
              <div
                className="w-full text-gray-400 hover:text-red-600 cursor-pointer"
                onClick={returnTop2}
              >
                2024
              </div>
            </Link>
          </AccordionDetails>
        </Accordion>
      </List>
      <List></List>
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "#070707",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <div className="flex flex-row w-full">
            <div className="text-red-600 text-4xl font-bold mr-5 min-w-max">
              <Link to={"/"}>
                <button onClick={returnTop2}>
                  <img src={neb} alt="" width={125}></img>
                </button>
              </Link>
            </div>
            {/* <div className="min-w-max items-center justify-center">
              <Scroll to="January" smooth={true} duration={600} offset={-80}>
                <button className="text-red-600 hover:text-netflix border-2 border-red-600 rounded-full px-3 hover:bg-red-600 mr-2">
                  January
                </button>
              </Scroll>
              <Scroll to="February" smooth={true} duration={600} offset={-80}>
                <button className="text-red-600 hover:text-netflix border-2 border-red-600 rounded-full px-3 hover:bg-red-600 mr-2">
                  February
                </button>
              </Scroll>
              <Scroll to="March" smooth={true} duration={600} offset={-80}>
                <button className="text-red-600 hover:text-netflix border-2 border-red-600 rounded-full px-3 hover:bg-red-600 mr-2">
                  March
                </button>
              </Scroll>
            </div> */}
            <div className="flex w-full items-center justify-end text-gray-400">
              <button onClick={returnTop}>
                <div className="hover:text-red-600">
                  <ArrowUpwardIcon fontSize="large" />
                </div>
              </button>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#070707",
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#070707",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Library />
      </Box>
    </Box>
  );
}
