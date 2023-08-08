import React from 'react';
import { Button, Icon, Form, TextArea} from 'semantic-ui-react'
import copy from "copy-to-clipboard";


class RightSectionBottom extends React.Component

{   
  handleRemovePayload=()=>{
    this.props.state.stateFunctions.setPayload([]);
  }

  handleRemoveLastElement=()=>{
    var arrayOfArray = this.props.state.payload.slice();
    var lastArray = arrayOfArray[arrayOfArray.length -1]
    var a = lastArray && lastArray.length>0 && lastArray.pop();
    console.log("dasd",lastArray)
    if (lastArray.length == 0 ) arrayOfArray.pop()
    this.props.state.stateFunctions.setPayload(arrayOfArray)
  }
  
  handleRemoveLastLine=()=>{
    this.props.state.stateFunctions.setPayload(this.props.state.payload.slice(0,-1));
  }
  handleCopy =()=>{
    copy(JSON.stringify(this.props.state.payload))
  }
  handleCopyEscape =()=>{
    let stringified = JSON.stringify(this.props.state.payload);
    let escaped = stringified.replaceAll('\"','\\"')
    copy(escaped);
  }
render(){
return (
    <>
    <div style={{display:"flex"}}>
    <h1> Payload </h1>
    <Button color='black' style = {{marginLeft : 20, width:125,height:35}} onClick={this.handleCopy}>
     <Icon disabled name='copy'/> Copy </Button>
     <Button color='black' style = {{marginLeft : 20, width:200,height:35}} onClick={this.handleCopyEscape}>
     <Icon disabled name='copy'/> Copy Stringified</Button>
     </div>
    <Form>
    <TextArea placeholder='Your' row="15" style={{height:300}} value={JSON.stringify(this.props.state.payload)} disabled/>
    <Button color='red' style = {{margin : 10, width:250}} onClick={this.handleRemoveLastLine}>
     <Icon disabled name='delete'/> Remove Last Line </Button>
     <Button color='red' style = {{margin : 10, width:250}} onClick={this.handleRemoveLastElement}>
     <Icon disabled name='delete'/> Remove Last Element </Button>
     <Button color='red' style = {{margin : 10, width:250}} onClick={this.handleRemovePayload}>
     <Icon disabled name='delete'/> Clear </Button>
  </Form>
  </>
)}
};

export default RightSectionBottom;

