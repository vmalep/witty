import {useState} from "react";

const Avatar = (props) => {
    const {selectedAvatar, setSelectedAvatar} = props;

    const handleChange = (avatar) => {
        setSelectedAvatar(avatar);
    }

    const avatarImages = [
        {src: "https://cdn.iconscout.com/icon/free/png-64/pokemon-7-282136.png", alt:"pikachu"},
        {src: "https://cdn.iconscout.com/icon/free/png-64/pokemon-egg-togepi-cartoon-video-game-32211.png", alt:"pokemeon1"},
        {src: "https://cdn.iconscout.com/icon/free/png-64/squirtle-pokemon-water-wartortle-cartoon-32212.png", alt:"togepi"},
        {src: "https://cdn.iconscout.com/icon/free/png-64/jigglypuff-pokemon-pokemongo-cartoon-video-game-evolution-wigglytuff-32213.png", alt:"poliwag"},
        {src: "https://cdn.iconscout.com/icon/free/png-64/poliwag-pokemon-pokemongo-electric-grass-cartoon-32214.png", alt:"squirtle"},
        {src: "https://cdn.iconscout.com/icon/free/png-64/victini-pokemon-cartoon-victory-animal-32209.png", alt:"victini"}
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