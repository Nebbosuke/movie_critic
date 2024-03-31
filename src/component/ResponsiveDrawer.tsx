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
import Movie from "./Movie";
import Tvshow from "./Tvshow";
import Library from "./diary/2024";
import Top from "./Top";

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
  const [page, setPage] = React.useState(0);

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

  const makePage = (num: number) => {
    setPage(num);
    returnTop2();
    setMobileOpen(false);
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
              <button>My Favorites</button>
            </div>
          </AccordionSummary>
          <AccordionDetails sx={{ backgroundColor: "#070707" }}>
            <div
              className="w-full text-gray-400 hover:text-red-600 cursor-pointer"
              onClick={() => makePage(1)}
            >
              Movie
            </div>
          </AccordionDetails>
          <AccordionDetails sx={{ backgroundColor: "#070707" }}>
            <div
              className="w-full text-gray-400 hover:text-red-600 cursor-pointer"
              onClick={() => makePage(2)}
            >
              TV Show
            </div>
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
            <div className="text-red-600">Movie Diary</div>
          </AccordionSummary>
          <AccordionDetails sx={{ backgroundColor: "#070707" }}>
            <div
              className="w-full text-gray-400 hover:text-red-600 cursor-pointer"
              onClick={() => makePage(3)}
            >
              2024
            </div>
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
            <div className="text-red-600 text-4xl font-bold">
              <button onClick={() => makePage(0)}>
                <img src={neb} alt="" width={125}></img>
              </button>
            </div>
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
        {page === 0 && (
          <Top
            movie={() => makePage(1)}
            tv={() => makePage(2)}
            d24={() => makePage(3)}
          />
        )}
        {page === 1 && <Movie />}
        {page === 2 && <Tvshow />}
        {page === 3 && <Library />}
      </Box>
    </Box>
  );
}
