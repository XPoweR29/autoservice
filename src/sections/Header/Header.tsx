'use client'

import React, { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BurgerBtn } from '@/components/BurgerBtn/BurgerBtn';
import { Wrapper } from '@/components/Wrapper/Wrapper';

import styles from './Header.module.scss';
import logo from '../../assets/logo.svg';
import { useBreakpoints } from '@/hooks/useBreakpoint';
import { LinkBar } from '@/components/LinkBar/LinkBar';
import { AppContext } from '@/contexts/app.context';
import { MobileMenu } from '@/components/MobileMenu/MobileMenu';

export const Header = () => {
	const { breakpoint } = useBreakpoints();
	const { mobileMenuShown } = useContext(AppContext)!;

	return (
		<header className={styles.header}>
			<Wrapper className={styles.wrapper}>
				<Link href='/'>
					<Image src={logo} alt='logo' />
				</Link>

				{breakpoint.md?<LinkBar/>:<BurgerBtn className={styles.burgerBtn}/>}
				{!breakpoint.md && <MobileMenu/>}
			</Wrapper>
		</header>
	);
};
