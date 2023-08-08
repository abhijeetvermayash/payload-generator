import React from 'react';
import { Button , Icon, Segment} from 'semantic-ui-react'

class LeftSection extends React.Component
{

checkLastIsEmpty=(arrayOfArray)=>{
 return (arrayOfArray.length > 0) ?
  arrayOfArray[arrayOfArray.length - 1].length === 0
 : false
}
handleClick = () => {
 this.props.state.stateFunctions.setAddLine(false);
 if(!this.checkLastIsEmpty (this.props.state.payload)){
 this.props.state.stateFunctions.setPayload([...this.props.state.payload,[]]); 
 }
 this.props.state.stateFunctions.setSelectElement(true);           
}
render(){
return (
  // <Segment style={{width:700, height: 500, display: 'flex',
  // alignItems: 'center',
  // justifyContent: 'center'}}>
 <Button color='green' size='huge' onClick={this.handleClick}>
   <Icon disabled name='add Circle'/> Add a New Line</Button>
  //  </Segment>
)}
};

export default LeftSection;

