import * as React from 'react';
import Button from 'components/common/Button';
import { useCookies } from 'react-cookie';
import GoogleAnalytics from 'components/Analytics/GoogleAnalytics';

const CookieConsent: React.FC = () => {
  const [hideCookieConsent, setHideCookieConsent] = React.useState<boolean>(false);
  const [cookies, setCookie] = useCookies(['woh-accept-cookies']);

  const onAccept = () => setCookie('woh-accept-cookies', true);
  const onDecline = () => setHideCookieConsent(true);

  if (cookies['woh-accept-cookies']) return <GoogleAnalytics />;
  if (hideCookieConsent) return null;

  return (
    <>
      <div className="fixed w-full z-[99999999] bottom-2 right-0 max-w-[600px]">
        <div className="text-sm rounded-md mx-6 p-4 bg-accent-50 text-accent-900 shadow-lg">
          We use cookies to personalize user experiance and manage content. You can accept or decline.
          <div className="mt-2 flex px-6 gap-10 items-center justify-between">
            <button onClick={onDecline} className="text-backdrop-black-60">
              Decline
            </button>
            <Button onClick={onAccept} variant="solid" size="small">
              Accept
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CookieConsent;
