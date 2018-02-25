import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";


class AllTimers extends React.Component {
    constructor(props) {
        super(props);
        this.returnTimers();
        this.state={
            timersHTML:''
        }
        this.returnTimers = this.returnTimers.bind(this);
    }

    returnTimers() {
        console.log("mergeeee");
        var timersReturned;
        var _parent = this;
        axios.get('http://localhost/wordpress/wp-json/ect/v2/getTimers')
            .then(function (response) {
                var _data = response.data;
                console.log(_data);
                timersReturned = _data;
                var timerToShow = [];
                _data.forEach(function (element, i) {
                    console.log(element);
                    if(){
                        var ListElement = (<li className="Timers" key={i}>{element.timerID}</li>)
                    timerToShow.push(ListElement);
                    }
                    
                });
                _parent.setState({timersHTML:timerToShow});
                return (<div><ul>{timerToShow}</ul></div>);

            })
            .catch(function (error) {
                console.log(error);

            });
            return (<div>x</div>);
            
        return
    }
    render() {
        return (
            <div>
                <ul className="listOfTimers">{this.state.timersHTML}</ul>
            </div>)
    }
}
ReactDOM.render(
    <AllTimers />,
    document.getElementById("allTimers")
);

