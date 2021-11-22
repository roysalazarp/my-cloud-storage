import LoginForm from "../components/LoginForm";
import { useSelector } from "react-redux";
import { meInfo } from "../store/me";
import { Redirect } from "react-router-dom";

export const LoginPage: React.FC<{}> = () => {
  const me = useSelector(meInfo);

  if (me.id !== "") {
    return <Redirect to="/"/>;
  }

  return (
    <div>
      <LoginForm/>
    </div>
  )
}