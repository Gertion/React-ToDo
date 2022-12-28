import React from 'react';

const AddFolder = ({all, setAll,addFolder, setAddFolder, setFolder, folder}) => {

    const addFolderInAll = () =>{
        setAll([...all,{
            folder: folder,
            id: all.length + 1, //Увеличиваем id на +1
            tasks: [],
            change: false,
        }])
        setFolder('') //Очищаем input
    }
    return (
        <div className='sidebar__add'>
            <button type="button" className='sidebar__add-btn'
                    onClick={() => setAddFolder(true)}><span>+</span>добавить папку
            </button>
            <div style={{display: `${addFolder ? 'block' : 'none'}`}} className='sidebar__add-form'>
                <input value={folder} className='sidebar__add-form-input' type="text" placeholder="название папки"
                       onChange={(event) => setFolder(event.target.value)}/>
                <button className="sidebar__add-form-btn"
                        type="button"
                        onClick={addFolderInAll}>Добавить
                </button>
                <button className='sidebar__add-form-close'
                        onClick={() => {
                            setAddFolder(false)
                            setFolder('')
                        }}>x
                </button>
            </div>
        </div>
    );
};

export default AddFolder;