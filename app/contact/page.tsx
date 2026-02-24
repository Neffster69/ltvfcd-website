"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"

export default function Contact() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm()
    const [submitted, setSubmitted] = useState(false)

    const onSubmit = async (data: any) => {
        const res = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        if (res.ok) {
            setSubmitted(true)
            reset()
        }
    }

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <h1 className="text-3xl mb-6">Contact Us</h1>
            {submitted ? (
                <p className="text-green-600">Thank you for your message. We will get back to you soon.</p>
            ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded shadow max-w-md">
                    <div className="mb-4">
                        <label className="block">Name</label>
                        <input {...register("name", { required: true })} className="w-full p-2 border" />
                        {errors.name && <p className="text-red-500">Name required</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block">Email</label>
                        <input {...register("email", { required: true })} type="email" className="w-full p-2 border" />
                        {errors.email && <p className="text-red-500">Email required</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block">Message</label>
                        <textarea {...register("message", { required: true })} className="w-full p-2 border" rows={4}></textarea>
                        {errors.message && <p className="text-red-500">Message required</p>}
                    </div>
                    <button type="submit" className="bg-blue-500 text-white p-2 w-full">Send</button>
                </form>
            )}
        </div>
    )
}