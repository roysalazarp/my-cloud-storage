import { MouseEvent, useState } from 'react';
import { CreateUserInputDto } from "../utils/generated";
import { css } from "@emotion/css";

const CreateUserForm = () => {

  const [fields, setFields] = useState<CreateUserInputDto>({email: "", password: ""})

  const handleSubmit = (event: MouseEvent) => {
    event.preventDefault()
  }

  return (
    <div 
      className={css`
        width: auto;
        height: auto;
        align-self: center;
        border-radius: 10px;
        border-style: solid;
        border-width: 2px;
        border-color: #d0d0d0;
        padding: 50px;
      `}
    > 
      <h1
        className={css`
          font-size: 30px;
          padding-bottom: 20px;
          font-weight: bolder;
        `}
      >
        Create user 
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
            Create 
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreateUserForm;