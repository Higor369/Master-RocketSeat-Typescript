interface IMailTo {
    nome : string,
    email : string
}
interface IMailMessage{
    subject: string,
    body : string
    attachment ?: Array<string>
}

interface MessageDTO{
    to :IMailTo,
    message: IMailMessage
}

class EmailService {
    sendMail({to  ,message } : MessageDTO){
        console.log('email enviado para' + to.nome + ' ' + message.body) 
    }

}

export default EmailService