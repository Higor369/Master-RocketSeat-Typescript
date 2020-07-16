import {Request, Response} from 'express'
import emailService from '../services/emailService'

const users = 
   [ {name: 'ze pequeno', email: 'meunomeezepequeno@gail.com'},]



export default {
    async index(req : Request, res : Response ){
        return res.json(users)
    },
    async create(req : Request, res : Response){
        const emailS = new emailService();
        emailS.sendMail(
           { to: {nome: 'higor', email: 'jdhjh@fdkjfdslkj.com'},
            message: {subject: 'testandoooo', body:'aaaaa odeio o cockPit'}})

    res.send()
    }
};