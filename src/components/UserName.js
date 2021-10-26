import {useRef} from "react";

const UserName = (props) => {

    const {setUserName, setAppStep} = props
    const inputRef = useRef();

    const handleClick = () => {
        inputRef.current.value && setUserName(inputRef.current.value)
        setAppStep(1)
    }

    return (
        <div className="input-container">
            <input placeholder="Enter your nickname" className="nickname" ref={inputRef} />
            <button className="button"
                onClick={handleClick}>NEXT</button>
        </div>
    )
}

export default UserName;