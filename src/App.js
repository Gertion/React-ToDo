import './App.css';
import "./style.scss"
import React, {useState} from "react";
import AllTask from "./components/AllTask/AllTask";
import AddFolder from "./components/AddFolder/AddFolder";
import Folder from "./components/Folder/Folder";
import AllTasks from "./components/AllTasks/AllTasks";

function App() {
    const [all, setAll] = useState([])
    const [folder, setFolder] = useState('')
    const [addFolder, setAddFolder] = useState(false)
    const [status, setStatus] = useState('all')


  return (
    <div className="App">
<main>
    <aside className='sidebar'>
<AllTask setStatus={setStatus}/>
        <ul className='sidebar__list'>
            {all.map((item) => {
                return (
                    <li key={item.id} className='sidebar__list-item' onClick={() => setStatus(item.folder)}>{item.folder}</li>
                )
            })}
                </ul>
        <AddFolder all={all} setAll={setAll} folder={folder} setFolder={setFolder} addFolder={addFolder} setAddFolder={setAddFolder}/>
    </aside>
    <section>
        {status === 'all'
            ? <AllTasks all={all}/>
            : <Folder setAll={setAll} all={all} status={status}/>
        }
    </section>
</main>
    </div>
  );
}

export default App;
