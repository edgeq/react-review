import React, { Component } from "react";
import {
  Avatar,
  Button,
  // CssBaseLine,
  Paper,
  FormControl,
  FormControlLabel,
  Checkbox,
  Input,
  InputLabel,
  Typography,
  MenuItem,
  Select,
  withStyles
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
//contexts get consumed by components
import { LanguageContext } from "./contexts/LanguageContext";

import styles from "./styles/FormStyles";

const words = {
  english: {
    email: "Email",
    password: "Password",
    signIn: "Sign In",
    remember: "Remember Me"
  },
  french: {
    email: "Adresse Électronique",
    password: "PassMot de Passe",
    signIn: "Se Connecter",
    remember: "Souviens-toi De Moi"
  },
  spanish: {
    email: "Correo Electrónico",
    password: "Contraseña",
    signIn: "Registrarse",
    remember: "Recuérdame"
  }
};

class Form extends Component {
  static contextType = LanguageContext;
  render() {
    const { classes } = this.props;
    const { language, changeLanguage } = this.context;
    const { email, password, signIn, remember } = words[language];
    return (
      <main className={classes.main}>
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant="h5">{signIn}</Typography>
          <Select value={language} onChange={changeLanguage}>
            <MenuItem value="english">English</MenuItem>
            <MenuItem value="spanish">Spanish</MenuItem>
            <MenuItem value="french">French</MenuItem>
          </Select>
          <form className={classes.form}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">{email}</InputLabel>
              <Input id="email" name="email" autoFocus />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">{password}</InputLabel>
              <Input id="password" name="password" autoFocus />
            </FormControl>
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label={remember}
            />
            <Button
              variant="contained"
              type="submit"
              fullWidth
              color="primary"
              className={classes.submit}
            >
              {signIn}
            </Button>
          </form>
        </Paper>
      </main>
    );
  }
}

export default withStyles(styles)(Form);
