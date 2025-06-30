// require ('dotenv).config({path:"./env"})
import dotenv from 'dotenv'
import connectDB from './db/index.js'
import { app } from './app.js'

dotenv.config({ path: "./env" })

connectDB()
    .then(() => {
        app.on('error',(error)=>{
            console.log('ERRR :',error);
            throw error
        })
        app.listen(process.env.PORT || 8000,()=>{
            console.log(`This app is listening on port ${process.env.PORT}`);
        })
    })
    .catch((error) => {
        console.log('MONGO db connection failed !!!', error);
    })


















/*
import mongoose from "mangoose";
import { DB_NAME } from './constants'

import express from 'express'
const app = express()

    // function connectDB(){}
    // connectDB()

    // or

    // using IIFE Immediately Invoked Function Expression
    (async () => {
        try {
            await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
            app.on('error',(error)=>{
                console.log("ERRR: ",error);
                throw error
            })
            app.listen(process.env.PORT,()=>{
                console.log(`This app is listening on port ${process.env.PORT   }`);
            })
        } catch (error) {
            console.error('ERROR :', error);
            throw error
        }
    })()   */