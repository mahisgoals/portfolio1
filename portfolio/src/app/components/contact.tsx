'use client'
import Link from "next/link";
import { sendEmail } from '../actions/sendEmail';
import SubmitButton from "./submitButton";



export default function Contact() {

    return (
        <section id="contact" className="min-h-screen bg-main px-12 pt-20 pb-20">
            <h2 className="mb-4 text-2xl text-center text-white">Contact Me</h2>
            <p className="mb-8 lg:mb-16 font-light text-center text-white text-small">
                Have a question? Want to send me some feedback? Let me know. You can also find me on{" "}
                <Link href="https://uk.linkedin.com/in/mahi-sheraj-939412229" target="_blank">
                    <span className="text-pink">LinkedIn.</span>
                </Link>
            </p>
            <div className="p-8 md:p-16 px-4 md:px-8 mx-auto max-w-screen-md bg-black rounded-xl shadow-2xl">
            <form action={async (formData) => {
                    const result = await sendEmail(formData); // Get the result

                    // Destructure data and error from the result
                    const { data, error } = result;

                    if (error) {
                        alert(error);
                        return;
                    }
                    
                    alert('Email sent successfully!');
                    }} className="space-y-6">
                    <div className="grid md:grid-cols-2 md:gap-6 space-y-6 md:space-y-0">
                        <div>
                            <label htmlFor="firstName" className="block mb-2 text-small text-white">First name</label>
                            <input name="firstName" type="text" id="firstName" className="block p-2.5 w-full text-small text-gray-900 bg-gray-200 rounded-lg shadow-sm focus:ring-1 focus:outline-none focus:ring-pink" placeholder="Uncle" required />
                        </div>
                        <div>
                            <label htmlFor="lastName" className="block mb-2 text-small text-white">Last name</label>
                            <input name="lastName" type="text" id="lastName" className="block p-2.5 w-full text-small text-gray-900 bg-gray-200 rounded-lg shadow-sm focus:ring-1 focus:outline-none focus:ring-pink" placeholder="Iroh" required />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-small text-white">Your email</label>
                        <input name="email" type="email" id="email" className="block p-2.5 w-full text-small text-gray-900 bg-gray-200 rounded-lg shadow-sm focus:ring-1 focus:outline-none focus:ring-pink" placeholder="iroh@example.com" required />
                    </div>
                    <div>
                        <label htmlFor="message" className="block mb-2 text-small text-white">Your message</label>
                        <textarea name="message" id="message" required={true} maxLength={5000} className="block p-2.5 w-full text-small text-gray-900 bg-gray-200 rounded-lg shadow-sm focus:ring-1 focus:outline-none focus:ring-pink" placeholder="Leave a comment..."></textarea>
                    </div>
                    <SubmitButton/>
                </form>
            </div>
        </section>
    )
}
