import octokit from './api.js';
import './App.css';
import Popup from 'reactjs-popup';
import React, {useState, useEffect} from "react";
import StatusWiseCount from './metrices/status_wise';
import WeekWiseCount from './metrices/week_wise';
import WeekWiseRatio from './metrices/ratio_new_issues';
import WeeklyClosureRate from './metrices/weekly_closure_rate.js';
import ListIssues from './metrices/list_issues.js';


export default function IssuesMetrices(props) {
  const [post, setPost] = React.useState(null);
  const [popUp, setPopUp] = useState(false)
  
  const duringPopUp = popUp ? " during-popup" : ""
  useEffect( ()=> {
    var issues = [];
    let  promises = [];
    console.log(props);
    for(let i=1;i<=10;i++){
        promises.push(
            octokit.request("GET /repos/{owner}/{repo}/issues", {
                owner: props.repoData.owner,
                repo:  props.repoData.repoName,
                sort: 'created',
                state: 'all',
                per_page : 100,
                page: i
            }).then(response=>{
                issues.push.apply(issues, response.data);
            })      )
  }
  
  Promise.all(promises).then(() => {
  

  setPost(issues);
  });
      
  }, []);

  if(!post)return null;
  
  return (

<div className={"Checkout" + duringPopUp}>

<div className={"cart" + duringPopUp}>            
<div>
          {<h1> Status wise open issues count</h1>}
          <StatusWiseCount issuesData = {post}/>
          {<h1>Week wise issues</h1>}
          <WeekWiseCount issuesData = {post}/>
          {<h1>Ratio of new issues opened vs closed issues per week</h1>}
          <WeekWiseRatio issuesData = {post}/>
          {<h1>Weekly Closure Rate</h1>}
          <WeeklyClosureRate issuesData = {post}/>
          

      </div>
<button onClick={()=>setPopUp(true)} className={duringPopUp}>Show All Issues</button>
</div>
{popUp && <ListIssues issuesData ={post} setPopUp={setPopUp}/>}
</div>
  )
};

