import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Box, Divider, Typography } from '@mui/material';
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
import { CustomDivider } from '../../components/Divider';

const Item = ({ title, icon }) => {
  return (
    <MenuItem
      disabled
      style={{
        color: '#D4D7DD',
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
      maxWidth="20%"
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
      }}
    >
      <ProSidebar className="sidenav">
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <Box mt="19px" mb="20px">
            <Box display="flex" justifyContent="center" alignItems="center">
              <img
                alt="profile-user"
                width="100px"
                height="100px"
                src={`../../assets/profile-pic.png`}
                style={{ cursor: 'default', borderRadius: '50%' }}
              />
            </Box>
            <Box textAlign="center" mt="15px">
              <Typography fontSize="20px" color="#D4D7DD">
                Eric Hoffman
              </Typography>
            </Box>
          </Box>
          <CustomDivider />
          <Box paddingLeft="10%" mb="12px" mt="16px">
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
          </Box>
          <CustomDivider />
          <Box paddingLeft="10%" mt="10px" mb="12px">
            <Item title="Watch Later" icon={<UpdateIcon />} />
            <Item title="Recommended" icon={<FavoriteBorderIcon />} />
          </Box>
          <CustomDivider />
          <Box paddingLeft="10%" mt="10px">
            <Item title="Settings" icon={<SettingsOutlinedIcon />} />
            <Item title="Logout" icon={<LogoutOutlinedIcon />} />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidenav;
