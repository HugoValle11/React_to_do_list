import React from "react"

export default function ShowList(props){

    const showList = props.listToShow.map(prevList => {
        const listItemClass = prevList.isDone ? 'list--item done' : 'list--item'
        return (
            <div className={listItemClass}>
                {/* <h3>{prevList.id}</h3> */}
                <div className="list--text">
                    <h4>{prevList.taskTitle}</h4>
                    <p>{prevList.taskDescription}</p>
                </div>
                <div className="list--buttons">
                    <button onClick={() => props.doneItem(prevList.id)}>Done</button>
                    <button onClick={() => props.deleteItem(prevList.id)}>Delete</button>
                </div>
            </div>
        )
    })
    

    return(
        <div className="app--list">
                {showList}
            </div>
    )
}