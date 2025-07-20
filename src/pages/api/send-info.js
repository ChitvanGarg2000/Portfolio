import nodemailer from 'nodemailer'

const tranporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.SMTP_USERNAME,
            pass: process.env.SMTP_PASSWORD
        }
    })

export default async function handler(req, res) {
    try {
        if (req.method === 'POST') {
            const { email, description, profile } = req.body;

            const info = await tranporter.sendMail({
                from: email,
                to: ['gargchitvan378@gmail.com', 'chitvangarg0305@gmail.com'],
                subject: `Application for ${profile}`,
                text: description
            })

            if (info?.messageId) {
                res.status(200).json({
                    message: 'Successfully sent',
                    data: info?.messageId
                })
            }
        }
    }catch(err){
        console.log(err);
        res.status(500).json({
            message: 'Something went wrong',
            data: err
        })
    }
    
}