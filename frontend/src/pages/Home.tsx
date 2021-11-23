import { useSelector } from "react-redux";
import { meInfo } from "../store/me";
import { Redirect } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Modal } from "../detail-components/Modal";
import { useState } from "react";

export const HomePage: React.FC<{}> = () => {
  const [name, setName] = useState<string>("");
  
  const me = useSelector(meInfo);

  if (me.id === "") {
    return <Redirect to="/login"/>;
  }

  const action = () => {
    alert(name)
  }

  return (
    <div>
      <Navbar/>
      <h1>home page</h1>
      <p>{me.id}</p>
      <Modal
        title={"Create Folder"}
        body={"This is the body"}
        buttonText={"Create Folder"}
        action={action}
      >
        <input type="text" onChange={(e) => setName(e.target.value)}/>
      </Modal>
    </div>
  )
}