import classes from './Banner.module.css';
import Section from '../../layout/Section';
import bannerImage from '../../assets/bannerImage.png';
import Noun from '../Noun';
import { Trans } from '@lingui/macro';

const Banner = () => {
  return (
    <Section fullWidth={false} className={classes.bannerSection}>
      
        <div className={classes.wrapper}>
          <h1 style={{textAlign:'center', paddingBottom:'3rem', paddingTop:'2rem'}}>
            <Trans>ONE NUNOUN,</Trans>
            <br />
            <Trans>EVERY 180 MINUTES,</Trans>
            <br />
            <Trans>FOREVER.</Trans>
          </h1>
        </div>
      
        <div style={{ padding: '1rem', paddingBottom: '1rem' }}>
          <Noun imgPath={bannerImage} alt="bannerImage" />
        </div>
      
    </Section>
  );
};

export default Banner;
