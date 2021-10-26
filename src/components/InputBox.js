import {useRef} from "react";

const InputBox = ({setUserName}) => {
    const inputRef = useRef();

    const handleClick = () => {
        return (
        inputRef.current.value && setUserName(inputRef.current.value)
        )
    }

    return (
        <div className="input-container">
            <input placeholder="Enter your nickname" className="nickname" ref={inputRef} />
            <button className="button"
                onClick={handleClick}>NEXT</button>
        </div>
    )
}

export default InputBox;