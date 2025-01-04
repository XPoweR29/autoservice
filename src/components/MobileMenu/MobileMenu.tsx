import React, { useContext } from 'react';

import styles from './MobileMenu.module.scss';
import Link from 'next/link';
import { AppContext } from '@/contexts/app.context';

export const MobileMenu = () => {
	const { mobileMenuShown, setMobileMenuShown } = useContext(AppContext)!;

    const handleClick = () => {
        setMobileMenuShown(false);
    }

	return (
		<nav
			className={`${styles.mobileMenu} ${mobileMenuShown && styles['mobileMenu--active']}`}
            aria-hidden={!mobileMenuShown}
            aria-label='Menu główne'
        >
            <ul>
                <li><Link href='/' onClick={handleClick}>Start</Link></li>
                <li><Link href='/#o-nas' onClick={handleClick}>O nas</Link></li>
                <li><Link href='/#uslugi' onClick={handleClick}>Usługi</Link></li>
                <li><Link href='/#kontakt' onClick={handleClick}>Kontakt</Link></li>
            </ul>
		</nav>
	);
};
