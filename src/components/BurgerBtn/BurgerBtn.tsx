import { AppContext } from '@/contexts/app.context';
import React, { useContext } from 'react';

interface Props {
	className?: string;
}

export const BurgerBtn = ({ className }: Props) => {
	const {setMobileMenuShown, mobileMenuShown} = useContext(AppContext)!;

	const burgerHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		setMobileMenuShown(!mobileMenuShown);
	}

	return (
		<button className={`hamburger hamburger--slider ${className} ${mobileMenuShown&&'is-active'}`} type='button' onClick={burgerHandler} aria-label={mobileMenuShown?'Zamknij menu':'Otwórz menu'}>
			<span className='hamburger-box'>
				<span className='hamburger-inner'></span>
			</span>
		</button>
	);
};
