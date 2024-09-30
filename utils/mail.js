const nodemailer = require("nodemailer")

const sendEmail = async (userEmail, sub, msg) => {
    const transport = await nodemailer.createTransport({
        host: process.env.NODEMAILER_HOST,
        port: process.env.NODEMAILER_PORT,
        sender: true,
        auth: {
            user: process.env.EMAIL_ID,
            pass: process.env.APP_PASS
        }
    })
    try {
        const info = await transport.sendMail({
            from: '"CODEDEV"<codedevservices@gmail.com>',
            to: userEmail,
            subject: sub,
            text: msg
        })
        console.log("Msg send: ", info.messageId)
        return true
    } catch (error) {
        console.log(error)
        return false
    }
}

module.exports = sendEmail