import React from 'react';
import { Button, Input, Icon, Dropdown} from 'semantic-ui-react'

class ImageDetails extends React.Component
{


state = 
    { finalObj : { type : "image", url : ""}
    , error : ""
    }

handleChangeComplete = (color) => {
    this.setState({finalObj:{...this.state.finalTextObj,color : color}})
};
handleBack=()=>{
    this.props.state.stateFunctions.setAddLine(false)
    this.props.state.stateFunctions.setSelectElement(true)
  }

handleSubmit=()=>{ 
  var arrayOfArrays = this.props.state.payload.slice();
  console.log(arrayOfArrays);
  var lastArray = arrayOfArrays[arrayOfArrays.length -1]
  if(this.state.finalObj.url !== ""){
  lastArray.push(this.state.finalObj);
  this.props.state.stateFunctions.setPayload(arrayOfArrays)
  this.props.state.stateFunctions.setSelectElement(true)
  }
  else {
      this.setState({error:"URL is mandatory Field"})
  }
 
} 

handleSubmitLine=()=>{
  this.props.state.stateFunctions.setAddLine(true)
  this.props.state.stateFunctions.setSelectElement(false)
}
render(){
return (
    <div>
         <h2> Enter Image Details Here</h2><br/>
    <Input placeholder='Enter Image URL' error = { this.state.error !== ""} required style ={{width:400}} onChange= {e => {this.setState({error:""}); this.setState({finalObj:{...this.state.finalObj,url : e.target.value}})}}/><br/><br/><br/>
    <Input placeholder='Enter Image size' style ={{width:400}} required type='number' onChange= {e => this.setState({finalObj:{...this.state.finalObj,size : Number(e.target.value)}})}/><br/><br/><br/>
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

export default ImageDetails;

