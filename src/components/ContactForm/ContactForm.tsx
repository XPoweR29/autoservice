'use client';

import React, { ChangeEvent, FormEvent, useRef, useState } from 'react';

import styles from './ContactForm.module.scss';
import { validateForm } from '@/utils/formValidation';
import Link from 'next/link';
export const ContactForm = () => {
	const checkboxRef = useRef<HTMLInputElement | null>(null);
	const [errors, setErrors] = useState<{ [key in keyof DataForm]?: string }>(
		{}
	);
	const [formData, setFormData] = useState<DataForm>({
		name: '',
		email: '',
		message: '',
	});

	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;

		setFormData({
			...formData,
			[name]: value,
		});

		setErrors((prev) => ({ ...prev, [name]: null }));
	};

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		try {
			if (!validateForm(formData, setErrors)) {
				throw new Error('Błąd walidacji danych formularza');
			}

			console.log('Wiadomość poprawnie wysłana!');

			// const response = await fetch(
			// 	'https://backendapp-gamma.vercel.app/api/send-mail',
			// 	{
			// 		method: 'POST',
			// 		headers: { 'Content-Type': 'application/json' },
			// 		body: JSON.stringify(formData),
			// 	}
			// );

			// if (response.ok) {
			// 	toast.success('Twoja wiadomość została wysłana', {
			// 		duration: 5000,
			// 		position: 'bottom-right',
			// 	});

			// 	setFormData({
			// 		name: '',
			// 		email: '',
			// 		message: '',
			// 	});
			// }
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<div className={styles.inputBox}>
				<input
					name='name'
					type='text'
					placeholder='Imię'
					required
					value={formData.name}
					onChange={handleChange}
				/>
				<p
					className={`${styles.error} ${
						errors.name && styles['error--active']
					}`}>
					{errors.name}
				</p>
			</div>

			<div className={styles.inputBox}>
				<input
					name='email'
					type='email'
					placeholder='Email'
					required
					value={formData.email}
					onChange={handleChange}
				/>
				<p
					className={`${styles.error} ${
						errors.email && styles['error--active']
					}`}>
					{errors.email}
				</p>
			</div>

			<div className={styles.inputBox}>
				<textarea
					name='message'
					placeholder='Wiadomość'
					required
					value={formData.message}
					onChange={handleChange}></textarea>
				<p
					className={`${styles.error} ${
						errors.message && styles['error--active']
					}`}>
					{errors.message}
				</p>
			</div>

			<div className={styles.conditions}>
				<label className={styles.container}>
					<input
						type='checkbox'
						name='consent'
						onChange={handleChange}
						required
					/>
					<p className={styles.checkboxLabel}>
						Akceptuję{' '}
						<Link href={'/polityka-prywatnosci'}>politykę prywatności</Link> i
						wyrażam zgodę na przetwarzanie moich danych osobowych.
					</p>
				</label>
			</div>

			<button type='submit'>wyślij</button>
		</form>
	);
};
