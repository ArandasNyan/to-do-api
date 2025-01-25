import mongoose, {Document, Schema} from "mongoose";
import bcrypt from 'bcryptjs'
import { ENV } from "../config/environment";

export interface IUser extends Document {
    username: string;
    email: string;
    password: string;
    comparePassword: (candidatePassword: string) => Promise<boolean>;
}

const UserSchema = new Schema<IUser>({
    username: { type: String, requiredPaths: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

// Hash de senha antes de salvar
UserSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    const salt = await bcrypt.genSalt(Number(ENV.saltRounds));
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

// Método para comparar senha
UserSchema.methods.comparePassword = async function (candidatePassword: string) {
    return bcrypt.compare(candidatePassword, this.password);
};

const UserModel = mongoose.model<IUser>('User', UserSchema);
export default UserModel;