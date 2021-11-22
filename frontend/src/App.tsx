import { Routes } from "./Routes";
import { persistor, store } from "./store/configureStore";
import { Provider } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { requestRefreshToken, meInfo } from "./store/me";
import { PersistGate } from 'redux-persist/integration/react'

export const App: React.FC<{}> = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Auth>
          <Routes/>
        </Auth>
      </PersistGate>
    </Provider>
  )
};

const Auth: React.FC<{}> = ({children}) => {
  const dispatch = useDispatch();
  const me = useSelector(meInfo);
  
  useEffect(() => {
    dispatch(requestRefreshToken())
  }, [])

  if (me.id !== "") {
    return <div>{children}</div>
  }

  return <div>{children}</div>
};