import React from "react";
import plusIcon from 'D:/CODING/PROJECTS/Project 8 - To Do App/client/src/assets/plus.png';

export default function StartScreen(){

    return(
        <>
            <div className="no-todo-container">
                <h1 className="heading">
                    Welcome to our App!
                </h1>
                <img src={plusIcon} className="plus-icon"/>
                <h3 className="content">
                    Write and click the plus icon to add your first task and get started!
                </h3>
            </div>
        </>
    )
}