export default function SvgComponent({ ...props }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={120}
			height={60}
			className="bg-white"
			viewBox="0 0 120 60"
			{...props}
		>
			<title>{"Netlify"}</title>
			<defs>
				<radialGradient
					id="a"
					cx={52.528}
					cy={-49.92}
					r={104.617}
					fx={52.528}
					fy={-49.92}
					gradientTransform="matrix(.32799 0 0 .32882 6.71 12.102)"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0%" stopColor="#20C6B7" />
					<stop offset="100%" stopColor="#4D9ABF" />
				</radialGradient>
			</defs>
			<path
				d="m50.319 25.029.084 1.501c.957-1.161 2.213-1.742 3.769-1.742 2.695 0 4.067 1.55 4.115 4.648v8.586H55.38v-8.418c0-.824-.178-1.434-.533-1.831-.354-.396-.935-.594-1.74-.594-1.173 0-2.047.533-2.62 1.597v9.246h-2.907V25.03h2.74zm16.63 13.234c-1.842 0-3.336-.582-4.48-1.747-1.145-1.165-1.717-2.716-1.717-4.654v-.36c0-1.296.249-2.456.748-3.476.498-1.02 1.198-1.815 2.1-2.384.9-.568 1.905-.852 3.014-.852 1.762 0 3.125.564 4.085 1.693.962 1.129 1.442 2.725 1.442 4.791v1.177h-8.459c.09 1.073.445 1.921 1.071 2.546.627.624 1.415.936 2.363.936 1.332 0 2.417-.54 3.254-1.621l1.567 1.502a5.244 5.244 0 0 1-2.075 1.806c-.866.429-1.836.643-2.913.643zm-.347-11.131c-.798 0-1.441.28-1.932.84-.49.56-.803 1.34-.94 2.342h5.54v-.217c-.064-.977-.323-1.715-.778-2.215-.455-.5-1.084-.75-1.89-.75zm11.437-5.26v3.157h2.285v2.162h-2.285v7.253c0 .496.098.854.293 1.074.195.22.544.33 1.047.33a4.462 4.462 0 0 0 1.016-.12v2.258c-.661.184-1.3.276-1.914.276-2.232 0-3.35-1.237-3.35-3.71V27.19h-2.13V25.03h2.13V21.87h2.906zm7.597 16.15h-2.908V19.579h2.908zm6.257 0h-2.908V25.03h2.908zm-3.087-16.367c0-.448.141-.82.424-1.116.284-.296.688-.445 1.214-.445.527 0 .934.149 1.221.445.287.296.43.668.43 1.116 0 .44-.143.807-.43 1.099-.287.292-.694.439-1.22.439-.527 0-.931-.147-1.215-.44-.283-.29-.424-.658-.424-1.098zm7.274 16.368V27.19h-1.975V25.03h1.975V23.84c0-1.441.398-2.553 1.195-3.338.799-.785 1.915-1.177 3.35-1.177.51 0 1.053.072 1.628.216l-.072 2.282c-.367-.068-.74-.1-1.113-.096-1.388 0-2.082.716-2.082 2.15v1.152h2.632v2.161h-2.632v10.832H96.08zm12.19-4.179 2.632-8.815H114l-5.143 14.963c-.79 2.186-2.13 3.279-4.02 3.279-.423 0-.89-.073-1.4-.217v-2.258l.55.037c.734 0 1.286-.134 1.657-.403.37-.268.664-.718.88-1.35l.418-1.117-4.546-12.934h3.134z"
				style={{
					fill: "#0e1e25",
					fillRule: "nonzero",
					stroke: "none",
					strokeWidth: 0.2506941,
				}}
				transform="matrix(.96976 0 0 .96976 1.414 .907)"
			/>
			<path
				d="m31.63 24.751-.013-.005c-.007-.003-.014-.006-.02-.012a.099.099 0 0 1-.025-.083l.69-4.23 3.24 3.245-3.37 1.436a.07.07 0 0 1-.029.005h-.013a.102.102 0 0 1-.018-.015 1.534 1.534 0 0 0-.442-.341zm4.698-.258 3.464 3.469c.72.721 1.08 1.08 1.21 1.498.02.062.036.123.049.187l-8.278-3.51a.22.22 0 0 0-.013-.006c-.033-.013-.071-.029-.071-.063s.039-.05.072-.063l.01-.005zm4.582 6.267c-.179.337-.527.686-1.117 1.277l-3.905 3.91-5.051-1.053-.027-.006c-.045-.007-.092-.015-.092-.055a1.527 1.527 0 0 0-.585-1.068c-.02-.02-.015-.052-.01-.082 0-.004 0-.009.003-.013l.95-5.84.003-.02c.005-.044.014-.096.054-.096a1.545 1.545 0 0 0 1.036-.595c.008-.009.014-.019.024-.024.029-.014.063 0 .092.012l8.624 3.653zm-5.92 6.086-6.422 6.431 1.1-6.765.001-.01c0-.008.003-.017.005-.025.01-.022.032-.03.055-.04l.01-.004c.241-.103.454-.261.622-.463.021-.025.047-.049.08-.053a.08.08 0 0 1 .026 0l4.522.93zm-7.781 7.792-.724.725-8.002-11.582a.85.85 0 0 0-.01-.012c-.012-.017-.025-.034-.022-.054 0-.014.01-.027.02-.037l.008-.012c.024-.036.045-.072.067-.11l.018-.032.003-.002c.012-.022.024-.042.045-.054.02-.009.045-.005.066 0l8.865 1.83a.146.146 0 0 1 .068.03c.012.011.014.024.017.038.125.475.465.864.919 1.052.025.012.014.04.003.07a.209.209 0 0 0-.014.04c-.112.68-1.07 6.53-1.327 8.11zm-1.512 1.514c-.534.528-.848.809-1.204.921-.35.111-.727.111-1.078 0-.416-.132-.776-.492-1.495-1.213l-8.037-8.048 2.1-3.26c.01-.016.02-.03.035-.042.022-.016.055-.01.081 0 .482.145 1 .12 1.464-.074.024-.01.048-.016.067.001.01.009.018.019.025.029l8.042 11.686zm-12.588-9.116-1.844-1.846 3.64-1.555a.075.075 0 0 1 .03-.007c.03 0 .048.03.064.058.037.057.076.112.117.165l.011.014c.011.016.004.03-.007.045l-2.01 3.126zm-2.66-2.663-2.332-2.336c-.397-.397-.685-.685-.885-.933l7.092 1.473a.488.488 0 0 0 .027.004c.043.007.092.015.092.057 0 .044-.053.065-.098.082l-.02.009zm-3.624-4.47c.008-.15.035-.3.08-.443.132-.417.492-.777 1.212-1.498l2.985-2.99c1.374 1.998 2.752 3.993 4.133 5.985.024.032.051.068.024.095-.13.144-.261.302-.353.472a.143.143 0 0 1-.045.056c-.012.007-.024.004-.038.002h-.001l-7.997-1.68Zm5.075-5.73 4.012-4.02c.378.166 1.751.747 2.978 1.266.93.394 1.777.752 2.043.868.027.011.051.022.063.049.007.016.003.036 0 .053-.13.59.046 1.204.467 1.636.027.027 0 .066-.023.099l-.013.018-4.075 6.321a.124.124 0 0 1-.038.045c-.021.013-.052.007-.077 0a2.03 2.03 0 0 0-.485-.065 2.67 2.67 0 0 0-.467.056c-.018.003-.034.006-.049-.004a.188.188 0 0 1-.04-.046L11.9 24.173zm4.824-4.83 5.196-5.204c.719-.72 1.08-1.08 1.495-1.212.351-.111.728-.111 1.078 0 .417.131.777.492 1.496 1.212l1.126 1.128-3.695 5.73a.138.138 0 0 1-.037.044c-.022.015-.053.009-.08 0a1.872 1.872 0 0 0-1.716.33c-.024.026-.06.012-.09-.002-.483-.21-4.236-1.799-4.773-2.027zm11.176-3.29 3.411 3.416-.822 5.1v.013a.12.12 0 0 1-.007.034c-.009.018-.027.021-.045.027a1.634 1.634 0 0 0-.507.26c-.01.01-.02.02-.036.022a.1.1 0 0 1-.038-.007l-5.2-2.212-.01-.004c-.032-.014-.072-.03-.072-.064-.03-.29-.125-.57-.277-.819-.025-.04-.052-.084-.03-.126zm-3.514 7.701 4.874 2.067c.027.013.056.024.068.052a.094.094 0 0 1 0 .051 1.214 1.214 0 0 0-.027.236v.136c0 .034-.035.049-.067.062l-.01.004c-.772.33-10.84 4.629-10.855 4.629-.015 0-.031 0-.046-.015-.027-.027 0-.065.024-.099a.646.646 0 0 0 .012-.018l4.005-6.21.008-.01c.023-.038.05-.08.093-.08l.04.006c.091.012.171.024.253.024.607 0 1.17-.296 1.51-.803a.143.143 0 0 1 .03-.036c.024-.017.06-.008.088.004zm-5.582 8.22 10.974-4.687s.016 0 .031.015c.06.06.111.1.16.138l.024.015c.023.013.045.027.047.05 0 .01 0 .015-.002.023l-.94 5.783-.004.023c-.006.045-.012.096-.054.096a1.545 1.545 0 0 0-1.227.758l-.004.007c-.013.02-.025.04-.045.05-.019.01-.043.006-.063.002l-8.75-1.808c-.01-.002-.137-.464-.147-.465z"
				style={{
					fill: "url(#a)",
					fillRule: "nonzero",
					stroke: "none",
					strokeWidth: 0.32840267,
				}}
				transform="matrix(.96976 0 0 .96976 1.414 .907)"
			/>
		</svg>
	);
}
