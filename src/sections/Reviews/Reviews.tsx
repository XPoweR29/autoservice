import React from 'react';
import { Wrapper } from '@/components/Wrapper/Wrapper';
import { CtaButton } from '@/components/CtaButton/CtaButton';

import styles from './Reviews.module.scss';

import icon_phone from '../../assets/icons/icon_phone.svg';
import { ReviewSwiper } from '@/components/ReviewSwiper/ReviewSwiper';



export const Reviews = () => {
	return (
		<section className={styles.reviews} id='opinie'>
			<Wrapper className={styles.wrapper}>
				<h2 className={styles.heading}>
					Zaufaj fachowcom, którzy wiedzą jak zapewnić niezawodność
				</h2>

                <ReviewSwiper/>
				<CtaButton className={styles.ctaBtn} icon={icon_phone.src}>Umów wiztyę</CtaButton>
			</Wrapper>
		</section>
	);
};
