import * as React from 'react';
import { AppBar, UserMenu } from 'react-admin';
import { Link } from 'react-router-dom';
import {
  Box,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Typography,
  useMediaQuery,
  type Theme
} from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';

// import Logo from './Logo';
/* eslint-disable react/display-name */
const ConfigurationMenu = React.forwardRef((props, ref) => {
  return (
    <MenuItem
      component={Link}
      // @ts-expect-error  ref is not overloaded
      ref={ref}
      {...props}
      to="/configuration"
    >
      <ListItemIcon>
        <SettingsIcon />
      </ListItemIcon>
      <ListItemText>Configuration</ListItemText>
    </MenuItem>
  );
});
const CustomUserMenu = (): JSX.Element => (
  <UserMenu>
    <ConfigurationMenu />
  </UserMenu>
);

const CustomAppBar = (props: any): JSX.Element => {
  const isLargeEnough = useMediaQuery<Theme>((theme) =>
    theme.breakpoints.up('sm')
  );
  return (
    <AppBar
      {...props}
      color="secondary"
      elevation={1}
      userMenu={<CustomUserMenu />}
    >
      <Typography
        variant="h6"
        color="inherit"
        sx={{
          flex: 1,
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          overflow: 'hidden'
        }}
        id="react-admin-title"
      />
      {/* {isLargeEnough && <Logo />} */}
      {isLargeEnough && <Box component="span" sx={{ flex: 1 }} />}
    </AppBar>
  );
};

export default CustomAppBar;
