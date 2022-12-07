import { HomeBanner } from './components/home-banner';
import { HomeBenefit } from './components/home-benefit';
import { HomeContactForm } from './components/home-contact-form';
import { HomeFunction } from './components/home-function';
import { HomeIntroduce } from './components/home-introduce';
import { HomeRating } from './components/home-rating';
import { HomeSpecialPoints } from './components/home-special-points';
import { HomeTraceabilityFlowchart } from './components/home-traceability-flowchart';

export function HomePage() {
  return (
    <>
      <HomeBanner />
      <HomeIntroduce />
      <HomeSpecialPoints />
      <HomeTraceabilityFlowchart />
      <HomeFunction />
      <HomeBenefit />
      <HomeRating />
      <HomeContactForm />
    </>
  );
}
