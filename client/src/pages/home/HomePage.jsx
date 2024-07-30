
import AuthScreen from "./AuthScreen";
import HomeScreen from "./HomeScreen";
import { useAuthStore } from "../../store/authUser";

const HomePage = () => {
  const { user } = useAuthStore();
  return (
   <div className="">
    {user ? <HomeScreen /> : <AuthScreen />}
   </div>
  )
}

export default HomePage
