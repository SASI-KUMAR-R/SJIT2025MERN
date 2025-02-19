import { useState } from "react";
const useEffect = () => {
    let [text, setText] = useState("")

    return(
        <section>
            <h1>This is useEffect Example</h1>
            Type Your Text : <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
            <h1>The text typed is : {text}</h1>
        </section>
    )
}

export default useEffect;