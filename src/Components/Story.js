import React, { Component } from 'react';
import Tasks from './Tasks.js'


class Story extends Component {
  
  allowDrop(e) { 
    e.preventDefault();
  }
  
   drop(e) {
    e.preventDefault();
    var data = e.dataTransfer.getData("text");
    e.target.appendChild(document.getElementById(data));
    
  }

 render() {
   const{StoryName,startTask,prgTask,doneTask}= this.props
    return (
        <div className="flex" >
        <div className="scrum">
        {StoryName}
        </div> 
        <div className="scrum">
        <Tasks tasks={startTask}  />
        </div>  
        <div className="scrum" onDrop={this.drop} onDragOver={this.allowDrop} >
        <Tasks tasks={prgTask} />
        </div>  
        <div className="scrum" onDrop={this.drop} onDragOver={this.allowDrop}>
        <Tasks tasks={doneTask} />
        </div>  
        </div>  
    );
  }
}

export default Story;