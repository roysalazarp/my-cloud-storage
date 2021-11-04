import dotenv from "dotenv";
import { Routes } from "./Routes";

dotenv.config({
  path: `${__dirname}/../.env.${process.env.NODE_ENV}`
})

export const App: React.FC<{}> = () => {
  return <Routes />;
};
