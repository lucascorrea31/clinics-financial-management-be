import { ObjectId } from "typeorm";

export default interface UserInterface {
	id?: ObjectId;
	name?: string;
	email?: string;
	password?: string;
}
