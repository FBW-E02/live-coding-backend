"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const bcrypt_1 = __importDefault(require("bcrypt"));
const UserSchema = new Schema({
    firstName: { type: String },
    email: { type: String, unique: true },
    password: { type: String }
});
UserSchema.pre("save", function (next) {
    const user = this;
    if (this.isModified("password")) {
        const hashedPassword = bcrypt_1.default.hashSync(user.password, 10);
        user.password = hashedPassword;
        next();
    }
    else {
        next();
    }
});
UserSchema.index({ email: -1 });
const UsersCollection = mongoose_1.default.model("users", UserSchema);
/* UsersCollection.createIndexes({email:-1}) */
exports.default = UsersCollection;
