import {useEffect, useState} from "react"
import Avatar from "./Avatar"
import NickName from "./NickName"

const UserInit = (props) => {
    
    const {
        selectedAvatar, 
        setSelectedAvatar,
        userName,
        setUserName, 
        setAppStep} = props
        
        const [nextBtnDisabled, setNextBtnDisabled] = useState(true)
        
    // Each time selectedAvatar or userName is modified, check if both are filled and if so, activate the Next button
    // otherwise, disable it (again)
    useEffect(() =>{
        ((Object.keys(selectedAvatar).length !== 0) && userName)
            ? setNextBtnDisabled(false)
            : setNextBtnDisabled(true)
    }, [selectedAvatar, userName])

    return (
        <div className="flex-column">
            <Avatar selectedAvatar={selectedAvatar} setSelectedAvatar={setSelectedAvatar}/> 
            <NickName setUserName={setUserName} />
            <button
                onClick={() => setAppStep(1)}
                disabled={nextBtnDisabled}
                className={nextBtnDisabled ? 'disabled-btn' : 'action-btn'}
            >
                Next
            </button>
        </div>
    )
}

export default UserInit;