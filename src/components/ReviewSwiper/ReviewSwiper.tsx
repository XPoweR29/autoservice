'use client'

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay } from 'swiper/modules';
import { Rating } from '../Rating/Rating';
import { useBreakpoints } from '@/hooks/useBreakpoint';

import styles from './ReviewSwiper.module.scss';
import 'swiper/css';

import reviewJson from '../../assets/reviews.json';
import google from '../../assets/google_sign.svg';
import quote from '../../assets/icons/quote.svg';
import user_img from '../../assets/user_img.svg';

export const ReviewSwiper = () => {
	const { breakpoint } = useBreakpoints();
    const reviews: Review[] = reviewJson;

	return (
		<Swiper
			className={styles.swiper}
			modules={[A11y, Autoplay]}
			spaceBetween={40}
			slidesPerView={breakpoint.xl ? 3 : (breakpoint.md ? 2 : 1)}
			autoplay={{
				delay: 5000,
			}}
			loop={true}>
			{reviews.map(({ author, comment }, index) => (
				<SwiperSlide key={index}>
					<div className={styles.card}>
						<div className={styles.top_row}>
							<div className={styles.author}>
								<img src={user_img.src} className={styles.photo} alt="ikona użytkownika" aria-hidden/>
								<div className={styles.name}>
									<span className={styles.name}>{author}</span>
									<Rating className={styles.rating} />
								</div>
							</div>
							<img
								className={styles.quote_top}
								src={quote.src}
								alt=''
								aria-hidden
							/>
						</div>

						<p className={styles.comment}>{comment}</p>

						<div className={styles.bottom_row}>
							<img
								className={styles.quote_bottom}
								src={quote.src}
								alt=''
								aria-hidden
							/>
							<img
								className={styles.google_sign}
								src={google.src}
								alt=''
								aria-hidden
							/>
						</div>
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
};
