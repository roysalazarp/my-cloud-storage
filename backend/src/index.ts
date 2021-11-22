import "reflect-metadata";
import express from 'express';
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { buildSchema } from "type-graphql";
import { ApolloServer } from "apollo-server-express";
import {graphqlUploadExpress} from "graphql-upload";
import { 
  createUserResolver,
  loginResolver,
  logoutResolver,
  meResolver,
  usersListResolver,
  refreshTokenResolver
} from "./users";

dotenv.config({
  path: `${__dirname}/../.env.${process.env.NODE_ENV}`
})

const port: number = +process.env.PORT;

(async () => {
  const app = express();

  app.use(
    cors({
      origin: process.env.CLIENT,
      credentials: true
    })
  );

  app.use(cookieParser());

  app.get("/", (_, res) => {
    return res.send({data: "data from the backend"})
  })

  app.use(graphqlUploadExpress({maxFileSize: Infinity, maxFiles: Infinity}));

  const apolloServer = new ApolloServer({
    uploads: false,
    playground: true,
    introspection: true,
    schema: await buildSchema({
      resolvers: [
        createUserResolver,
        loginResolver,
        logoutResolver,
        meResolver,
        usersListResolver,
        refreshTokenResolver,
      ],
      dateScalarMode: "isoDate",
    }),
    context: ({ req, res }) => ({ req, res })
  });

  await apolloServer.start();

  apolloServer.applyMiddleware({ 
    app,
    path: "/graphql",
    cors: false,
  });

  app.listen(port, "0.0.0.0", () => {
    console.log(process.env.CLIENT)
    console.log(`🚀 Server Started at PORT: ${port}`);
  });

})();
