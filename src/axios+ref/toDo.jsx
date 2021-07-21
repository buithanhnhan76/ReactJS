import React,{useState,useEffect} from 'react';
import axios from 'axios';

const ToDo = () => {
    // ref
    const todoText = React.createRef();

    // to-do's lists, setLists is the same as setState
    const [lists,setLists] = useState([]);

    useEffect(()=>{
        async function getLists(){
            // json placeholder
            const result = await axios.get("https://jsonplaceholder.typicode.com/todos");
            setLists(result.data);
        }
        getLists();
        // [] stop repeat
    },[]);

        async function handleDelete(id){
            const newLists = lists.filter(li => li.id !== id);
            setLists(newLists);
            await axios.delete("https://jsonplaceholder.typicode.com/todos" + "/" + id);
        }
        // add a todo item
        async function handleAdd(todoText){
            const obj = {title: todoText, completed: false};
            const newLists = [obj,...lists];
            setLists(newLists);
            await axios.post("https://jsonplaceholder.typicode.com/todos",obj);
            
        }
        async function handleUpdate(list){
            list.completed = true;
            const newLists = [...lists];
            const index = newLists.indexOf(list);
            newLists[index] = list;
            setLists(newLists);
            await axios.put("https://jsonplaceholder.typicode.com/todos" + "/" + list.id,list);
        }

    return ( 
        <div>
        <input type="text" ref={todoText}/>
        {/* call handleAdd with this input value */}
        <button onClick={() => handleAdd(todoText.current.value)}>Add</button>
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>State</th>
                    <th>Update</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
            {lists.map(list => 
            <tr key={list.id}>
                <td>{list.title}</td>
                {/* if list.completed = true => done */}
                <td>{(list.completed)?"Done":"Not Complete"}</td>
                {/* button */}
                <td><button onClick={() =>handleUpdate(list)}>Update</button></td>
                <td><button onClick={() =>handleDelete(list.id)}>Delete</button></td>
            </tr>
            )} 
            </tbody>
            
        </table>
        </div>
     );
}
 
export default ToDo;