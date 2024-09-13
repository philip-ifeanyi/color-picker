import React from "react";

interface CustomRadioProps {
	id: string;
	name: string;
	value: string;
	label: string;
	checked: boolean;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomRadio: React.FC<CustomRadioProps> = ({
	id,
	name,
	value,
	label,
	checked,
	onChange,
}) => {
	return (
		<div className="relative flex items-center">
			<input
				type="radio"
				id={id}
				name={name}
				value={value}
				checked={checked}
				onChange={onChange}
				className="sr-only"
			/>
			<label
				htmlFor={id}
				className={`
          flex flex-row-reverse items-center justify-between w-full cursor-pointer p-4 rounded-2xl transition-colors gap-4
          ${
						checked
							? "bg-[#550066] text-[#FBE5FF]"
							: "bg-[#FBE5FF] text-[#550066]"
					}
        `}
			>
				<span
					className={`
            w-4 h-4 mr-2 rounded-full border-2 border-[#FFD080] inline-block
            ${checked ? "bg-[#FFD080]" : "bg-transparent"}
          `}
				>
					{checked && (
						<span className="block w-2 h-2 mt-0.5 ml-0.5 rounded-full bg-[#550066]" />
					)}
				</span>
				{label}
			</label>
		</div>
	);
};

export default CustomRadio;
