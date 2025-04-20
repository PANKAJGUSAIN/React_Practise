import { useState } from 'react';
import './index.css';

const DragAndDrop = () =>{

    const [items, setItems] = useState([
        "Item 1",
        "Item 2",
        "Item 3",
        "Item 4",
        "Item 5",
      ]);

    const [draggedIndex, setDraggedIndex] = useState(null);
    const [draggedOver, setDrageedOver] = useState(null);
    const [dragEnd , setDragEnd] = useState(false);

    const handleDragStart = (e , id) =>{
        setDraggedIndex(id);
        setDragEnd(false);
    }

    const handleDragOver = (e , id) =>{
        e.preventDefault(); // this is needed  else you won't be able to drop 
        console.log('dragging over' , id)
        setDrageedOver(id);
    }

    const handleDrop = (e , id) =>{
        console.log("DROP" , id);
        let newOrderItems = [...items];
        [newOrderItems[draggedIndex] , newOrderItems[id]] = [newOrderItems[id], newOrderItems[draggedIndex]]
        setDrageedOver(null);
        setDraggedIndex(null);
        setItems(newOrderItems);
        setDragEnd(true);
    }

    const handleDragEnd = (e , id)=>{
        if(!dragEnd){
            console.log('Dropped outside the valid area');
        }
            setDragEnd(false);
            setDraggedIndex(null);
            setDrageedOver(null);
    }



    return (
        <div style={{height:"90%" , width:"100%"}}>
            Drag And Drop

            <div className='DroppingArea' onDragOver={()=>{console.log('left side over')}} onDrop={()=>{console.log("left side drop")}}>
                {
                    items.map((item , id) =>(
                        <div key={id} 
                            className='DragItem'
                            draggable 
                            onDragStart={(e)=>handleDragStart(e , id)}
                            onDragOver={(e)=>handleDragOver(e , id)}
                            onDrop={(e)=>handleDrop(e , id)}
                            onDragEnd={(e)=>handleDragEnd(e , id)}
                            style={draggedIndex == id ? {
                                border:'1px dashed white',
                                opacity:0.5
                            }:{}}
                        >
                            {item}
                        </div>
                    ))
                }
                
            </div>

            <div className='DroppingArea' onDragOver={()=>{console.log('Right side over')}} onDrop={()=>{console.log("Right side drop")}}>
                
            </div>


        </div>
    )
}

export default DragAndDrop