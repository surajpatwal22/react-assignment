import React from 'react'
import'./style.css';
import { useState } from 'react';
import { useEffect } from 'react';

// get data from local storage
const Getlocaldata = ()=>{
    const list = localStorage.getItem("todolist");

    if (list) {
        return JSON.parse(list);
        //todolist is stored as string so list also contain string but  in items data will store as an array therefore we use parse method 
    } else {
        return[];
        
    }
};

const Todo = () => {
    const [inputData,setInputData] = useState("");
    // const [items,setItems] = useState([]);
    const [items,setItems] = useState(Getlocaldata());
// there are 2 state variable write now
const [iseditItem,setisEditItem] = useState("");
const [togglebtn,settogglebtn] = useState(false);

    const addItems = () => {
if (!inputData) {
    alert("please enter todo")
    
} else if (inputData && togglebtn ) {
    setItems(
        items.map((currentelement)=>{
            if (currentelement.id === iseditItem) {
                return {...currentelement, name: inputData }
                
            }
            return currentelement;

        })
    )
    setInputData("");
        setisEditItem([]); 
        settogglebtn(false);
    
} else {
    const newinputdata = {
        id : new Date().getTime().toString(),
        name : inputData,
    }
    
    // setItems([...items,inputData]);
    setItems([...items,newinputdata]);

    // here spread operater will make sure that whatever u write(before click) store(after click) in state and if you replace it with something and add something else then it will also store 
    // if you write ape and click on add button then then ape will store inside our second state variable i.e [ape]
    setInputData("");
    // whenever we click out inputstate variable will automatically change into ""
}
    };
    const editItem = (index)=>{
        const editedID = items.find((currentelement)=>{
            return currentelement.id === index;
        }); 
        setInputData(editedID.name);
        setisEditItem(index); 
        settogglebtn(true);
    };

    const deleteItem = (index) => {
        const updateItem = items.filter((currentelement)=> {
            return currentelement.id !== index;
        });
        setItems(updateItem);
    };

    const removeAll = ()=> {
        setItems([]);
    }

    useEffect(() => {
        localStorage.setItem("todolist",JSON.stringify(items))
    }, [items]);
    //JSON.stringify(items) ---> items is an array and we have to pass value as string so this method actually converts array into sting 
    //JSON.parse()---> convert given value into an aaray
    
  return (
    <>
    <div className='main-div'>
        <div className='child-div'>
            <figure>
                <img src="./image/to-do.png" alt="" srcset="" />
                <figcaption>Todo List ✌</figcaption>
            </figure>
            <div className='addItems'>
                <input type="text"
                placeholder='Add Items'
                className='form-control' 
                value={inputData}
                // 
                onChange={(e)=> setInputData(e.target.value)}
                // bec. of this when-ever we write something our state will change 
                />
               {togglebtn ? (
              <i className="fa fa-plus add-btn" onClick={addItems}></i>
            ) : (
              <i className="fa fa-plus add-btn" onClick={addItems}></i>
            )}
                
                

            </div>
            {/* show our itemss sxn */}
            <div className='showItems'>
                {
                    items.map((currentelement,index)=>{
                        return(
                            <div className='eachItem' key={currentelement.id}> 
                <h3>{currentelement.name}</h3>
                <i class="far fa-edit add-btn" onClick={()=> editItem(currentelement.id)}></i> 
                <i class="far fa-trash-alt add-btn" onClick={()=> deleteItem(currentelement.id)}></i>
                </div>
                        );
                    })
                }

                
            </div>

            <div className='showItems '>
            <button className='btn ' onClick={removeAll}><span>CLEAR ALL</span></button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Todo