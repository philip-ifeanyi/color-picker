import React from "react";

type ButtonVariant = "primary" | "secondary" | "white";
type ButtonSize = "base" | "small";

interface CustomButtonProps {
	variant: ButtonVariant;
	size?: ButtonSize;
	onClick: () => void;
	children: React.ReactNode;
	className?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
	variant,
	size = "base",
	onClick,
	children,
	className = "",
}) => {
	const baseStyles = "rounded-lg font-medium focus:outline-none";

	const variantStyles = {
		primary: "bg-[#550066] text-[#FFD080]",
		secondary: "bg-[#FBE5FF] text-[#550066]",
		white: "bg-white text-[#550066]",
	};

	const sizeStyles = {
		base: "w-[104px] h-[35px] text-sm",
		small: "w-[72px] h-[28px] text-[10px]",
	};

	const buttonStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

	return (
		<button className={buttonStyles} onClick={onClick}>
			{children}
		</button>
	);
};

export default CustomButton;
