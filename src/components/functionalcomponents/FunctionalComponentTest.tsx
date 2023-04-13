import React, {useState} from "react";

const FunctionalComponentTest: React.FC = () => {
    const [inputs, setInputs] = useState({counter:0});

    return <div style={{color: "gray"}}>
        <div>Functional Component Counter 22: {inputs.counter}</div>
        <button onClick={()=>setInputs({counter: inputs.counter+1})}>+</button>
        <button onClick={()=>setInputs({counter: inputs.counter-1})}>-</button>
    </div>;
}

export {
    FunctionalComponentTest
}
