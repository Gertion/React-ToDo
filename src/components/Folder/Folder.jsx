import React, {useState} from 'react';

const Folder = ({all, setAll, status}) => {
    const [task,setTask] =useState('')
    const [addTask, setAddTask] = useState(false)
const  addTaskInFolder =(id) =>{
    setAll(all.map((item)=>{
        if (item.id === id){
            return {
                ...item, tasks: [...item.tasks, {
                    name: task,
                    done: false,
                    id: item.tasks.length + 1,
                    change: false
                }]}
        } else {
            return item
        }
    }))
    setTask('')
}

    return (
        <>
            {all.filter((item)=> item.folder === status).map((item)=>(
                <div key={item.id}>
                    <h2>{item.folder}</h2>
                    <ul>
                        {item.tasks.map((elem)=>(
                            <li key={elem.id}>{elem.name}</li>
                        ))}
                    </ul>
                    <button type="button" className='sidebar__add-btn' onClick={()=> setAddTask(true)}><span>+</span>добавить задачу</button>
                    <div className="folder__form" style={{display: `${addTask ? "block" : "none"}`}}>
                        <input value={task} type="text" placeholder="Введите текст" onChange={(event) => setTask(event.target.value)}/>
                        <button className='sidebar__add-btn' type="button" onClick={() => addTaskInFolder(item.id)}>Добавить задачу</button>
                        <button className='sidebar__add-btn' type="button" onClick={() => {
                            setAddTask(false)
                            setTask('')
                        }}>отмена</button>
                    </div>
                </div>))}
        </>
    );
};

export default Folder;