import {useState } from "react";

const useToggle = (initialValue = false) => {
    const [state, setState] = useState(initialValue);

    const toggleState = () => {
        setState(!state);
    }

    return [state, toggleState];
}


export default useToggle;