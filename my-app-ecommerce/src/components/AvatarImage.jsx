
const avatarImg = {
    name: "Avatar name",
    image: "https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?size=626&ext=jpg",

}

function AvatarImage({ name = avatarImg.name, image = avatarImg.image , ...props }) {
    return (
        <>
            <img {...props} src={image} alt={`Imagen del avatar ${name}`} />
        </>
    )
}

export default AvatarImage