import React from "react";
import 'semantic-ui-css/semantic.min.css'
import AddLine from "./AddLine";
import SelectElment from "./SelectElement";
import TextDetails from "./TextDetails";
import ImageDetails from "./ImageDetails";
import DividerDetails from "./DividerDetails";
import SpaceDetails from "./SpaceDetails";
import ToggleImageDetails from "./ToggleImageDetails";
import BackGroundDetails from "./BackGroundDetails";
class LeftSection extends React.Component {

  render() {
    return(
       this.props.state.addLine ?  <AddLine state={this.props.state}/> 
     : this.props.state.selectElement ? <SelectElment state={this.props.state}/>
     : this.props.state.showTextDetails ? <TextDetails state = {this.props.state}/>
     : this.props.state.showImageDetails ? <ImageDetails state = {this.props.state}/>
     : this.props.state.showDividerDetails ? <DividerDetails state = {this.props.state}/>
     : this.props.state.showSpaceDetails ? <SpaceDetails state = {this.props.state}/>
     : this.props.state.showBackgroundDetails ? <BackGroundDetails state = {this.props.state}/>
     : this.props.state.showToggleIconDetails ? <ToggleImageDetails state = {this.props.state}/>
     : <div></div>
  );

}
}

export default LeftSection;