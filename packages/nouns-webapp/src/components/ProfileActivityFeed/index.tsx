import React, { useState } from 'react';
import { Col, Spinner } from 'react-bootstrap';
import Section from '../../layout/Section';
import classes from './ProfileActivityFeed.module.css';

import { Trans } from '@lingui/macro';
import { useNounActivity } from '../../wrappers/nounActivity';
import responsiveUiUtilsClasses from '../../utils/ResponsiveUIUtils.module.css';
import ProfileActivityFeedToggle from '../ProfileActivityFeedToggle';
import DesktopProfileActivityFeed from '../DesktopProfileActivityFeed';
import MobileProfileActivityFeed from '../MobileProfileActivityFeed';

interface ProfileActivityFeedProps {
  nounId: number;
}

interface ProposalInfo {
  id: number;
}

export interface NounVoteHistory {
  blockNumber: number | string;
  proposal: ProposalInfo;
  support: boolean;
  supportDetailed: number;
  voter: { id: string };
}

const ProfileActivityFeed: React.FC<ProfileActivityFeedProps> = props => {
  const { nounId } = props;
  console.log('MYDEBUG01 ProfileActivityFeed: ', nounId.toString());
  const MAX_EVENTS_SHOW_ABOVE_FOLD = 5;

  const [isExpanded, setIsExpanded] = useState(false);

  const { loading, error, data } = useNounActivity(nounId);
  console.log('MYDEBUG02 ProfileActivityFeed Loading: ', loading.toString());
  console.log('MYDEBUG02 ProfileActivityFeed Error: ', error.toString());
  console.log('MYDEBUG02 ProfileActivityFeed Data: ', data);
  if (loading || !data || data === undefined) {
    return (
      <Section fullWidth={false}>
        <Col lg={{ span: 10, offset: 1 }}>
          <div className={classes.headerWrapper}>
            <h1>
              <Trans>Activity 00</Trans>
            </h1>
            <div className={classes.spinner}>
              <Spinner animation="border" />
            </div>
          </div>
        </Col>
      </Section>
    );
  }

  if (error) {
    return (
      <div>
        <Trans>Failed to fetch nuNoun activity history</Trans>
      </div>
    );
  }

  console.log('MYDEBUG03 ProfileActivityFeed: ');
  console.log('MYDEBUG04 ProfileActivityFeed: ');
  return (
    <Section fullWidth={false}>
      <Col lg={{ span: 10, offset: 1 }}>
        <div className={classes.headerWrapper}>
          <h1>
            <Trans>Activity 01</Trans>
          </h1>
        </div>
        {data && data.length === 0 ? (
          <div className={classes.nullStateCopy}>
            <Trans>This nuNoun has no activity, since it was just created. Check back soon!</Trans>
          </div>
        ) : (
          <>
            <div className={responsiveUiUtilsClasses.desktopOnly}>
              <DesktopProfileActivityFeed
                events={data}
                isExpanded={isExpanded}
                aboveFoldEventCount={MAX_EVENTS_SHOW_ABOVE_FOLD}
              />
            </div>
            <div className={responsiveUiUtilsClasses.mobileOnly}>
              <MobileProfileActivityFeed
                events={data}
                isExpanded={isExpanded}
                aboveFoldEventCount={MAX_EVENTS_SHOW_ABOVE_FOLD}
              />
            </div>

            {data.length > MAX_EVENTS_SHOW_ABOVE_FOLD && (
              <ProfileActivityFeedToggle
                numEvents={data.length}
                isExpanded={isExpanded}
                toggleCallback={() => setIsExpanded(!isExpanded)}
              />
            )}
          </>
        )}
      </Col>
    </Section>
  );
};

export default ProfileActivityFeed;
