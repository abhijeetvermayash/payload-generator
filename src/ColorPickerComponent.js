import React from "react";
import { CirclePicker } from "react-color";
import "react-color-palette/lib/css/styles.css";
  
class ColorPickerComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        selectedColor: '#000000', // Default color (red) when the component mounts
      };
    }
  
    handleChange = (color) => {
      this.setState({ selectedColor: color.hex });
      this.props.state.setFinalObjectColor (color.hex);
    };
  
    render() {
      const { selectedColor } = this.state;
      const customColors = [
        "#FFFFFF", // White
        "#000000", // Black
        "#808080", // Gray
        "#FF0000", // Red
        "#008000", // Green
        "#0000FF", // Blue
        "#FFFF00", // Yellow
        "#FFA500", // Orange
        "#800080", // Purple
        "#FFC0CB", // Pink
        "#A52A2A", // Brown
        "#008080", // Teal
        "#00FFFF", // Cyan
        "#FF00FF", // Magenta
        "#000080", // Navy
        "#FFD700", // Gold
        "#C0C0C0", // Silver
        "#800000", // Maroon
        "#00FF00", // Lime
        "#808000", // Olive
        "#4B0082", // Indigo
        "#40E0D0", // Turquoise
        "#FF7F50", // Coral
        "#FA8072", // Salmon
        "#E6E6FA", // Lavender
        "#A9A9A9", // DarkGray
        "#D3D3D3", // LightGray
        "#228B22", // ForestGreen
        "#4682B4", // SteelBlue
        "#FF8C00"  // DarkOrange
      ];
      

      return (
        <div>
          <h3>Select Any Font Color</h3>
          <CirclePicker color={selectedColor} onChange={this.handleChange} colors={customColors}/>
          <h3>Selected Color</h3>
          <div style={{ marginTop: '20px', marginBottom: '20px', background: selectedColor, width: '50px', height: '50px' }} />
        </div>
      );
    }
  }
  
  
  export default ColorPickerComponent;
  
  
  
  
  
  
  
  