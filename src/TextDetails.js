import React from 'react';
import { Button, Input, Icon, Dropdown} from 'semantic-ui-react'
import ColorPickerComponent from './ColorPickerComponent'

class TextDetails extends React.Component
{

state = 
    { finalTextObj : 
      { type : "text"
      , text : ""
      }
    , error : ""
    , fontTypes : [
        {
          key: 'SemiBold',
          text: 'SemiBold',
          value: 'SemiBold',
        },
        {
          key: 'Bold',
          text: 'Bold',
          value: 'Bold',
        },
        {
            key: '',
            text: '',
            value: '',
          },
      ]
    , setFinalObjectColor: (value) => this.setState({finalTextObj:{...this.state.finalTextObj, color : value}})
    }

    
handleSubmit=()=>{
  var arrayOfArrays = this.props.state.payload.slice();
  console.log(arrayOfArrays);
  var lastArray = arrayOfArrays[arrayOfArrays.length -1]
  if(this.state.finalTextObj.text !== "" || (this.state.finalTextObj.textSize && this.state.finalTextObj.textSize > 0)  ){
  lastArray.push(this.state.finalTextObj);
  console.log(this.props.state.payload);
  this.props.state.stateFunctions.setTextDetails(this.state);
  this.props.state.stateFunctions.setPayload(arrayOfArrays)
  this.props.state.stateFunctions.setSelectElement(true)
  }
  else 
   {
     this.setState({error:"Text is Mandatory field"})
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
      <h2> Enter Your Text Details Here</h2><br/>
    <Input error={this.state.error !== ""} placeholder='Enter Text To be shown' style ={{width:410}} required onChange= {e => { this.setState({error:""});this.setState({finalTextObj:{...this.state.finalTextObj,text : e.target.value}})}}/><br/><br/><br/>
    <Input placeholder='Enter Text size' min = "2" type='number' style ={{width:410}} onChange= {e => this.setState({finalTextObj:{...this.state.finalTextObj,textSize : Number(e.target.value)}})}/><br/><br/><br/>
    <Dropdown
    placeholder='FontType'
    fluid
    search
    selection
    options={this.state.fontTypes}
    onChange= {e => this.setState({finalTextObj:{...this.state.finalTextObj,fontType : e.target.innerText}})}
  /><br/><br/>
   <ColorPickerComponent state = {this.state}/>
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

export default TextDetails;

