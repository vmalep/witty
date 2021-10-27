import {useRef} from "react";

const UserName = (props) => {

    const {setUserName, appStep, setAppStep} = props
    const inputRef = useRef();

    const handleClick = () => {
        inputRef.current.value && setUserName(inputRef.current.value)
        setAppStep(appStep + 1)
    }

    return (
        <div className="input-container">
            <form onSubmit={handleClick}>
                <input placeholder="Enter your nickname" className="nickname" ref={inputRef} required/>
                <input className="button" type="submit" value="NEXT"/>
            </form>
        </div>
    )
}

export default UserName;