import "./App.css";
import FullName from "./profile/ProfileComponents/FullName";
import ProfilPhoto from "./profile/ProfileComponents/ProfilPhoto";
import Address from "./profile/ProfileComponents/Address";

function App() {
  return (
    <div className="App">
      <div className="profile--wrapper">
        <ProfilPhoto></ProfilPhoto>
        <FullName></FullName>
        <Address></Address>
      </div>
    </div>
  );
}

export default App;
