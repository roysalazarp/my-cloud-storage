import { useDispatch } from "react-redux";
import { logout } from "../store/me";
import { css } from "@emotion/css";
import { Redirect } from "react-router";

export const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <div 
      className={css`
        width: 100vw;
        height: 60px;
        background-color: #c4c4c4;
        display: flex;
        justify-content: center;
        align-content: center;
      `}
    >
      <button
        className={css`
          font-family: inherit;
          border: none;
          padding: none;
          background: none;
          text-decoration: none;
          color: #2b2b2b;
          cursor: pointer;
          &:hover {
            color: #fcfcfc;
          }
        `}
        onClick={async () => {
          dispatch(logout())
          return <Redirect to="/login"/>
        }}
      >logout</button>
    </div>
  );
};