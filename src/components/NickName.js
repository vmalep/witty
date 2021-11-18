const NickName = (props) => {

    const {setUserName} = props

    return (
        <input
            placeholder="Enter your nickname"
            className="nickname"
            onChange={e => setUserName(e.target.value)}
        />
    )
}

export default NickName