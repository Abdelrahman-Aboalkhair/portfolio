import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
    },
});

export const sendMail = async (to: string, subject: string, text: string) => {
    const mailOptions = {
        from: process.env.GMAIL_USER,
        to,
        subject,
        text,
    };

    return transporter.sendMail(mailOptions);
};