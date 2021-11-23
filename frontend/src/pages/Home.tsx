import { useSelector } from "react-redux";
import { meInfo } from "../store/me";
import { Redirect } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Modal } from "../detail-components/Modal";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { uiAction } from "../store/ui";

export const HomePage: React.FC<{}> = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState<string>("");
  
  const me = useSelector(meInfo);

  if (me.id === "") {
    return <Redirect to="/login"/>;
  }

  const action = () => {
    console.log(name)
    dispatch({type: uiAction.closeModal.type})
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