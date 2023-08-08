import React from 'react';
import { Button, Input, Icon, Dropdown} from 'semantic-ui-react'
import ColorPickerComponent from './ColorPickerComponent';

class DividerDetails extends React.Component
{


state = 
    { finalObj : { type : "divider", thickness : ""}
    , error : ""
    , setFinalObjectColor: (value) => this.setState({finalObj:{...this.state.finalObj, color : value}})
    }

handleSubmit=()=>{ 
  var arrayOfArrays = this.props.state.payload.slice();
  console.log(arrayOfArrays);
  var lastArray = arrayOfArrays[arrayOfArrays.length -1]
  if(this.state.finalObj.thickness !== ""){
  lastArray.push(this.state.finalObj);
  this.props.state.stateFunctions.setPayload(arrayOfArrays)
  this.props.state.stateFunctions.setSelectElement(true)
  }
  else {
      this.setState({error : "Thickness is Mandatory Field"})
  }
 
} 

handleBack=()=>{
    this.props.state.stateFunctions.setAddLine(false)
    this.props.state.stateFunctions.setSelectElement(true)
  }

handleSubmitLine=()=>{
  this.props.state.stateFunctions.setAddLine(true)
  this.props.state.stateFunctions.setSelectElement(false)
}
render(){
return (
    <div>
     <h2> Enter Divider Details Here</h2><br/>
    <Input placeholder='Enter Thickness' error = {this.state.error !== ""} style ={{width:400}} type= "number" min="1" required onChange= {e => {this.setState({error:""});this.setState({finalObj:{...this.state.finalObj,thickness : Number(e.target.value)}})}}/><br/><br/><br/>
    <ColorPickerComponent state = {this.state}/><br/><br/>
    <div style={{display:"flex",flexDirection:"row"}}>
    <div style={{marginRight:20}}>
    <Button color='teal' onClick={this.handleBack}>
    <Icon disabled name='backward'/> Back To Elements </Button> 
    </div>
    <div>
    <Button color='blue' onClick={this.handleSubmit}>
    <Icon disabled name='add Circle'/> Add Element To Payload </Button> <br/><br/>
    </div>
    </div><br/>
    <Button color='green' onClick={this.handleSubmitLine}>
    <Icon disabled name='add Circle'/> Go to Add new Line</Button> <br/><br/>
    </div>
)}
};

export default DividerDetails;

