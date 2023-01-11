import styles from "./styles.module.scss";
import repositoryImg from "/assets/repository.svg";
import githubImg from "/assets/github.svg";
import linkedinImg from "/assets/linkedin.svg";
import portfolioImg from "/assets/portfolio.svg";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import Drawer from "@mui/material/Drawer";
import { cloneElement, useState } from "react";

interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

export function Header() {
  const drawerWidth = 240;
  const [mobileOpen, setMobileOpen] = useState(false);


  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <AppBar
      sx={{
        bgcolor: "transparent",
        backdropFilter: "blur(30px)",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Toolbar className={styles.logo}>
        <a href="/">
          Rick<span>Api.</span>{" "}
          <img
            className={styles.portal}
            src="https://c.tenor.com/BgR83Df82t0AAAAi/portal-rick-and-morty.gif"
            alt="Rick and Morty portal"
          />
        </a>
      </Toolbar>

      <Box
        className={styles.links}
        sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
      >
        <a
          href="https://github.com/jravolio/React-Api-Test"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={repositoryImg} alt="Repositório" />
        </a>
        <a
          href="https://devjravolio.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={portfolioImg} alt="Portifólio" />
        </a>
        <a
          href="https://www.linkedin.com/in/julio-cesar-junior-0042231b2/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedinImg} alt="Linkedin" />
        </a>
        <a
          href="https://github.com/jravolio"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={githubImg} alt="Github" />
        </a>
      </Box>
      <Box component="nav">
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { md: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          anchor="right"
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { md: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#141414",
              color: "white",
            },
          }}
        >
          <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
            <Typography variant="h6" sx={{ my: 2 }}>
              RickApi
            </Typography>
            <Divider sx={{ backgroundColor: "white" }} />
            <List>
              <ListItem
                disablePadding
                sx={{
                  transition: "0.3s",
                  "&:hover": {
                    backgroundColor: "#3a3a3a",
                  },
                }}
              >
                <ListItemButton
                  component="a"
                  href="https://github.com/jravolio/React-Api-Test"
                  target="_blank"
                  sx={{ textAlign: "center" }}
                >
                  <ListItemText primary={"Source code"} />
                </ListItemButton>
              </ListItem>

              <ListItem
                disablePadding
                sx={{
                  transition: "0.3s",
                  "&:hover": {
                    backgroundColor: "#3a3a3a",
                  },
                }}
              >
                <ListItemButton
                  component="a"
                  href="https://devjravolio.com/"
                  target="_blank"
                  sx={{ textAlign: "center" }}
                >
                  <ListItemText primary={"Portfolio"} />
                </ListItemButton>
              </ListItem>

              <ListItem
                disablePadding
                sx={{
                  transition: "0.3s",
                  "&:hover": {
                    backgroundColor: "#3a3a3a",
                  },
                }}
              >
                <ListItemButton
                  component="a"
                  href="https://www.linkedin.com/in/julio-cesar-junior-0042231b2/?locale=en_US"
                  target="_blank"
                  sx={{ textAlign: "center" }}
                >
                  <ListItemText primary={"Linkedin"} />
                </ListItemButton>
              </ListItem>

              <ListItem
                disablePadding
                sx={{
                  transition: "0.3s",
                  "&:hover": {
                    backgroundColor: "#3a3a3a",
                  },
                }}
              >
                <ListItemButton
                  component="a"
                  href="https://github.com/jravolio"
                  target="_blank"
                  sx={{ textAlign: "center" }}
                >
                  <ListItemText primary={"Github"} />
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Drawer>
      </Box>
    </AppBar>
  );
}
