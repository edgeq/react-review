export default {
  Navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: "6vh",
  },

  selectContainer: {
    marginRight: '1rem'
  },

  logo: {
    marginRight: '15',
    padding: '0 13px',
    fontSize: '22',
    backgroundColor: '#eceff1',
    fontFamily: "'Roboto', sans-serif'",
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    "& a": {
      textDecoration: 'none',
      color: 'black',
    }
  },
  slider: {
    width: '340px',
    margin: '0 10px',
    display: 'inline-block',
    "& .rc-slider-track": {
    backgroundColor: 'transparent'
    },
    "& .rc-slider-rail": {
      height: "8px"
    },
    "& .rc-slider-handle, .rc-slider-handle:active .rc-slider-handle:focus, .rc-slider-handle:hover": {
      backgroundColor: 'green',
      outline: 'none',
      border: '2px solid green',
      boxShadow: 'none',
      width: "13",
      height: "13",
      marginLeft: '-7px',
      marginTop: '-3px',
    }
  },
  selectContatiner: {
    marginLeft: "auto",
    marginRight: "1rem"
  }
}