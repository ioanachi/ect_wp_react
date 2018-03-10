import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { generalConfigChange } from "../actions/index";

class LivePreviewCont extends Component{
 render(){
   return (
<div>Live preview</div>
   )
 }
} 


function mapStateToProps(state) {
    return { generalConfig:  state.generalConfigChange };
  }

  export default connect(mapStateToProps)(LivePreviewCont);