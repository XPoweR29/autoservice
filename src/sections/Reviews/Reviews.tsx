'use client';

import React, {useEffect, useRef} from 'react';
import { Wrapper } from '@/components/Wrapper/Wrapper';
import { CtaButton } from '@/components/CtaButton/CtaButton';

import styles from './Reviews.module.scss';

import icon_phone from '../../assets/icons/icon_phone.svg';
import { ReviewSwiper } from '@/components/ReviewSwiper/ReviewSwiper';

export const Reviews = () => {
	const parallaxRef = useRef<HTMLDivElement>(null);
	const bgPosition = '50%';

	useEffect(() => {
		function handleScroll() {
			const offset = window.scrollY;
			parallaxRef.current!.style.backgroundPositionY = `calc(${bgPosition} + ${
				offset * 0.5
			}px)`;
		}

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<section className={styles.reviews} id='opinie'>
			<div
				ref={parallaxRef}
				className={styles.reviews__background}
				style={{ backgroundPositionY: `${bgPosition}` }}
			/>
			<Wrapper className={styles.wrapper}>
				<h2 className={styles.heading}>
					Zaufaj fachowcom, którzy wiedzą jak zapewnić niezawodność
				</h2>

				<ReviewSwiper />
				<CtaButton className={styles.ctaBtn} icon={icon_phone.src}>
					Umów wiztyę
				</CtaButton>
			</Wrapper>
		</section>
	);
};
