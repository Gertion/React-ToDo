import React from 'react';

const AllTasks = ({all}) => {
    return (
        <>
            {all.reduce((accamulator, reciver) => accamulator + reciver.tasks.length, 0) === 0
                ? <h2>Нет задач</h2>
                : <div>
                    {all.map((item) => {
                        return (
                            <div key={item.id}>
                                <h2>{item.folder}</h2>
                                <ul>
                                    {item.tasks.map((elem) =>(
                                        <li key={elem.id}>{elem.name}</li>
                                    ))}
                                </ul>
                            </div>
                        )
                    })}
                </div>
            }
        </>
    );
};

export default AllTasks;