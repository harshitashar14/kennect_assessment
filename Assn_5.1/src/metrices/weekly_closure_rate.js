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

function WeeklyClosureRate(props) {

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
        let ind_created = get_week_no(new Date(post[i].created_at));
        
        if(ind_created<10 ){
              openIssuesPerWeek[ind_created]++;
        }

        let ind_closed = get_week_no(new Date(post[i].closed_at));

        if(ind_closed < 10 ){
                closedIssuesPerWeek[ind_closed]++;
        }
    }

    //issues that were open at start of the week
    for(let week =0;week<10;week++){
        for(let i=0;i<post.length; i++){
            let ind_created = get_week_no(new Date(post[i].created_at));
            let ind_closed = get_week_no(new Date(post[i].closed_at));

            if(ind_created>week && ind_closed < week)
                openIssuesPerWeek[week]++;
        }
    }

    var avgClosureRate =0;
    var count =0;
    for(let i=0;i<10;i++){
        if(openIssuesPerWeek[i]){
            avgClosureRate+= closedIssuesPerWeek[i]/ openIssuesPerWeek[i];
            count++;
        }
    }
    avgClosureRate = avgClosureRate/count;
    return (
        <div>
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
                            if(count)
                                return <th>{Number(closedIssuesPerWeek[week_no] /count).toFixed(2)}</th>
                            else
                                return <th>0</th>
                        })}
                    </tr>

                </tbody>
        
                </table>
        
    </div>
                        <h1> Average Weekly Closure Rate</h1>
                        <div className="table-wrapper">
            
            <table className="fl-table">
                <thead>
                    <tr>
                        <th>Average Weekly Closure Rate</th>
                        
                    </tr>
                </thead>
        
                <tbody>
                    <tr>
                    
                            <th>{Number(avgClosureRate).toFixed(2)}</th>
                    
                    </tr>

                </tbody>
        
                </table>
        
    </div>
        </div>


    );
}

export default WeeklyClosureRate;


