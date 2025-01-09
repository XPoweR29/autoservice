'use client'

import React from 'react';
import { Map } from '../Map/Map';

import styles from '../../sections/Contact/Contact.module.scss';

import icon_phone from '../../assets/icons/icon_phone-wihte.svg';
import icon_location from '../../assets/icons/icon_location.svg';
import icon_envelope from '../../assets/icons/icon_envelope.svg';
import icon_clock from '../../assets/icons/icon_clock.svg';
import { useBreakpoints } from '@/hooks/useBreakpoint';
export const Info_Map = () => {
  const { breakpoint } = useBreakpoints();

	return (
		<div className={styles['flex_info-map']}>
			<div className={styles.contact_info}>
				<a
					href='https://www.google.com/maps/place/Auto+Serwis+Kania/@49.9599466,19.1593943,157m/data=!3m1!1e3!4m6!3m5!1s0x471697190ce1fbad:0x90aeddb7f944beb1!8m2!3d49.960031!4d19.159696!16s%2Fg%2F11qqr29mzj?entry=ttu&g_ep=EgoyMDI1MDEwMi4wIKXMDSoASAFQAw%3D%3D'
					target='_blank'
					rel='noopener noreferrer'
					className={styles.item}>
					<img src={icon_location.src} alt='lokalizacja' aria-hidden />
					<p>ul. Łęcka 80/1, 32-262 Jawiszowice</p>
				</a>
				<a href='tel:+48505268300' className={styles.item}>
					<img src={icon_phone.src} alt='telefon' aria-hidden />
					<p>+48 505-268-300</p>
				</a>
				<a href='mailto:auto.serwis.kania@interia.pl' className={styles.item}>
					<img src={icon_envelope.src} alt='email' aria-hidden />
					<p>auto.serwis.kania@interia.pl</p>
				</a>
				<div className={styles.item}>
					<img src={icon_clock.src} alt='godziny otwarcia' aria-hidden />
					<p>PN - PT · 09:00 - 17:00</p>
				</div>
			</div>

			{breakpoint.lg && <Map className={styles.map} />}
		</div>
	);
};
