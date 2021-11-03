import {useState} from "react";

const UserName = (props) => {

    const {setUserName, setAppStep} = props

    return (
        <input placeholder="Enter your nickname" className="nickname" onChange={e => setUserName(e.target.value)} />
    )
}

export default UserName;