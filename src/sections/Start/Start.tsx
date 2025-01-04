import React from 'react';
import { Wrapper } from '@/components/Wrapper/Wrapper';

import icion_phone from '../../assets/icons/icon_phone.svg';
import img_cars from '../../assets/cars.webp';

import styles from './Start.module.scss';
import { CtaButton } from '@/components/CtaButton/CtaButton';
import Image from 'next/image';

export const Start = () => {
	return (
		<section className={styles.home} id='start'>
			<Wrapper className={styles.wrapper}>
				<h1 className={styles.heading}>
					Twoje Auto w <span>Dobrych Rękach</span>{' '}
				</h1>
				<p className={styles.text}>
					Profesjonalna diagnostyka, szybka naprawa i uczciwe podejście –
					wszystko w jednym miejscu. Zaufaj naszemu doświadczeniu i zadbaj o
					swoje auto bez stresu. Jesteśmy tu, abyś zawsze mógł ruszyć w drogę
					bez obaw.
				</p>

				<CtaButton icon={icion_phone.src}>umów wizytę</CtaButton>

				<Image className={styles.img_cars} src={img_cars} alt='grafika samochodów'/>
			</Wrapper>
		</section>
	);
};
