import React from 'react'
import star from '../../assets/icons/star.svg';

interface Props {
    className?: string;
}
export const Rating = ({ className }: Props) => {
  return (
		<div className={className}>
			<img src={star.src} alt='' aria-hidden />
			<img src={star.src} alt='' aria-hidden />
			<img src={star.src} alt='' aria-hidden />
			<img src={star.src} alt='' aria-hidden />
			<img src={star.src} alt='' aria-hidden />
		</div>
	);
}
