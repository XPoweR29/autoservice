import React from 'react'

import styles from './ContactForm.module.scss';

export const ContactForm = () => {
  return (
		<form className={styles.form}>
			<input name='name' type='text' placeholder='Imię' />
			<input name='email' type='email' placeholder='Email' />
			<textarea name='message' placeholder='Wiadomość'></textarea>
			<button type='submit'>wyślij</button>
		</form>
	);
}
