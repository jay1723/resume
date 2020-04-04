import React from "react"
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Icon from '@material-ui/core/Icon'
import IconButton from '@material-ui/core/IconButton';

function Footer(props){
    return (
    <div style={props.style}>
        <footer class="footer" style={props.style}>
            <div class="content has-text-centered">
                <IconButton href={"https://github.com/jay1723"}>
                    <GitHubIcon  color={"primary"} style={{fontSize: "40px"}}/>
                </IconButton>

                <IconButton href={"https://www.linkedin.com/in/jay-rao/"}>
                    <LinkedInIcon color={"primary"} style={{fontSize: "48px"}} />
                </IconButton>
            </div>
            
            <div class="content has-text-centered" >
                <p style={props.textstyle}>
                    © Jay Rao
                </p>
            </div>
        </footer>
    </div>
    )
}

export default Footer