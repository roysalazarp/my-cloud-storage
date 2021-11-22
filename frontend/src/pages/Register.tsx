import CreateUserForm from "../components/CreateUserForm";
import { useSelector } from "react-redux";
import { meInfo } from "../store/me";
import { Redirect } from "react-router-dom";

export const RegisterPage: React.FC<{}> = () => {
  const me = useSelector(meInfo);

  if (me.id !== "") {
    return <Redirect to="/"/>;
  }
  
  return (
    <div>
      <CreateUserForm/>
    </div>
  )
}