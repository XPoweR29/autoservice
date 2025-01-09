import React from 'react';
import { Wrapper } from '@/components/Wrapper/Wrapper';
import Link from 'next/link';

import styles from './Footer.module.scss';

import logo from '../../assets/logo_white.svg';
import dev_logo from '../../assets/dev_logo.svg';
import img_gears from '../../assets/img_gears.svg';

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<Wrapper className={styles.wrapper}>
				<div className={styles.flex_container}>
					<div className={styles.item_logo}>
						<Link href='/#start' className={styles.logo}>
							<img src={logo.src} alt='Kania Autoserwis' />
						</Link>
						<p className={styles.text}>
							Profesjonalny serwis samochodowy z 30-letnim doświadczeniem. Dbamy
							o Twój samochód z pasją i precyzją.
						</p>
					</div>

					<div className={styles.item_contact}>
						<h3 className={styles.title}>Kontakt</h3>
						<a href='tel:+48515268300'>+48 515-268-300</a>
						<a href='mailto:auto.serwis.kania@interia.pl'>
							auto.serwis.kania@interia.pl
						</a>
						<a
							href='https://www.google.com/maps/place/Auto+Serwis+Kania/@49.9599466,19.1593943,157m/data=!3m1!1e3!4m6!3m5!1s0x471697190ce1fbad:0x90aeddb7f944beb1!8m2!3d49.960031!4d19.159696!16s%2Fg%2F11qqr29mzj?entry=ttu&g_ep=EgoyMDI1MDEwMi4wIKXMDSoASAFQAw%3D%3D'
							target='_blank'
							rel='noopener noreferrer'>
							ul. Łęcka 80/1, 32-626 Jawiszowice{' '}
						</a>
						<span>PN - PT · 09:00 - 17:00</span>
					</div>

					<div className={styles.item_policy}>
						<Link href='/polityka-prywatnosci'>Polityka Prywatności</Link>
						<p>© {new Date().getFullYear()} Kania Autoserwis</p>
					</div>
				</div>

				<div className={styles.dev_sign}>
					<p>Designed & Developed by</p>
					<a
						href='https://webcraft-studio.pl/'
						target='_blank'
						aria-label='strona webcraft-studio'
						title='Zamów własną stronę internetową!'
						rel='noopener noreferrer'>
						<img src={dev_logo.src} alt='webcraft studio logo ' />
					</a>
				</div>
			</Wrapper>
			<img src={img_gears.src} className={styles.img_gears} alt='' aria-hidden />
		</footer>
	);
};
