import React from 'react';
import { Wrapper } from '@/components/Wrapper/Wrapper';
import { ServiceItem } from '@/components/ServiceItem/ServiceItem';

import icon_inspection from '../../assets/icons/icon_inspection.svg';
import icon_diagnostic from '../../assets/icons/icon_diagnostic.svg';
import icon_oil from '../../assets/icons/icon_oil.svg';
import icon_break from '../../assets/icons/icon_break.svg';
import icon_dpf from '../../assets/icons/icon_dpf.svg';
import icon_chiptuning from '../../assets/icons/icon_chiptuning.svg';
import icon_ac from '../../assets/icons/icon_ac.svg';
import icon_tow from '../../assets/icons/icon_tow.svg';
import divider from '../../assets/divider_small.svg';

import styles from './Services.module.scss';


const services: ServiceItem[] = [
	{
		icon: icon_inspection.src,
		title: 'Przeglądy techniczne',
		description:
			'Szczegółowa kontrola stanu technicznego pojazdu oraz sprawdzenie auta przed zakupem.',
	},
	{
		icon: icon_diagnostic.src,
		title: 'Diagnostyka samochodowa',
		description:
			'Zaawansowane narzędzia do wykrywania usterek i problemów technicznych.',
	},
	{
		icon: icon_oil.src,
		title: 'Wymiana oleju i filtrów',
		description:
			'Regularna obsługa i konserwacja silnika dla jego dłuższej żywotności.',
	},
	{
		icon: icon_break.src,
		title: 'Naprawa układu hamulcowego',
		description: 'Precyzyjna naprawa i serwis układów hamulcowych.',
	},
	{
		icon: icon_dpf.src,
		title: 'Serwis filtrów DPF',
		description: 'Profesjonalne czyszczenie i wymiana filtrów DPF dla lepszej wydajności.',
	},
	{
		icon: icon_chiptuning.src,
		title: 'Chiptuning silnika',
		description: 'Optymalizacja mocy i wydajności Twojego silnika.',
	},
	{
		icon: icon_ac.src,
		title: 'Serwis klimatyzacji samochodowej',
		description: 'Napełnianie, odgrzybianie i kompleksowa naprawa układów klimatyzacyjnych.',
	},
	{
		icon: icon_tow.src,
		title: 'Holowanie i transport',
		description: 'Szybka pomoc drogowa i transport samochodów osobowych w każdej sytuacji.',
	},
];

export const Serivces = () => {
	return (
		<section className={styles.services} id='uslugi'>
			<img className={styles.divider} src={divider.src} alt="" aria-hidden/>
			<Wrapper className={styles.wrapper}>
				<h2 className={styles.heading}>
					Kompleksowe usługi dla Twojego samochodu
				</h2>
				<p className={styles.text}>
					Zaufaj naszemu 30-letniemu doświadczeniu w naprawach samochodów.
					Oferujemy kompleksowe usługi – od diagnostyki i przeglądów
					technicznych po zaawansowane naprawy silników i układów pojazdu. Nasz
					profesjonalizm i dbałość o szczegóły zapewniają najwyższy standard
					obsługi. Specjalizujemy się w naprawach samochodów rajdowych oraz
					usuwaniu wad fabrycznych. Dbamy o każdy szczegół – od precyzyjnych
					napraw silników po kontrolę pojazdów przed zakupem.
				</p>

				<div className={styles.item_container}>
					{services.map(({icon, title, description}) => (
						<ServiceItem icon={icon} title={title} description={description} key={title}/>
					))}
				</div>
			</Wrapper>
		</section>
	);
};
