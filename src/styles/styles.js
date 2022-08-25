import { makeStyles } from "@mui/styles";

const styles = (theme) => {
  return {
    heroBox: {
      width: "100%",
      display: "flex",
      minHeight: "600px",
      alignItems: "center",
      justifyContent: "center",
    },
    gridContainer: {
      display: "flex",
      alignItems: "center",
      maxWidth: "1300px",
      padding: "50px",
    },

    title: {
      paddingBottom: "15px",
    },
    subtitle: {
      opacity: "0.4",
      paddingBottom: "30px",
    },
    largeImage: {
      width: "100%",
    },
    sectionGridContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      minHeight: "500px",
    },
    sectionGridItem: {
      backgroundColor: "#f2f0f1",
      textAlign: "center",
      padding: "30px",
      width: "200px",
      borderRadius: "10px",
      margin: "10px !important",
    },
    inputField: {
      marginBottom: "20px !important",
    },
    textArea: {
      width: "100%",
      marginBottom: "20px",
      fontSize: "16px",
      padding: "10px",
    },
  };
};

const useStyles = makeStyles(styles);
export default useStyles;
