import { colors } from "@/libs/data";
import ColorCard from "@/components/ColorCard";
import Swiper from "@/components/Swiper";

const ColorList = () => {
	const cards = colors.map((color, index) => (
		<ColorCard
			key={index}
			color={color.color}
			code={color.code}
			imageSrc={color.imageSrc}
			details={color.details}
		/>
	));
	return (
		<div className="relative mt-6">
			<h2 className="text-black font-bold absolute -top-12 left-0 text-xl">
				My Color List
			</h2>
			<Swiper cards={cards} />
		</div>
	);
};

export default ColorList;
