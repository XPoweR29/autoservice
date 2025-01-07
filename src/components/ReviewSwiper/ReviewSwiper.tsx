'use client'

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay } from 'swiper/modules';
import { Rating } from '../Rating/Rating';

import styles from './ReviewSwiper.module.scss';
import 'swiper/css';

import reviewJson from '../../assets/reviews.json';
import google from '../../assets/google_sign.svg';
import quote from '../../assets/icons/quote.svg';

export const ReviewSwiper = () => {
    const reviews: Review[] = reviewJson;

	return (
		<Swiper
			className={styles.swiper}
			modules={[A11y, Autoplay]}
			spaceBetween={40}
			slidesPerView={1}
			autoplay={{
				delay: 5000,
			}}
			loop={true}>
			{reviews.map(({ author, comment }, index) => (
				<SwiperSlide key={index}>
					<div className={styles.card}>
						<div className={styles.top_row}>
							<div className={styles.author}>
								<div className={styles.photo}>M</div>
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
