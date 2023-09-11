import React from "react";
import 'semantic-ui-css/semantic.min.css'
import { Divider, Grid,  Segment } from 'semantic-ui-react'
import LeftSection from "./LeftSection"
import RightSectionBottom from "./RightSectionBottom"
import RightSectionTop from "./RightSectionTop"
import Document from "./Document";
 
class App extends React.Component {

  state = {
    addLine : true
  , selectElement : false
  , showTextDetails : false
  , showImageDetails : false 
  , showSpaceDetails : false
  , showToggleIconDetails : false
  , showDividerDetails : false
  , showBackgroundDetails : false
  , payload : []
  , ui : ""
  , useAccordion : false 
  , expanded : false 
  , expandDownwards : false
  , linesBeforeExpansion : 1
  , stateFunctions : {
      setAddLine: (value) => this.SetAddLine(value)
    , setSelectElement: (value) => this.SetSelectElement(value)
    , setShowImageDetails : (value) => this.SetShowImageDetails(value)
    , setshowTextDetails : (value) => this.SetshowTextDetails(value)
    , setTextDetails : (value) => this.SetTextDetails(value)
    , setshowToggleIconDetails : (value) => this.SetshowToggleIconDetails(value)
    , setshowSpaceDetails : (value) => this.SetshowSpaceDetails(value)
    , setShowDividerDetails : (value) => this.SetshowDividerDetails(value)
    , setPayload : (value) => this.SetPayload(value)
    , setUI : (value) => this.SetUI(value)
    , setBG : (value) =>{this.setState({showBackgroundDetails:value})}
    , setAccordion :(value) => {this.setState({useAccordion:value})}
    , setExpanded : (value) => {this.setState({expanded:value})}
    , setLinesBeforeExpansion : (value) =>{this.setState({linesBeforeExpansion:value})}
    , setExpandDownwards : (value) => {this.setState({expandDownwards:value})}
  }};

 SetAddLine = (value) => {
    this.setState({addLine : value});
 }
 SetSelectElement = (value) => {
  this.setState({selectElement : value});
 }
 SetShowImageDetails = (value) => {
  this.setState({showImageDetails : value});
 }
 SetshowTextDetails = (value) => {
  this.setState({showTextDetails : value});
 }
 SetshowToggleIconDetails= (value) => {
  this.setState({showToggleIconDetails : value});
 }
 SetshowSpaceDetails=(value) => {
  this.setState({showSpaceDetails : value});
 }
 SetshowDividerDetails=(value) => {
  this.setState({showDividerDetails : value});
 }
 SetTextDetails=(value) =>{
   this.setState({textDetails:value})
 }
 SetPayload =(value) =>{
   this.setState({payload:value})
  }
SetUI =(value) =>{
  this.setState({ui:value})
}
  render() {
    console.log(this.state)
    return (

     <Segment>
    <Grid columns={2} relaxed='very' style ={{height:'100vh', backgroundColor : "#FAF9F6"}}>
      <Grid.Column style = 
        {{display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'}}
      >
      <center>
       <LeftSection 
        state={this.state} 
        />
      </center>
      </Grid.Column>
      <Grid.Column>
      <RightSectionTop state = {this.state}/> <br/><br/>
      <RightSectionBottom state={this.state}/>
      <Document state = {this.state}/>
      </Grid.Column>
    </Grid>

    <Divider vertical></Divider>
  </Segment>
    );
  }


}

 
export default App;