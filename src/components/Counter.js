import React, { useEffect,useState} from 'react';

function Counter() {
    const [counter, setcounter] = useState(0);

    useEffect(
        function counterUpdate() {
            console.log("value increases");
        },
        [counter]
    );
  return (
    <div>
        <button type='submit' onClick={()=> setcounter(counter+1)}>
            plus
        </button>
    </div>
  );
}

export default Counter