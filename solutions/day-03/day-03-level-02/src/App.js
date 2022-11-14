import Title from "./components/Title";
import Image from "./components/Image";
import ImageContainer from "./components/Image/styles";
import Subscribe from "./components/Subscribe";
import UserPhoto from "./components/UserCard";

function App() {
  return (
    <>
      <Title />
      <ImageContainer>
        <Image
          src="https://cdn-icons-png.flaticon.com/512/174/174854.png"
          alt="HTML icon"
        />
        <Image
          src="https://cdn-icons-png.flaticon.com/512/732/732190.png"
          alt="CSS icon"
        />
        <Image
          src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
          alt="JavaScript icon"
        />
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
          alt="React icon"
        />
      </ImageContainer>
      <Subscribe />
      <UserPhoto />
    </>
  );
}

export default App;
