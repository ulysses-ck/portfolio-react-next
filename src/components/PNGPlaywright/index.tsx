import Image from "next/image";
import playwrightLogo from "../../../public/playwright-logo.png";

export default function PNGPlaywright() {
	return (
		<Image
			src={playwrightLogo.src}
			width={500}
			height={500}
			alt="Logo of playwright framework"
		/>
	);
}
