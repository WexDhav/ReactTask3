import React,{useState} from 'react' 
import './style.css'

function C1() 
{
    const colors = ['red','lime','blue','yellow','magenta','aqua','orange',
    'purple','pink','green','tomato','darkturquoise','saddlebrown','darkorange','steelblue','gold']
    const [isColorListVisible, setColorListVisibility] = useState(false);
    const [selectedColor, setSelectedColor] = useState('');
    const colorOptions = colors.map((color, index) => (
      <div
        key={index}
        className={`color-square ${selectedColor === color && 'selected-color'}`}
        style={{ backgroundColor: color }}
        onClick={() => handleColorSelect(color)}
      />
    ));
  
    const toggleColorList = () => {
      setColorListVisibility(!isColorListVisible);
    };
  
    const handleColorSelect = (color) => {
        const contentDiv = document.getElementById('content');
        contentDiv.style.backgroundColor = color;
        setSelectedColor(color);
        setColorListVisibility(false);
    };
  
    return (
      <div id="content" className="content-div">
        <div className="color-picker">
            <div className="color-list-container">
                {isColorListVisible && <div className="color-list">{colorOptions}</div>}
            </div>
            <button onClick={toggleColorList} className={selectedColor && 'selected-color'}>Pick a color</button>
        </div>
      </div>
    );
}

export default C1;