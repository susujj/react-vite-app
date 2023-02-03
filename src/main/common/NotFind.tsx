function NotFind() {

  const mystyle = {
    "pageempty": {
      padding: "90px 0 50px",
      textAlign: "center" as "center",
      width: "180px",
      margin: "0 auto",
    },
    "emptyimg": {
      display: "inline-block",
      width: "180px",
      height: "180px",
      marginBottom: "24px",
    }
    ,"emptydesc": {
      marginBottom: "20px",
      fontSize: "14px",
    }  ,
    "uxbtnprimary": {
      color:"#fff",
      backgroundColor:" #0b8ee9",
      borderColor:"#0b8ee9",
    }
  };

    return ( <div style={mystyle.pageempty}>
    <img src="static/images/404.png"
         alt="404"
         style={mystyle.emptyimg}></img>
    <div style={mystyle.emptydesc}>404</div>
   
  </div>);;
  }

export default NotFind