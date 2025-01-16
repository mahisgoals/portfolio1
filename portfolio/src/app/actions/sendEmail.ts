"use server";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "../../../lib/utils";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');
    const email = formData.get('email');
    const message = formData.get('message');

    // Simple server-side validation
    if (!validateString(email, 500)) {
        return {
            error: "Invalid Email"
        };
    }
    if (!validateString(message, 5000)) {
        return {
            error: "Invalid Message"
        };
    }

    let data; // Declare data here
    try {
        data = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'mahisgoals@gmail.com',
            subject: 'Message from portfolio',
            reply_to: email as string,
            text: `You have received a new message from your portfolio contact form:\n\n` +
                  `First Name: ${firstName}\n` +
                  `Last Name: ${lastName}\n` +
                  `Email: ${email}\n` +
                  `Message: ${message}`
        });
    } catch (error: unknown) {
        return {
            error: getErrorMessage(error)
        };
    }
    
    return {
        data, // Return data
    };
};
