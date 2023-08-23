import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <Box display="flex" flexDirection="row" justifyContent="space-around" sx={{color:"blue", font:"bold"}}>

    <Link to="/">Home </Link>
    <Link to="/data">Data Page</Link>
    </Box>
    </>
  )
}

export default Navbar;