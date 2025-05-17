"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import CustomButton from "./CustomButton";
import { toast } from "react-toastify";

const ContactForm = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.currentTarget;
		setFormData((prevData) => ({ ...prevData, [name]: value }));
	};

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();

		if (
			!formData.name ||
			!formData.email ||
			!formData.subject ||
			!formData.message
		) {
			toast.error("All fields are required!");
			return;
		}

		console.log(formData);
		toast.success("Message submitted successfully");
		setFormData({
			name: "",
			email: "",
			subject: "",
			message: "",
		});
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="h-auto w-auto rounded-2xl bg-white px-10 py-10"
		>
			<div className="">
				<h2 className="text-2xl font-bold">Connect with Me</h2>
			</div>

			<div className="mt-4 flex flex-col gap-2">
				<label htmlFor="name" className="font-bold text-lg">
					Name
				</label>
				<input
					type="text"
					id="name"
					name="name"
					placeholder="Enter your name"
					className="h-[50px] w-full px-4 rounded-3xl bg-customGray"
					value={formData.name}
					onChange={handleChange}
				/>
			</div>
			<div className="mt-4 flex flex-col gap-2">
				<label htmlFor="email" className="font-bold text-lg">
					Email
				</label>
				<input
					type="email"
					id="email"
					name="email"
					placeholder="Enter your email address"
					className="h-[50px] w-full px-4 rounded-3xl bg-customGray"
					value={formData.email}
					onChange={handleChange}
				/>
			</div>
			<div className="mt-4 flex flex-col gap-2">
				<label htmlFor="subject" className="font-bold text-lg">
					Subject
				</label>
				<input
					type="text"
					id="subject"
					name="subject"
					placeholder="Enter Subject"
					className="h-[50px] w-full px-4 rounded-3xl bg-customGray"
					value={formData.subject}
					onChange={handleChange}
				/>
			</div>
			<div className="mt-4 flex flex-col gap-2">
				<label htmlFor="message" className="font-bold text-lg">
					Message
				</label>
				<textarea
					id="message"
					name="message"
					placeholder="Enter your message"
					className="w-full py-5 px-5 rounded-3xl bg-customGray resize-none"
					cols={5}
					rows={5}
					value={formData.message}
					onChange={handleChange}
				/>
			</div>
			<div className="mt-4 ">
				<CustomButton
					btnType="submit"
					btnStyles="mx-auto md:mx:0 mt-5 w-[157px] h-[52px] hover:border-[2px] hover:border-customGreen hover:bg-white rounded-3xl cursor-pointer text-white hover:text-customGreen font-medium bg-customGreen transition-all duration-500 ease-in-out"
					btnTitle="Subscribe"
				/>
			</div>
		</form>
	);
};

export default ContactForm;
