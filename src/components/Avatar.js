const Avatar = (props) => {
    const {selectedAvatar, setSelectedAvatar} = props;

    const handleChange = (avatar) => {
        setSelectedAvatar(avatar);
    }

    const avatarImages = [
        {src: "https://cdn.iconscout.com/icon/free/png-64/gotham-girl-1502913-1273128.png", alt:"gotham"},
        {src: "https://cdn.iconscout.com/icon/free/png-64/cassandra-cain-1502886-1273101.png", alt:"cassandra"},
        {src: "https://cdn.iconscout.com/icon/free/png-64/thor-avengers-1502879-1273094.png", alt:"thor"},
        {src: "https://cdn.iconscout.com/icon/free/png-64/spiderman-1502925-1273046.png", alt:"spiderman"},
        {src: "https://cdn.iconscout.com/icon/free/png-64/jubilee-1502873-1273088.png", alt:"jubilee"},
        {src: "https://cdn.iconscout.com/icon/free/png-64/ironman-marvel-super-hero-earth-saver-avenger-28699.png", alt:"ironman"}
    ]

    return (
        <>
          <h2>Select your Avatar</h2>
          <div className="avatarbox">
            {avatarImages.map((avatar, index) => (
                <img
                key={index}
                onClick={() => handleChange(avatar)} 
                className={selectedAvatar.alt === avatar.alt ? "avatar-on" : "avatar"} src ={avatar.src} alt={avatar.alt}/>
            ))}
            
   
           </div>
        </>
    )
}

export default Avatar;
