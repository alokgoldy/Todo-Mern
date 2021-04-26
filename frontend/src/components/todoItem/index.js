import React from 'react'
import './styles.css'


function TodoItem({idx,data,editFun,removeFun}) {

    return (
        <div className="todoItem">
            <div className="todo">
                <h2>{data}</h2>
            </div>
            <div className="btn">
                <div className="edit">
                    <button onClick={()=>editFun(idx)}>EDIT</button>
                </div>
                <div className="remove">
                    <button onClick={()=>removeFun(idx)}>REMOVE</button>
                </div>
            </div>
        </div>
    )
}
export default TodoItem
