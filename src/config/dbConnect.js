import mongoose from "mongoose";

mongoose.connect("mongodb+srv://portugalestudio:123579@clusterteste.c3eoijs.mongodb.net/node-teste")

const db = mongoose.connection;

export default db