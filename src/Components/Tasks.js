import React from 'react'
import Task from './Task.js'

const Tasks = ({tasks}) => (
     <React.Fragment >
        {
            tasks.map(el => <Task task={el} />
           )

        }
      </React.Fragment>
)

export default Tasks;