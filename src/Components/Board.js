import React,{Component} from 'react'
import '../App.css'
import Story from './Story.js'
import Nav from './Nav'

// the first story tasks
const startTask = [
  {
    id: '1',
    name: 'Imed',
    Task: 'Design',
   }
 
]
const prgTask = [
     {
      id: '2', 
        name: 'Aymen',
        Task: 'Developer',
        
     }
  ]
const doneTask = [
     {
        id:'3',
        name: 'Yahya',
        Task: 'Manager',
  
     }
   
  ]


  const start1Task = [
   {
     id: '4',
     name: 'Sawssen',
     Task: 'RH',
    }
  
 ]
 const prg1Task = [
      {
       id: '5', 
         name: 'Zied',
         Task: 'Manager',
         
      }
   ]
 const done1Task = [
      {
         id:'6',
         name: 'Samia',
         Task: 'Director',
   
      }
    
   ]

      
class Board extends React.Component {
    render() {
       return(
          <div>
    <div className="flex">
    <Nav />
    </div>
    
    <Story  StoryName="story 1" startTask={startTask} prgTask={prgTask} doneTask={doneTask}/>
    <Story  StoryName="story 2" startTask={start1Task} prgTask={prg1Task} doneTask={done1Task}/>


    
    

    </div>
        )
    }

}

export default Board;