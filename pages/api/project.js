/* eslint-disable import/no-anonymous-default-export */
export default function (req, res) {
    let nodemailer = require('nodemailer');

    let transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD,
        },
        secure: true,
    })

    const mailData = {
        from: process.env.EMAIL,
        to: process.env.EMAIL,
        subject: `Message From ${req.body.name}`,
        text: req.body.message + " | Sent from: " + req.body.email,
        html: `<div>${req.body.message}</div><p>Sent from:
        ${req.body.email}, Name:${req.body.name}, Type: ${req.body.typeProject}, Budget:${req.body.budget}</p>`
    }

    transporter.sendMail(mailData, function (err, info) {
        if (err)
            res.status(400)
        else
            res.status(200)
    })
}