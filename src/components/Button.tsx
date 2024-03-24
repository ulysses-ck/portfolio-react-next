"use client";

export default function Button({ message }: { message: string }) {
	const handleOnClick = () => {
		console.log(message);
	};
	return (
		<button
			onClick={handleOnClick}
			className="border rounded-md border-blue-tertiary p-4"
		>
			{message}
		</button>
	);
}
