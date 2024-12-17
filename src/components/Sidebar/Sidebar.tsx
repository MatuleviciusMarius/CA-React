import { Drawer, List, ListItem, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";
// import { Drawer, List, ListItem, ListItemText, makeStyles } from '@material-ui/core';

const Sidebar = () => {
  return (
    <Drawer variant="permanent" anchor="left">
      <div />
      <List>
        <ListItem button component={Link} to="/settings/change-password">
          <ListItemText primary="Change Password" />
        </ListItem>
        <ListItem button component={Link} to="/settings/profile">
          <ListItemText primary="Profile" />
        </ListItem>
        <ListItem button component={Link} to="/settings/notifications">
          <ListItemText primary="Notifications" />
        </ListItem>
        {/* Add more buttons as needed */}
      </List>
    </Drawer>
  );
};

export default Sidebar;
