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

function WeekWiseRatio(props) {

    const [post, setPost] = React.useState(null);

    React.useEffect(() => {
        setPost(props.issuesData);
    }, []);


    if (!post) return null;

    let openIssuesPerWeek = [];
    let closedIssuesPerWeek = [];

    for(let i=0;i<10;i++)
    {   
        openIssuesPerWeek.push(0);
        closedIssuesPerWeek.push(0);
    }

    for (let i = 0; i < post.length; i++) {
        var ind_created = get_week_no(new Date(post[i].created_at));
        if(ind_created<10){
              openIssuesPerWeek[ind_created]++;
        }

        var ind_closed = get_week_no(new Date(post[i].closed_at));

        if(ind_closed < 10 ){
                closedIssuesPerWeek[ind_closed]++;
        }
    }
    return (
        <div className="table-wrapper">
            
                <table className="fl-table">
                    <thead>
                        <tr>
                            {openIssuesPerWeek.map((count, week_no)=>{
                                return <th>Week {week_no+1}</th>
                            })}
                            
                        </tr>
                    </thead>
            
                    <tbody>
                        <tr>
                        {openIssuesPerWeek.map((count, week_no)=>{
                                return <th>{count}/ {closedIssuesPerWeek[week_no]}</th>
                            })}
                        </tr>

                    </tbody>
            
                    </table>
            
        </div>
    );
}

export default WeekWiseRatio;


