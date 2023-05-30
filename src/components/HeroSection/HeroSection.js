import css from './HeroSection.module.css';

const HeroSection = () => {
  return (
    <div className={css.overlay}>
      <section className={css.hero}></section>
    </div>
  );
};

export default HeroSection;
