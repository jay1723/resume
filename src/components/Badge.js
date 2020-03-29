import React from "react"

function Badge(props){
    return (
        <button className="button is-rounded is-static">
        <span>{props.title}</span>
      </button>
    )
}

export default Badge