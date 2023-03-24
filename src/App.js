import './App.css';
import List from './List'
import React,{ useState} from 'react';

const App =()=>{

  const[inputList,setInputList]=useState("");

  const[items,itemList]=useState([]);

  const itemEvent=(event)=>{
    setInputList(event.target.value);
  };

  const itomList=()=>{
    itemList((oldItems)=>{
      return [...oldItems , inputList];
    });
    setInputList("");
  };

   const deleteItem=(id)=>{
      console.log("deleteItem");
      itemList((oldItems)=>{
        return oldItems.filter((arrElem,index)=>{
          return index !== id;
        });
      }); 
    };


  return(
    <>
      <div className="main_div">
        <div className="center_div">
          <br/>
          <h1 >ToDo List</h1>
          <br/>
          <input type="text" placeholder= "Add a Items" value= {inputList} onChange={itemEvent} />
          <button onClick={itomList}> + </button>

          <ol>
            
            { items.map((itemval,index) =>{
              return <List key={index}
               id={index}
                text={itemval}
                onSelect= {deleteItem}
                />;
              
             })}
          </ol>

        </div>
      </div>
    </>
  )
};

export default App;
