import Service from './application-service/Service';
import Resolver from "./controller/Resolver";
import database from "./infrastructure";

export const service = new Service(database)

const resolver = Resolver

export default resolver;