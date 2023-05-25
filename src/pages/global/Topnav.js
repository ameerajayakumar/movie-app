import { Box, IconButton } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect, useRef, useState } from 'react';

const Topnav = () => {
  const [active, setActive] = useState(false);
  const inputRef = useRef(null);

  const handleClickOutside = (event) => {
    if (inputRef.current && !inputRef.current.contains(event.target)) {
      setActive(false);
    }
  };
  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleSearchOpen = () => {
    setActive(true);
  };
  return (
    <Box display="flex" justifyContent="space-between" mt="42px" mx="48px">
      {/* SearchBar */}
      <form className="search">
        <Box
          display="flex"
          backgroundColor={'#1A2536'}
          borderRadius="8px"
          height="55px"
          className={active ? 'search-input active' : 'search-input'}
          ref={inputRef}
        >
          <IconButton type="button" sx={{ p: 1, color: '#D4D7DD' }} onClick={handleSearchOpen}>
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
                color: '#7b828e',
                fontSize: '19px',
                visibility: 'hidden',
                opacity: 0,
                transition: 'visibility 0s linear 0.3s, opacity 0.3s linear',
              },
            }}
            className="input-box"
            placeholder="Title, Movies, Keyword"
          />
          <IconButton type="button" sx={{ p: 1, color: '#D4D7DD' }} className="clear-btn">
            <CloseIcon sx={{ fontSize: 15 }} />
          </IconButton>
        </Box>
      </form>
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
