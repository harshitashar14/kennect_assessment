import React from "react";
import { useForm } from "react-hook-form";
import IssuesMetrices from "./github_data";


export default function App() {
    const [show, setShow] = React.useState(null);
  
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
   
    setShow(data);
  };

  return (<div>
   
    {!show && (    <div className="App">
  <form onSubmit={handleSubmit(onSubmit)}>
    <div className="form-control">
      <label>Owner Name</label>
      <input type="text" name="owner" {...register("owner")} />
    </div>
    <div className="form-control">
      <label>Repo Name</label>
      <input type="text" name="repoName" {...register("repoName")} />
    </div>
    <div className="form-control">
      <label></label>
      <button type="submit">Track</button>
    </div>
  </form>
</div>)}
{show && <IssuesMetrices repoData={show}/>}
</div>
  );
}
