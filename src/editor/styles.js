const styles = theme => ({
    root: {
      backgroundColor: theme.palette.background.paper,
      height: 'calc(100% - 35px)',
      position: 'absolute',
      left: '0',
      width: '300px',
      boxShadow: '0px 0px 2px black'
    },
    titleInput: {
      height: '50px',
      boxSizing: 'border-box',
      border: 'none',
      borderTopRightRadius: "0.5em",
      borderTopLeftRadius: "0.5em",
      padding: '5px',
      fontSize: '24px',
      width: 'calc(100% - 300px)',
      backgroundColor: '#1e90ff',
      color: 'white',
      paddingLeft: '50px'
    },
    timeInput: {
      height: '25px',
      boxSizing: 'border-box',
      border: 'none',
      padding: '5px',
      fontSize: '15px',
      width: 'calc(100% - 300px)',
      backgroundColor: '#1e90ff',
      color: 'white',
      paddingLeft: '50px',
      paddingRight: '20px',
      textAlign: 'right'
    },
    editIcon: {
      position: 'absolute',
      left: '310px',
      top: '12px',
      marginTop: "1%",
      color: 'white',
      width: '10',
      height: '10'
    },
    editorContainer: {
      height: '100%',
      boxSizing: 'border-box',
      paddingLeft: "1%",
      paddingRight: "1px",
      paddingTop: "1%",
    },
  });
  
  export default styles;