import React from 'react';
import { Button, Input, Icon, Message} from 'semantic-ui-react'

class SpaceDetails extends React.Component
{


state = 
    { finalObj : { type : "space"}
    }

handleChangeComplete = (color) => {
    this.setState({finalObj:{...this.state.finalTextObj,color : color}})
};
    
handleSubmit=()=>{ 
  var arrayOfArrays = this.props.state.payload.slice();
  console.log(arrayOfArrays);
  var lastArray = arrayOfArrays[arrayOfArrays.length -1]
  lastArray.push(this.state.finalObj);
  this.props.state.stateFunctions.setPayload(arrayOfArrays)
  this.props.state.stateFunctions.setSelectElement(true)
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
     <h2> Enter Space Details Details Here</h2><br/>
    <Input placeholder='Enter Width' type= "number" style ={{width:400}} required onChange= {e => this.setState({finalObj:{...this.state.finalObj,width : e.target.value}})}/><br/><br/><br/>
    <Input placeholder='Enter Weight' type= "number"  style ={{width:400}} onChange= {e => this.setState({finalObj:{...this.state.finalObj,weight : e.target.value}})}/><br/><br/><br/>
    <div style={{display:"flex",flexDirection:"row"}}>
    <div style={{ marginRight:20}}>
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
    <div>
    <Message>
    <Message.Header>Note</Message.Header>
    <p><b>Weight</b> :  here weight is used to add space in terms of ratio between elements </p>
    <p><b>Width </b>&nbsp;:  here width is used to add space in terms of pixels between elements  </p>
    <p style={{color:"green"}}>In case of just adding an empty line no need to pass width or weight</p>
  </Message>
  </div>
    </div>
)}
};

export default SpaceDetails;

