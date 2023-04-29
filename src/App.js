import logo from './logo.svg';
import { useState } from "react";

import './App.css';

const defaultProjects = [{
  name: "Hawkhack",
  description: "This is a project that we worked on",
  tags: ["fun", "exciting", "scary", "spooky"]
},
{
  name: "Art",
  description: "This project is artistic",
  tags: ["artsy"]
}, {
  name: "Disney",
  description: "This project is a third project about disney",
  tags: ["shrek"]
}];

const projectMapper = (project) => {
  const projectStyle = {
    backgroundColor: "rgba(255,200,200,50)",
    width: "50%",
    marginLeft: "25%",
    borderRadius: 10
  }
  return (<>
    <br></br>
    <div style={projectStyle}>
      <p style={{ fontWeight: "bold", color:"red" }}>{project.name}</p>
      <p>{project.description}</p>
    </div>
  </>)
}

function App() {
  const [projects, setProjects] = useState([...defaultProjects]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="App">
      <p>Projects</p>
      {projects.map(projectMapper)}

      <div>
        <input type="text" placeholder="Name" style={{ width: "80%" }}
          onChange={(event) => { setName(event.target.value); }}/>
        <br></br>
        <br></br>
        <input type="text" placeholder="Description" style={{ width: "80%" }}
        onChange={(event) => { setDescription(event.target.value); }}/>
        <br></br>
        <br></br>
        <button style={{ fontSize: 20 }} onClick={() => {
          let _projects = [...projects];

          _projects.push({
            name: name,
            description: description
          })
          setProjects(_projects)
        }}>Add Project</button>
      </div>
    </div>
  );
}

export default App;
