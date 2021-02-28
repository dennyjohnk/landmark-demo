import React from 'react';
import Layout from '../layouts/index';
import Hero from '../components/hero/Hero';
import HeroIllustration from '../components/hero/HeroIllustration';

export default function IndexPage() {
	return (
		<Layout>
			<Hero
				title="Landmark"
				content="Power of conversatinoal chatbot"
				illustration={HeroIllustration}
			/>
		</Layout>
	);
}
