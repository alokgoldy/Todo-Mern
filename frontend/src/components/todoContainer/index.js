import React from 'react'
import TodoItem from '../todoItem'

function TodoContainer({data,editFun,removeFun}) {
    return (
        <div>
            {
                data.map((e,idx) => {return <TodoItem key={idx} idx={idx} data={e}  editFun={editFun} removeFun={removeFun}/>})
            }
        </div>
    )
}

export default TodoContainer
