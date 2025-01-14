import { About } from '@/sections/About/About';
import { Start } from '@/sections/Start/Start';
import { Serivces } from '@/sections/Services/Serivces';
import { Reviews } from '@/sections/Reviews/Reviews';
import { Contact } from '@/sections/Contact/Contact';

export default function Home() {
	return (
		<>
			<Start />
			<About />
			<Serivces />
			<Reviews />
			<Contact />
		</>
	);
}
