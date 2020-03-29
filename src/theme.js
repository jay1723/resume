// import Apple from "@material-ui/icons/Apple"
import React from "react"

// Images
import Apple from "./images/apple.png"
import MicrosoftIcon from "./images/msft.png"
import UNC from "./images/unc.png"
import c1 from "./images/c1.png"
import sas from "./images/sas.png"
import dzone from "./images/dzone2.svg"
// Components
import Icon from "./components/Icon"
 
const theme = {
    apple: {
      style: {
        background: '#A3AAAE',
        circleColor: "#F9F6EF",
      },
      icon: <Icon src={Apple} />
    },
    microsoft: {
        style:{
            background: "#00A4EF",
            circleColor: "#737373"
        },
        // icon:<img src={MicrosoftIcon} width={"24px"} height={"24px"} align={"bottom"}/>
        // icon: <Icon src={MicrosoftIcon} />
        // icon: <MicrosoftIcon />
        icon: <Icon src={MicrosoftIcon} />
    }, 
    unc: {
        style:{
            background: "#13294B",
            circleColor: "#7BAFD4"
        },
        icon: <Icon src={UNC} />
    }, 
    capone: {
        style: {
            background: "#D22E1E",
            circleColor: "#004879"
        },
        icon: <Icon src={c1} />
    },
    sas: {
        style: {
            background: "#013459",
            circleColor: "#F9F6EF"
        },
        icon: <Icon src={sas} />
    },
    dzone: {
        style: {
            background: "#273557",
            circleColor: "#F9F6EF"
        },
        icon: <Icon src={dzone} />
    }

  };

  
  export default theme;