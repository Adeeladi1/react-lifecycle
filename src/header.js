import React from "react";

export  class Heade extends React.Component{
    componentWillUnmount(){
        alert("get out");

        return(
            <h3>wellcome</h3>
        )
    }
} 