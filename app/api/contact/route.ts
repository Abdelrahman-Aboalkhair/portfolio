import { NextResponse } from "next/server";
import { sendMail } from "@/lib/nodemailer";

export async function POST(request: Request) {
    try {
        const { name, email, message } = await request.json();
        const text = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;

        await sendMail(
            "abdelrahman.aboalkhair@gmail.com",
            "New Contact Form Submission",
            text
        );

        return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }
}