import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Box, Typography } from '@mui/material';
import 'react-pro-sidebar/dist/css/styles.css';
import SearchIcon from '@mui/icons-material/Search';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import DesktopWindowsOutlinedIcon from '@mui/icons-material/DesktopWindowsOutlined';
import ListIcon from '@mui/icons-material/List';
import UpdateIcon from '@mui/icons-material/Update';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

const Item = ({ title, icon, selected }) => {
  return (
    <MenuItem
      style={{
        color: '#D4D7DD',
        cursor: 'none',
      }}
      icon={icon}
    >
      <Typography>{title}</Typography>
    </MenuItem>
  );
};

const Sidenav = () => {
  return (
    <Box
      sx={{
        '& .pro-sidebar-inner': {
          background: `#1F2A3C !important`,
        },
        '& .pro-icon-wrapper': {
          backgroundColor: 'transparent !important',
        },
        '& .pro-inner-item': {
          padding: '5px 35px 5px 20px !important',
        },
        '& .pro-inner-item:hover': {
          color: '#00E0FF  !important',
        },
      }}
    >
      <ProSidebar>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <Box mb="25px">
            <Box display="flex" justifyContent="center" alignItems="center">
              <img
                alt="profile-user"
                width="100px"
                height="100px"
                src={`../../assets/profile-pic.png`}
                style={{ cursor: 'pointer', borderRadius: '50%' }}
              />
            </Box>
            <Box textAlign="center">
              <Typography variant="h5" color="green">
                Eric Hoffman
              </Typography>
            </Box>
          </Box>
          <Box paddingLeft="10%">
            <MenuItem
              active="true"
              style={{
                color: '#00E0FF',
              }}
              icon={<SearchIcon />}
            >
              <Typography>Discover</Typography>
            </MenuItem>
            <Item title="Playlist" icon={<PlaylistPlayIcon />} />
            <Item title="Movie" icon={<LiveTvIcon />} />
            <Item title="TV Shows" icon={<DesktopWindowsOutlinedIcon />} />
            <Item title="My List" icon={<ListIcon />} />
            <Item title="Watch Later" icon={<UpdateIcon />} />
            <Item title="Recommended" icon={<FavoriteBorderIcon />} />
            <Item title="Settings" icon={<SettingsOutlinedIcon />} />
            <Item title="Logout" icon={<LogoutOutlinedIcon />} />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidenav;
