import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useUserData } from "../../hooks/useUserData";

const Settings = () => {
  const userData = useUserData();

  return (
    <div>
      <Header isUserLoggedIn={!!userData} name={userData.name} />
      <Sidebar />
    </div>
  );
};

export default Settings;
