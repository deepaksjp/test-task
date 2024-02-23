import * as React from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

export const SideBar = () => {
  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (flage) => () => {
    setOpen(flage);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {["Dashboard", "About", "Contact", "Logout"].map((text, index) => (
          <ListItem key={text} disablePadding>
            {text === "Logout" ? (
              <ListItemButton>
                <ListItemText primary={text} onClick={handleLogout} />
              </ListItemButton>
            ) : (
              <ListItemButton>
                <ListItemText primary={text} />
              </ListItemButton>
            )}
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>Open drawer</Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
};
