import React, { Component } from "react";

export default class LinkPolitica extends Component {

    render(props){
    return(
        <li>
            <p>{props.text}</p>
        </li>
    );
}
}