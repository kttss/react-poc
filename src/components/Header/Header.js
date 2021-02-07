import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import './Header.css';

import logo from './../../logo.svg';

function Header(props) {
  return (
    <div>
      <AppBar position="fixed" className="top">
        <Toolbar>
          <img src={logo} alt={props.alt} height={props.size} />
          <Typography variant="h6" noWrap>
            react apps
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Header.defaultProps = {
  alt: 'logo react',
  size: '50'
};

export default Header;
