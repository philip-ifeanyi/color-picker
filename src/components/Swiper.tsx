import React, { useEffect, useRef } from "react";
import Swiper from "swiper";
import { Autoplay } from "swiper/modules";
import "swiper/css";

interface CardProps {
	children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => (
	<div className="swiper-slide">
		<div>{children}</div>
	</div>
);

interface SwiperComponentProps {
	cards: React.ReactNode[];
}

const SwiperComponent: React.FC<SwiperComponentProps> = ({ cards }) => {
	const swiperRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!swiperRef.current) return;

		const swiper = new Swiper(swiperRef.current, {
			modules: [Autoplay],
			slidesPerView: 1,
			spaceBetween: 20,
			loop: true,
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			breakpoints: {
				640: {
					slidesPerView: 2,
				},
				1024: {
					slidesPerView: 3,
				},
				1280: {
					slidesPerView: 4,
				},
			},
		});

		return () => {
			swiper.destroy(true, true);
		};
	}, []);

	return (
		<div className="swiper-container">
			<div ref={swiperRef} className="swiper">
				<div className="swiper-wrapper">
					{cards.map((card, index) => (
						<Card key={index}>{card}</Card>
					))}
				</div>
			</div>
		</div>
	);
};

export default SwiperComponent;
