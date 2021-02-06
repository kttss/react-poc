import './Header.css';

import logo from './../../logo.svg';

function Header(props) {
  return (
    <div className="header">
      <img src={logo} alt={props.alt} height={props.size} />
    </div>
  );
}

Header.defaultProps = {
  alt: 'logo react',
  size: '80'
};

export default Header;
