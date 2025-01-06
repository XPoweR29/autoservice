import React from 'react';
import Image from 'next/image';
import { Wrapper } from '@/components/Wrapper/Wrapper';
import { Feature } from '@/components/Feature/Feature';

import styles from './Offer.module.scss';

import icon_experience from '../../assets/icons/feature_experience.svg';
import icon_diagnostic from '../../assets/icons/feature_diagnostic.svg';
import icon_time from '../../assets/icons/feature_fast.svg';
import section_img from '../../assets/about_img.webp';

export const Offer = () => {
	return (
		<section className={styles.offer} id='oferta'>
			<Wrapper className={styles.wrapper}>
				<h2 className={styles.heading}>Dlaczego warto nam zaufać?</h2>
				<p className={styles.text}>
					Jesteśmy zespołem doświadczonych mechaników, dla których samochody to
					pasja i codzienna praca. Od lat dbamy o bezpieczeństwo i komfort
					naszych klientów, oferując kompleksowe naprawy, diagnostykę oraz
					serwis pojazdów. Naszą misją jest szybka i skuteczna pomoc w każdej
					sytuacji.
				</p>

                <div className={styles.flex_box}>
					<div className={styles.feature_container}>
						<Feature icon={icon_experience.src}>Doświadczenie i Profesjonalizm</Feature>
						<Feature icon={icon_diagnostic.src}>Szczegółowa diagnostyka</Feature>
						<Feature icon={icon_time.src}>Szybka realizacja</Feature>
					</div>

					<Image className={styles.section_img} src={section_img} alt='' aria-hidden/>
				</div>
        
			</Wrapper>
		</section>
	);
};
