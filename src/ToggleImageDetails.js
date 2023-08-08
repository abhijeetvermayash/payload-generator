import React from 'react';
import { Button, Input, Icon, Dropdown} from 'semantic-ui-react'

class ToggleImageDetails extends React.Component
{


state = 
    { finalObj : { type : "toggleImage", openIcon : "", closeIcon: ""}
    }

handleChangeComplete = (color) => {
    this.setState({finalObj:{...this.state.finalTextObj,color : color}})
};
    
handleSubmit=()=>{ 
  var arrayOfArrays = this.props.state.payload.slice();
  console.log(arrayOfArrays);
  var lastArray = arrayOfArrays[arrayOfArrays.length -1]
  if(!(this.state.finalObj.openIcon === "" && this.state.finalObj.closeIcon === "")){
  lastArray.push(this.state.finalObj);
  this.props.state.stateFunctions.setPayload(arrayOfArrays)
  }
  this.props.state.stateFunctions.setSelectElement(true)
} 

handleSubmitLine=()=>{
  this.props.state.stateFunctions.setAddLine(true)
  this.props.state.stateFunctions.setSelectElement(false)
}
render(){
return (
    <div>
    <Input placeholder='Enter Open Image URL' required onChange= {e => this.setState({finalObj:{...this.state.finalObj,openIcon : e.target.value}})}/><br/><br/><br/>
    <Input placeholder='Enter Close Image URL' required onChange= {e => this.setState({finalObj:{...this.state.finalObj,closeIcon : e.target.value}})}/><br/><br/><br/>
    <Button color='blue' onClick={this.handleSubmit}>
    <Icon disabled name='add Circle'/> Add Element To Payload </Button> <br/><br/>
    <Button color='green' onClick={this.handleSubmitLine}>
    <Icon disabled name='add Circle'/> Go to Add new Line</Button> <br/><br/>
    </div>
)}
};

export default ToggleImageDetails;

