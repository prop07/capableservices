import ContactEmailTemplate from "@/emails"; // Ensure this path is correct
import { Resend } from "resend";

const resend = new Resend(process.env.EMAIL_API_KEY);

export async function POST(request) {
    try {
        // Parse the JSON request body
        const { firstName, email, phone, address, serviceType, date, message } = await request.json();
        
        // const emailList = [email,"rijalmanoj07@gmail.com"];
        
        // Send the email using Resend
        await resend.emails.send({
            from: 'capablehvac.com',
            to: email,
            bcc:"capableservicehvac@gmail.com",
            subject: 'HVAC Request Confirmed',
            reply_to:"support@capablehvac.com",
            react: ContactEmailTemplate({ firstName, phone, address, serviceType, date, message, email }),
        });
        
        // Return a success response
        return new Response(JSON.stringify({ success: true, message: 'Email sent successfully' }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('Error sending email:', error);
        
        // Return an error response
        return new Response(JSON.stringify({ success: false, message: error.message || 'Failed to send email' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}