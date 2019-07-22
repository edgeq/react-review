import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

class PaletteMetaForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      newPaletteName: ""
    };
  }

  componentDidMount() {
    ValidatorForm.addValidationRule("uniquePaletteName", value =>
      this.props.palettes.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      )
    );
  }

  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {

    this.setState({ open: false });
  };

  render() {
    const { newPaletteName, open } = this.state;
    const {hideForm, handleSubmit} = this.props;
    return (
      // <div>

        <Dialog
          open={open}
          onClose={hideForm}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Name Palette</DialogTitle>
          <ValidatorForm
            onSubmit={() => handleSubmit(newPaletteName)}
          >
            <DialogContent>
              <DialogContentText>
                Enter a name for your new palette. Make sure it's unique
              </DialogContentText>
              <TextValidator
                label="PaletteName"
                value={newPaletteName}
                name="newPaletteName"
                onChange={this.handleChange}
                fullWidth
                margin="normal"
                validators={["required", "uniquePaletteName"]}
                errorMessages={[
                  "a palette name is required",
                  "palette name already exists"
                ]}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={hideForm} color="primary">
                Cancel
              </Button>
              <Button variant="contained" color="primary" type="submit">
                Save Palette
              </Button>
            </DialogActions>
          </ValidatorForm>
        </Dialog>
      // </div>
    );
  }
}

export default PaletteMetaForm;
