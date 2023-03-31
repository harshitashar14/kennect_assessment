import getIssues from '../api.js';
import React, { useState, useEffect } from "react"
import './status_wise.css';

function StatusWiseCount(props) {

    const [post, setPost] = React.useState(null);

    React.useEffect(() => {
        setPost(props.issuesData);
    }, []);


    if (!post) return null;
    
    let openCount = 0;
    let closedCount = 0;

    for (let i = 0; i < post.length; i++) {
        
        if (post[i].state === "open")
            openCount++;
        else
            closedCount++;
    }
    return (
        <div className="table-wrapper">
            
                <table className="fl-table">
                    <thead>
                        <tr>
                            <th>Open</th>
                            <th>Closed</th>
                        </tr>
                    </thead>

               
            

            
            
                    <tbody>
                        <tr>
                            <td>{openCount}</td>
                            <td>{closedCount}</td>
                        </tr>

                    </tbody>
            
                    </table>
            
        </div>
    );
}

export default StatusWiseCount;


