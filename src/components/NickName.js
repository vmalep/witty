const NickName = (props) => {

    const { userName, setUserName } = props

    return (
        <input
            placeholder="Enter your nickname"
            value= {userName}
            className="nickname"
            onChange={e => setUserName(e.target.value)}
        />
    )
}

export default NickName