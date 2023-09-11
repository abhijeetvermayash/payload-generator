import React from 'react';
import { Button, Input, Icon, Message} from 'semantic-ui-react'


class Document extends React.Component

{   
  
render(){
return (
     <div style={{width:"100%"}}>
    <Message style = {{marginBottom: 100,justifyContent:"center",alignItems:"center",position:"absolute",bottom:0}}>
    <Message.Header>Document</Message.Header>
    <p><a href="https://juspay.atlassian.net/wiki/spaces/P/pages/2178318531/Product+Summary">Click here to check Document for Payload Generator</a></p>
  </Message>
  </div>
)}
};

export default Document;