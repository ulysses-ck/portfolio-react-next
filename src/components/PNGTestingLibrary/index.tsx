import Image from "next/image";
import testingLibraryLogo from "../../../public/testing-library-logo.png";

export default function PNGTestingLibrary() {
	return (
		<Image
			src={testingLibraryLogo.src}
			width={500}
			height={500}
			alt="Logo of testing library framework"
		/>
	);
}
