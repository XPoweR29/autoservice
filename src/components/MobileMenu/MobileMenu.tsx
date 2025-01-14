'use client';
import React, { useContext } from 'react';

import styles from './MobileMenu.module.scss';
import Link from 'next/link';
import { AppContext } from '@/contexts/app.context';
import { useBreakpoints } from '@/hooks/useBreakpoint';
import gears from '../../assets/img_gears.svg';
import Image from 'next/image';

export const MobileMenu = () => {
	const { breakpoint } = useBreakpoints();
	const { mobileMenuShown, setMobileMenuShown } = useContext(AppContext)!;

	const handleClick = () => {
		setMobileMenuShown(false);
	};

	return (
		<>
			{!breakpoint.md ? (
				<nav
					className={`${styles.mobileMenu} ${
						mobileMenuShown && styles['mobileMenu--active']
					}`}
					aria-hidden={!mobileMenuShown}
					inert={!mobileMenuShown}
					aria-label='Menu główne'>
					<ul>
						<li>
							<Link href='/' onClick={handleClick}>
								Start
							</Link>
						</li>
						<li>
							<Link href='/#o-nas' onClick={handleClick}>
								O nas
							</Link>
						</li>
						<li>
							<Link href='/#uslugi' onClick={handleClick}>
								Usługi
							</Link>
						</li>
						<li>
							<Link href='/#kontakt' onClick={handleClick}>
								Kontakt
							</Link>
						</li>
					</ul>

					<Image className={styles.img_gears} src={gears} alt='' aria-hidden/>
				</nav>
			) : null}
		</>
	);
};
