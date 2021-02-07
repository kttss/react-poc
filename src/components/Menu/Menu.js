import { Link } from 'react-router-dom';

import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Toolbar from '@material-ui/core/Toolbar';

import './Menu.css';

function Menu() {
  const menu = [
    { value: 'Home', root: './' },
    { value: 'Todo', root: './todos' },
    { value: 'Ticket', root: './tickets' }
  ];
  const style = {
    classes: {
      paper: 'paper'
    },
    className: 'paper'
  };
  return (
    <Drawer variant="permanent" className={style.className} classes={style.classes}>
      <Toolbar />
      <div>
        <List>
          {menu.map((menuItem) => (
            <ListItem button key={menuItem.value}>
              <Link to={menuItem.root}>
                <ListItemText primary={menuItem.value} />
              </Link>
            </ListItem>
          ))}
        </List>
        <Divider />
      </div>
    </Drawer>
  );
}
export default Menu;
