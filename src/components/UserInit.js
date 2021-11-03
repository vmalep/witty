import {useEffect, useState} from "react"
import App from "../App"
import Avatar from "./Avatar"
import UserName from "./UserName"

const UserInit = (props) => {

    const {
        selectedAvatar, 
        setSelectedAvatar,
        userName,
        setUserName, 
        setAppStep} = props

    const [nextBtnDisabled, setNextBtnDisabled] = useState([true, 'grey'])
    
    // Each time selectedAvatar or userName is modified, check if both are filled and if so, activate the Next button
    useEffect(() =>{
        (selectedAvatar && userName) && setNextBtnDisabled(false, "blue")
    }, [selectedAvatar, userName])

    const handleNext = () => {
        setAppStep(1)
    }

    return (
        <div className="flex-column">
            <Avatar selectedAvatar={selectedAvatar} setSelectedAvatar={setSelectedAvatar}/> 
            <UserName setUserName={setUserName} etAppStep={setAppStep} />
            <button
                onClick={handleNext}
                disabled={nextBtnDisabled[0]}
                style={{backgroundColor: nextBtnDisabled[1]}}
            >
                Next
            </button>
        </div>
    )
}

export default UserInit;