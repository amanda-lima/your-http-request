
import { keyframes, styled } from "..";

function pixelToRem(...values: number[]) {
    return values
      .reduce((acc, current) => (acc += current / 16 + `rem `), "")
      .trim();
  }

  export const Container = styled("div", {
    display: "flex",
    flexDirection: "column",
    rowGap: pixelToRem(50),
    background: "#F0F0F3",
    padding: pixelToRem(47, 92, 0),
    minHeight: "100vh",
    alignItems: "center",

  });

  export const Button = styled("button", {
    backgroundColor: "white",
    border: "none",
    borderRadius: "10px",
    width: pixelToRem(100),
    height: pixelToRem(41),
    fontFamily: "Poppins, sans-serif",
    fontSize: pixelToRem(13),
    fontWeight: "600",
    color: "$gray100",
    cursor: "pointer",

    "@desktopLG": {
      marginTop: pixelToRem(20),
      width: pixelToRem(350),
    },
  
    "@mobileLG": {
      backgroundColor: "$gray400",
      border: "solid 0px",
      borderLeft: "0",
      height: pixelToRem(40),
      padding: pixelToRem(15, 10),
      width: "auto",
      display: "flex",
      alignItems: "center",
      overflow: "hidden",
      marginTop: 0,
    },
  });

export const Input = styled("input", {
    borderRadius: "50%",
    width: "300px",
    height: "300px",
    background: "#F0F0F3",
    outline: "none",
    textAlign: "center",
    display: "flex",
    boxShadow: "-10px -10px 30px 0px #FFFFFF, 10px 10px 30px 0 #AEAEC0",
    border: "solid 0px",
    fontSize: pixelToRem(20),

    "&::placeholder": {
      paddingLeft: "7px",
      opacity: 0.5,
    },

    "@desktopLG": {
      border: "solid 0px",

    boxShadow: "-10px -10px 0px #FFFFFF, 10px 10px 30px 0 #AEAEC0 40%",
      borderRadius: "50%",
    },
  
    "@mobileLG": {
        border: "solid 0px",
      display: "inline-block",
      width: "100%",
      height: pixelToRem(40),

    boxShadow: "-10px -10px 0px #FFFFFF, 10px 10px 30px 0 #AEAEC0 40%",
      paddingLeft: pixelToRem(36),
      borderRight: "0",
      borderRadius: "5px 0 0 5px",
    },
  });

  export const SearchResult = styled("section", {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F0F0F3",
    maxWidth: pixelToRem(494),
    maxHeight: pixelToRem(189),
    borderRadius: pixelToRem(5),
    marginTop: pixelToRem(70),
    pa: pixelToRem(30),
    border: "solid 0px",
    boxShadow: "inset -10px -10px 10px rgba(255, 255, 255, 0.7), inset 10px 10px 10px rgba(174, 174, 192, 0.7)",

    "@desktopLG": {
      width: "100%",
      maxWidth: pixelToRem(400),
    },
  
    "@mobileLG": {
      marginTop: pixelToRem(35),
      maxWidth: pixelToRem(300),
    },
  });
  
  export const TextSearchResult = styled("p", {
    fontSize: pixelToRem(14),
    fontFamily: "Roboto, sans-serif",
    color: "$gray100",
  });

  export const Form = styled("form", {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    rowGap: pixelToRem(50),
  
    "@desktopLG": {
      flexDirection: "column",
      alignItems: "center",
    },
  
    "@mobileLG": {
      flexDirection: "row",
      alignItems: "initial",
    },
  });