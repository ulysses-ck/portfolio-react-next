export default function FormContact({
	sendMessage,
}: {
	sendMessage: (formData: FormData) => Promise<void>;
}) {
	return (
		<form action={sendMessage} className="flex flex-col items-center gap-4">
			<label htmlFor="name" className="w-full h-fit">
				<input
					className="w-full rounded-[30px] h-10 px-4"
					type="text"
					name="name"
					id="name"
					placeholder="Name"
				/>
			</label>
			<label htmlFor="message" className="w-full h-full">
				<textarea
					className="rounded-[30px] w-full h-[200px] px-4 py-2"
					placeholder="Message"
					name="message"
					id="message"
				></textarea>
			</label>
			<button
				type="submit"
				className="w-fit h-fit p-2 bg-light-blue-tertiary text-white dark:bg-blue-tertiary rounded-[30px]"
			>
				Submit
			</button>
		</form>
	);
}
