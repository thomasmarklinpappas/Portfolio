"use server";

import {
    EmailTemplateForUser
} from "@/components/email-templates";
import nodemailer from 'nodemailer';
import { render } from '@react-email/components';

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
    currentEmail: string;
}

export async function sendMail(
    formData: FormData
): Promise<{ success: boolean; message?: string }> {  
    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
              user: process.env.EMAIL_USER,
              pass: process.env.EMAIL_PASS,
            },
        });
    
        // Render React Email components to HTML
        const userEmailHtml = render(EmailTemplateForUser({ 
            name: formData.name, 
            email: formData.email, 
            subject: formData.subject, 
            message: formData.message 
        }));

        // Send email to user (confirmation)
        const userMailOptions = {
            from: process.env.EMAIL_USER,
            to: formData.email,
            subject: `Thank you for your message - ${formData.subject}`,
            html: userEmailHtml,
        };

        // Send both emails
        await transporter.sendMail(userMailOptions)

        return { success: true };
    } catch (error) {
        console.error("SendMail error:", error);
        return { success: false, message: "Failed to send email. Please try again later." };
    }
}
