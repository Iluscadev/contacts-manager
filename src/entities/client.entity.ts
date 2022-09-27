import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  Unique,
  OneToMany,
} from "typeorm";
import { Contact } from "./contact.entity";

@Entity("clients")
@Unique(["email"])
class Client {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string

  @Column()
  name: string

  @Column()
  email: string

  @Column()
  phone: string

  @CreateDateColumn()
  register_date: Date

  @OneToMany(() => Contact, (contact) => contact.client)
  contacts: Contact[]
}

export { Client };
