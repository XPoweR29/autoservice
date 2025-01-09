import React from 'react';

interface Props {
    className?: string;
}
export const Map = ({ className }: Props) => {
	return (
		<iframe
            className={className}
			src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3158.2897607300742!2d19.157121076894967!3d49.9600344225529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471697190ce1fbad%3A0x90aeddb7f944beb1!2sAuto%20Serwis%20Kania!5e1!3m2!1spl!2spl!4v1736358461721!5m2!1spl!2spl'
			allowFullScreen
			loading='lazy'
			referrerPolicy='no-referrer-when-downgrade'></iframe>
	);
};
