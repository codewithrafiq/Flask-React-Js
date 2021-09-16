import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const history = useHistory();
  return (
    <div className={classes.root}>
      <AppBar position="sticky">
        <Toolbar>
          <Typography style={{ cursor:"pointer" }} onClick={(e)=>history.push('/')} variant="h6" className={classes.title}>
            Todo App
          </Typography>
          {
              localStorage.getItem('token') ?
              <>
              <Button color="inherit" onClick={() => {
                localStorage.removeItem('token');
                window.location.reload();
                window.location.href = '/';
              }
              }>Logout</Button>
              </>
              :
              <>
              </>
          }
        </Toolbar>
      </AppBar>
    </div>
  );
}
