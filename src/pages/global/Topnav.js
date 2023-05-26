import { Box, IconButton } from '@mui/material';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Search from './Search';
import useMediaQueries from '../../hooks/useMediaQueries';

const Topnav = (props) => {
  const isMobile = useMediaQueries('mobile');
  return (
    <Box display="flex" justifyContent="space-between" mt="42px" mx="3rem">
      {/* SearchBar */}
      <Search performSearch={props.performSearch} movieList={props.movieList} setMovies={props.setMovies} />
      {/* Theme Switcher & Options */}
      {!isMobile && (
        <Box display="flex">
          <IconButton type="button" sx={{ p: 1, color: '#D4D7DD' }}>
            <LightModeOutlinedIcon />
          </IconButton>
          <IconButton type="button" sx={{ p: 1, color: '#D4D7DD' }}>
            <MoreVertIcon />
          </IconButton>
        </Box>
      )}
    </Box>
  );
};
export default Topnav;
