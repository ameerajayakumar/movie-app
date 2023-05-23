import { Box, IconButton } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CloseIcon from '@mui/icons-material/Close';

const Topnav = () => {
  return (
    <Box display="flex" justifyContent="space-between" mt="42px" mx="48px">
      {/* SearchBar */}
      <Box display="flex" backgroundColor={'#1A2536'} borderRadius="8px" height="55px" width="567px">
        <IconButton type="button" sx={{ p: 1, color: '#D4D7DD' }}>
          <SearchIcon sx={{ fontSize: 23 }} />
        </IconButton>
        <InputBase
          sx={{
            flex: 1,
            color: '#fff',
            fontSize: '21px',
            fontWeight: '400',
            lineHeight: '44px',
            '& ::placeholder': {
              color: '#7B828E',
              fontSize: '19px',
            },
          }}
          placeholder="Title, Movies, Keyword"
        />
        <IconButton type="button" sx={{ p: 1, color: '#D4D7DD' }}>
          <CloseIcon sx={{ fontSize: 15 }} />
        </IconButton>
      </Box>
      {/* Icons */}
      <Box display="flex">
        <IconButton type="button" sx={{ p: 1, color: '#D4D7DD' }}>
          <LightModeOutlinedIcon />
        </IconButton>
        <IconButton type="button" sx={{ p: 1, color: '#D4D7DD' }}>
          <MoreVertIcon />
        </IconButton>
      </Box>
    </Box>
  );
};
export default Topnav;
