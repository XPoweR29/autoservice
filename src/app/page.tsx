import { Header } from '@/sections/Header/Header';
import { About } from '@/sections/About/About';
import { Start } from '@/sections/Start/Start';
import { Serivces } from '@/sections/Services/Serivces';
import { Reviews } from '@/sections/Reviews/Reviews';
import { Contact } from '@/sections/Contact/Contact';
import { Footer } from '@/sections/Footer/Footer';

export default function Home() {
	return (
		<>
			<Header />
			<Start/>
			<About/>
			<Serivces/>
			<Reviews/>
			<Contact/>
			<Footer/>
		</>
	);
}
