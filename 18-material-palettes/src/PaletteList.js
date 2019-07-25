import React, { Component } from "react";
import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import blue from "@material-ui/core/colors/blue";
import red from "@material-ui/core/colors/red";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/PaletteListStyles";

class PaletteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openDeleteDialog: false,
      deleteId: ""
    };
    this.openDialog = this.openDialog.bind(this);
    this.closeDialog = this.closeDialog.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  openDialog(id) {
    this.setState({ openDeleteDialog: true, deleteId: id });
  }
  closeDialog() {
    this.setState({ openDeleteDialog: false, deleteId: "" });
  }
  handleDelete(deleteId) {
    this.props.deletePalette(deleteId);
    this.closeDialog();
  }
  goToPalette(id) {
    // history.push comes from App.js and is used to update the current url.
    this.props.history.push(`/palette/${id}`);
  }
  render() {
    const { classes, palettes } = this.props;
    const { openDeleteDialog, deleteId } = this.state;

    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1>Material Palettes</h1>
            <Link to="/palette/new">Create new palette</Link>
          </nav>

          <TransitionGroup className={classes.palettes}>
            {palettes.map(palette => (
              // Each MiniPalette should link to it's corresponding palette
              // <Link to={`palette/${palette.id}`}> - we don't want to do this because of inherited <a> styling.
              // Instead, we want to use the history routeProp to dynamically update (push to) the current URL on each MiniPalette
              <CSSTransition key={palette.id} classNames="fade" timeout={500}>
                <MiniPalette
                  {...palette}
                  paletteLink={() => this.goToPalette(palette.id)}
                  // deletePalette={deletePalette}
                  openDialog={this.openDialog}
                  key={palette.id}
                  id={palette.id}
                />
              </CSSTransition>
              // </Link>
            ))}
          </TransitionGroup>
        </div>
        <Dialog
          open={openDeleteDialog}
          aria-labelledby="delete-dialog-title"
          onClose={this.closeDialog}
        >
          <DialogTitle id="delete-dialog-title">Delete palette?</DialogTitle>
          <List>
            <ListItem button onClick={() => this.handleDelete(deleteId)}>
              <ListItemAvatar>
                <Avatar
                  style={{ backgroundColor: blue[100], color: blue[600] }}
                >
                  <CheckIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText>Delete</ListItemText>
            </ListItem>
            <ListItem button onClick={this.closeDialog}>
              <ListItemAvatar>
                <Avatar style={{ backgroundColor: red[100], color: red[600] }}>
                  <CloseIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText>Cancel</ListItemText>
            </ListItem>
          </List>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);
