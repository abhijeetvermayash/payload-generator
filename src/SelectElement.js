import React from 'react';
import { Button , Divider, Icon, Segment} from 'semantic-ui-react'

class SelectElment extends React.Component
{

    handleClickText = () => {
        this.props.state.stateFunctions.setshowTextDetails(true); 
        this.props.state.stateFunctions.setSelectElement(false);         
       }
       handleAddLineClick = () => {
        this.props.state.stateFunctions.setAddLine(true);           
       }

       handleClickImage =()=>{
        this.props.state.stateFunctions.setShowImageDetails(true); 
        this.props.state.stateFunctions.setSelectElement(false);  
        this.props.state.stateFunctions.setshowTextDetails(false);          
       }

       handleClickDivider =()=>{
        this.props.state.stateFunctions.setShowDividerDetails(true); 
        this.props.state.stateFunctions.setSelectElement(false);  
        this.props.state.stateFunctions.setshowTextDetails(false);
        this.props.state.stateFunctions.setShowImageDetails(false); 


       }
       handleClickSpace =()=>{
        this.props.state.stateFunctions.setshowSpaceDetails(true)
        this.props.state.stateFunctions.setShowDividerDetails(false); 
        this.props.state.stateFunctions.setSelectElement(false);  
        this.props.state.stateFunctions.setshowTextDetails(false);
        this.props.state.stateFunctions.setShowImageDetails(false); 
       }

       handleEmptyLine =()=>{
            var arrayOfArrays = this.props.state.payload.slice();
            var lastArray = arrayOfArrays[arrayOfArrays.length -1]
             if (lastArray)  
               {lastArray.push([{"type":"space"}])
               this.props.state.stateFunctions.setPayload(arrayOfArrays)
               }
            else
             this.props.state.stateFunctions.setPayload([...this.props.state.payload,{"type":"space"}])
       }

       handleToggleImage =() => {
           this.props.state.stateFunctions.setshowToggleIconDetails(true)
           this.props.state.stateFunctions.setshowSpaceDetails(false)
           this.props.state.stateFunctions.setShowDividerDetails(false); 
           this.props.state.stateFunctions.setSelectElement(false);  
           this.props.state.stateFunctions.setshowTextDetails(false);
           this.props.state.stateFunctions.setShowImageDetails(false); 
       }
      
     handleClickBackground=()=>{
        this.props.state.stateFunctions.setBG(true)
        this.props.state.stateFunctions.setshowToggleIconDetails(false)
        this.props.state.stateFunctions.setshowSpaceDetails(false)
        this.props.state.stateFunctions.setShowDividerDetails(false); 
        this.props.state.stateFunctions.setSelectElement(false);  
        this.props.state.stateFunctions.setshowTextDetails(false);
        this.props.state.stateFunctions.setShowImageDetails(false); 
     }
       
render(){
return (<div>
    {/* <Segment style={{width:700}}> */}
    <h1>Choose an Element </h1>
    <Button color='yellow' size='huge' style = {{margin : 10, width:250}} onClick = {this.handleClickText}>
        <Icon name = "text cursor"/>Text</Button><br/>
    <Button color='olive' size='huge' style = {{margin : 10, width:250}} onClick = {this.handleClickImage} >
        <Icon name = "image"/>Image</Button><br/>
    <Button color='teal' size='huge' style = {{margin : 10, width:250}} onClick = {this.handleClickDivider}>
        <Icon name = "resize horizontal"/>Divider</Button><br/>
    <Button color='blue' size='huge' style = {{margin : 10, width:250}} onClick = {this.handleClickSpace}>
        <Icon name = "audio description"/>Space</Button><br/>
    {/* <Button color='violet' size='huge' style = {{margin : 10, width:220}} onClick = {this.handleEmptyLine} >
        <Icon name = "list"/>Empty Line</Button><br/> */}
    <Button color='pink' size='huge' style = {{margin : 10, width:250}} onClick = {this.handleClickBackground}>
        <Icon name = "cloud"/>Background Color </Button><br/>
    {/* <Button color='purple' size='huge' style = {{margin : 10, width:250}} onClick = {this.handleToggleImage}>
        <Icon name = "image"/>Toggle Image</Button><br/> */}
        <h1>Add a new Line </h1>
        <Button color='green' size='huge' style = {{margin : 10, width:250}} onClick={this.handleAddLineClick}>
   <Icon disabled name='add Circle'/> Add a New Line</Button>
   {/* </Segment> */}
    </div>
)}
};

export default SelectElment;

