import { Column, Entity, ObjectId, PrimaryGeneratedColumn } from "typeorm";
import UserInterface from "./user.interface";

@Entity()
export class User implements UserInterface {
	@PrimaryGeneratedColumn("uuid")
	id?: ObjectId;

	@Column()
	name?: string;

	@Column()
	email?: string;

	@Column()
	password?: string;

	get getId(): ObjectId | undefined {
		return this.id;
	}

	set setId(id: ObjectId) {
		this.id = id;
	}

	get getName(): string {
		return this.name ?? "";
	}

	set setName(name: string) {
		this.name = name;
	}

	get getEmail(): string {
		return this.email ?? "";
	}

	set setEmail(email: string) {
		this.email = email;
	}

	get getPassword(): string {
		return this.password ?? "";
	}

	set setPassword(password: string) {
		this.password = password;
	}

	toJSON(): UserInterface {
		return {
			id: this.id,
			name: this.name,
			email: this.email,
			password: this.password,
		};
	}
}
