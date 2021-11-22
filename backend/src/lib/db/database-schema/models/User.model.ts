import {
  Entity,
  Column,
  PrimaryColumn
} from "typeorm";

@Entity({name: "users"})
export default class User {

  @PrimaryColumn("varchar", {length: 36, name: "id"})
  id: string;
  
  @Column("text", { name: "email" })
  email: string;

  @Column("text", { name: "password" })
  password: string;

  @Column("timestamptz", { name: "createdAt" })
  createdAt: string;
  
  @Column("timestamptz", { name: "updatedAt" })
  updatedAt: string;
}