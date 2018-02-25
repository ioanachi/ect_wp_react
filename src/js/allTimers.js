import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";


class AllTimers extends React.Component {
    constructor(props) {
        super(props);
        
        var returnTimers = function () {
            return  axios.get('localhost/wordpress/wp-json/ect/v2/getTimers')
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
            
        }
    }


    render() {

        return
    }
}
ReactDOM.render(
    <AllTimers />,
    document.getElementById("allTimers")
);

