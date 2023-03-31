import getIssues from '../api.js';
import React, { useState, useEffect } from "react"
import './status_wise.css';
import '../App.css';

function ListIssues(props) {

    const [post, setPost] = React.useState(null);
    const { setPopUp } = props
    React.useEffect(() => {
        setPost(props.issuesData);
    }, []);


    if (!post) return null;
    
    return (
        <div className="PopUp">
            {/* x close window */}
            <button className="popup-x" onClick={()=> setPopUp(false)} >X</button>
            <div className="pu-content-container">
            <div className="table-wrapper">
            
            <table className="fl-table">
                <thead>
                    <tr>
                        <th>S.NO.</th>
                        <th>Issues</th>
                        <th>Created At</th>
                    </tr>
                </thead>

           
        

        
        
                <tbody>
                    
                        {post.map((issue, index)=>{
                            return (<tr><td>{index +1}</td>
                            <td> {issue.title}</td> <td>{issue.created_at}</td></tr>
                            )
                        })}
                        
                    

                </tbody>
        
                </table>
        
    </div>
            </div>
            {/* button controls */}
            <div className="pu-button-container">
                <button onClick={()=> setPopUp(false)}> Close </button>
            </div>
        </div>
        
    );
}

export default ListIssues;


