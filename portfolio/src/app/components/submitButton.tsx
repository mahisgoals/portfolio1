import React from "react"
import {useFormStatus } from "react-dom";

export default function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        <button type="submit" className="py-2.5 px-5 text-small font-medium text-center text-white rounded-lg bg-pink hover:bg-pink-700 focus:ring-4 focus:outline-none focus:ring-pink" disabled={pending}> {pending ? <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white "></div> : "Send message"}</button>

    )
}