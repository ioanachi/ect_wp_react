import moment from "moment";

export default function () {
    return {
            endDate: moment(),
            timezoneOffset: -(new Date().getTimezoneOffset() * 60000),
            timerName: ""
        }
}