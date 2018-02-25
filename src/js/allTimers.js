import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";


class AllTimers extends React.Component {
    constructor(props) {
        super(props);
        this.returnTimers();
        this.state = {
            timersHTML: ''
        }
        this.returnTimers = this.returnTimers.bind(this);
    }

    returnTimers() {
        console.log("mergeeee");
        var timersReturned;
        var _parent = this;
        axios.get(ectWPPath + '/ect/v2/getTimers')
            .then(function (response) {
                var _data = response.data;
                console.log(_data);
                timersReturned = _data;
                var timerToShow = [];
                _data.forEach(function (element, i) {
                    var ListElement;
                    var timerNameFinal;
                    var imgUrl =  ectScriptBase+"/src/img/trash.jpg";
                    if (typeof element.timerName != "undefined" && element.timerName !="" ) {
                        timerNameFinal = element.timerName;
                    } else {
                        timerNameFinal = 'Timer-'+element.timerID;
                    }
                    ListElement = (<li className="timers" key={i}><div className="timersName"><span>{timerNameFinal}</span></div> <div className="timersDeleteContainer"><input type="text" readOnly /><img src={imgUrl} /></div></li>)
                    timerToShow.push(ListElement);
                });
                _parent.setState({ timersHTML: timerToShow });

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

