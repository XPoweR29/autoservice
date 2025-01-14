
export const validateForm = (
	inputs: DataForm,
	setErrors: (val: Partial<DataForm>) => void
) => {
	const newErrors: { [key in keyof DataForm]?: string } = {};
	const regName = /^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ\s']+$/;
	const regNum = /^\+?[0-9\s-]+$/;

	if (inputs.name.trim().length < 3) {
		newErrors.name = 'Imię musi zawierać conajmniej 3 znaki.';
	}

	if (!inputs.name.trim()) {
		newErrors.name = 'Musisz podać swoje imię.';
	}

	if (!regName.test(inputs.name)) {
		newErrors.name = 'Imię nie może zawierać cyfr i znaków specjalnych. ';
	}

	if (!inputs.email.trim()) {
		newErrors.email = 'Podaj swój adres mailowy.';
	}
	if (!/\S+@\S+\.\S+/.test(inputs.email)) {
		newErrors.email = 'Podany adres email jest nieprawidłowy.';
	}

	if (!inputs.message.trim()) {
		newErrors.message = 'To pole jest wymagane';
	}

	setErrors(newErrors);
	return Object.keys(newErrors).length === 0;
};
