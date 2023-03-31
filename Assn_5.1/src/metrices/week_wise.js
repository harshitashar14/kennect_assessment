import octokit from '../api.js';
import React, { useState, useEffect } from "react"
import './status_wise.css';

function get_week_no(dt1) 
 {
  var dt2 = new Date();
  var diff =(dt2.getTime() - dt1.getTime()) / 1000;
  diff /= (60 * 60 * 24 * 7);
  return Math.abs(Math.round(diff));
  
 }

function WeekWiseCount(props) {

    const [post, setPost] = React.useState(null);

    React.useEffect(() => {
        setPost(props.issuesData);
    }, []);

    if (!post) return null;

    let weekMap = [];
    let openIssuesPerWeek = [];
    let closedIssuesPerWeek = [];

    for(let i=0;i<10;i++)
    {    weekMap.push(0);
        openIssuesPerWeek.push(0);
        closedIssuesPerWeek.push(0);
    }

    for (let i = 0; i < post.length; i++) {
        var ind = get_week_no(new Date(post[i].created_at));
        if(ind<10){
            weekMap[ind]++;
            if (post[i].state == "open")
              openIssuesPerWeek[ind]++;
            else
               closedIssuesPerWeek[ind]++;
        }
    }
    return (
        <div className="table-wrapper">
            
                <table className="fl-table">
                    <thead>
                        <tr>
                            {weekMap.map((count, week_no)=>{
                                return <th>Week {week_no+1}</th>
                            })}
                            
                        </tr>
                    </thead>
            
                    <tbody>
                        <tr>
                        {weekMap.map((count, week_no)=>{
                                return <th>{count}</th>
                            })}
                        </tr>

                    </tbody>
            
                    </table>
            
        </div>
    );
}

export default WeekWiseCount;


