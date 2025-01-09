import React from 'react';
import { Wrapper } from '@/components/Wrapper/Wrapper';
import { ContactForm } from '@/components/ContactForm/ContactForm';

import styles from './Contact.module.scss';


import divider from '../../assets/divider_footer.svg';
import bg_tiles from '../../assets/background_tiles.svg';
import { Map } from '@/components/Map/Map';
import { Info_Map } from '@/components/Info_Map/Info_Map';

export const Contact = () => {
	return (
		<section className={styles.contact} id='kontakt'>
			<Wrapper className={styles.wrapper}>
				<h2 className={styles.heading}>
					Masz pytania? <span>Jesteśmy tutaj, aby Ci pomóc</span>
				</h2>
				<p className={styles.text}>
					Niezależnie od tego, czy masz pytania, chcesz umówić wizytę, czy
					potrzebujesz natychmiastowej pomocy – jesteśmy do Twojej dyspozycji.
					Skontaktuj się z nami telefonicznie, mailowo lub odwiedź nas
					osobiście.
				</p>

				<div className={styles['flex_form-info']}>

					<ContactForm />
          <Info_Map/>
				</div>
			</Wrapper>
			<img src={bg_tiles.src} className={styles.bg_tiles} alt='' aria-hidden />
			<img src={divider.src} className={styles.divider} alt='' aria-hidden />
		</section>
	);
};
