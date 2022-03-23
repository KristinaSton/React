import React,{useState} from "react";

function LessText(props) {
    const [read, setRead] = useState(false);

    function setText() {
        if (read) {
            return props.text;
        }
        return props.text.substring(0,props.maxLenght);
    }

    function setButton() {
        if (read) {
            return " read less";
        }
        return "...read more";
    }
    return (
    <p>{setText()}<button className="Button" onClick={()=>setRead(!read)}> {setButton()}</button> </p>
    )
    
}

export default LessText