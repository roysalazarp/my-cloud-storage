import { useSelector } from "react-redux";
import { meInfo } from "../store/me";
import { Redirect } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Modal } from "../detail-components/Modal";

export const HomePage: React.FC<{}> = () => {
  const me = useSelector(meInfo);

  if (me.id === "") {
    return <Redirect to="/login"/>;
  }

  return (
    <div>
      <Navbar/>
      <h1>home page</h1>
      <p>{me.id}</p>
      <Modal
        title={"Create Folder"} 
        buttonText={"Create Folder"}
      />
    </div>
  )
}