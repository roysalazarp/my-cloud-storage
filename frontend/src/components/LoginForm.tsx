import { MouseEvent, useState } from 'react';
import { useDispatch } from "react-redux";
import { login } from "../store/me";
import { LoginInputDto } from "../utils/generated";
import { css } from "@emotion/css";
import { useHistory } from "react-router-dom";

const LoginForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [fields, setFields] = useState<LoginInputDto>({email: "", password: ""})

  const handleSubmit = (event: MouseEvent) => {
    event.preventDefault()
    dispatch(login(fields))
    history.push("/")
  }

  return (
    <div 
      className={css`
        width: 400px;
        height: 200px;
        align-self: center;
      `}
    > 
      <h1
        className={css`
          font-size: 30px;
          padding-bottom: 20px;
          font-weight: bolder;
        `}
      >
        Login
      </h1>
      <form
        className={css`
          display: grid;
          gap: 10px;
        `}
      >
        <input 
          placeholder={"Email"}
          type="text" 
          name="email" 
          onChange={(e) => setFields({...fields, email: e.target.value})}
          className={css`
            border: none;
            outline: none;
            background-color: #f4f4f4;
            height: 40px;
            width: 100%;
            padding: 0 20px;
          `} 
        >
        </input>
        <input 
          placeholder={"Password"}
          type="text" 
          name="password" 
          onChange={(e) => setFields({...fields, password: e.target.value})}
          className={css`
            border: none;
            outline: none;
            background-color: #f4f4f4;
            height: 40px;
            width: 100%;
            padding: 0 20px;
          `} 
        >
        </input>
        <div
          className={css`
            margin-top: 20px;
          `}
        >
          <button
            className={css`
              display: grid;
              font: inherit;
              cursor: pointer;
              outline: inherit;
              border: none;
              background-color: #006CFF;
              color: #ffffff;
              align-content: center;
              height: 35px;
              border-radius: 3px;
              padding: 5px 15px;
              text-transform: capitalize;
              &:hover {
                background-color: #08c81e;
              }
            `} 
            onClick={(e) => handleSubmit(e)}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  )
}

export default LoginForm;