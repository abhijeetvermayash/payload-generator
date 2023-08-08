import React from 'react';
import "./RightSectionTop.css"

class RightSectionTop extends React.Component

{   
render(){

    const textView=(element)=>{
        return (<div className='textView' style={{color:element.color, fontSize:element.size, fontWeight:getWeight(element.fontType)}}>
                <article className='textArticle'>
                     {element.text}
                    </article>
               </div>)
    }
    const getWeight=(str)=>{
       if(str === "Bold") return 720
       if(str === "SemiBold") return 510
       else return 400
    }
    const imageView=(element)=>{
        return (<div className='imageView'>
                <img className = "image" src = {element.url}/>
              </div>)
    }
    const spaceView=(element)=>{
          return (element.weight ? <div className='spaceWithWeight'></div> :
          element.width ? <div style={{width:element.width,height:'1px'}}></div> 
          :addDefaultSpace())
         
    }
    const checkPresentAndPrevIsText = (element, line, index) => {
        var prevElement = line[index -1];
        return prevElement ? prevElement.type === "text" && element.type === "text" : false
    }
    const addDefaultSpace =()=>{
        return <div style={{width:'10px',height:'1px'}}></div>
    }
    const addDefaultTextSpace=()=>{
        return <div style={{width:'5px',height:'1px'}}></div>
    }
    const dividerView=()=>{
        return <div className='dividerA'></div>
    }
    const addView=(element)=>{
        return  element.type === "text" ? textView(element)
              : element.type === "image" ? imageView(element) 
              : element.type === "space" ? spaceView(element)
              : element.type === "divider" ? dividerView(element) : <div></div>
    }
    const checkPresentOrPrevIsSpace = (element, line, index) => {
        var prevElement = line[index -1];
        return prevElement ? prevElement.type === "space" || element.type === "space" : false
    }
    const drawElement =(element, line, index) => {
       return  checkPresentAndPrevIsText(element,line,index) ? ( <>{addDefaultTextSpace()}{addView(element)}</>)
             : index == 0 || checkPresentOrPrevIsSpace(element,line,index) ? addView(element)
             : ( <>{addDefaultSpace()}{addView(element)}</>)
    }
    const drawLine = (line)=> {return line.map((element,index) => drawElement(element,line,index))}
    const findBackgroundColor=(line)=> {
         let bg = line.find((element) => element.type == "background" )
         return bg?bg.color:"#ffffff"
       }
    const mappedData = this.props.state.payload.map((line) => (
       <div className = "eachLineDiv" style={{backgroundColor:findBackgroundColor(line)}}>
           {drawLine(line)}
       </div>
      ));
return (
    <>
    <h1>UI Output</h1>
    <div className='mainDiv'>
        <div className='secondDiv'>
    {mappedData}
    </div>
    </div>
    </>  
)}
};

export default RightSectionTop;

