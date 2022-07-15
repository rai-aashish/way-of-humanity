import Script from 'next/script';
import * as React from 'react';

interface GoogleAnalyticsProps {}

const GoogleAnalytics: React.FunctionComponent<GoogleAnalyticsProps> = (props) => {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script strategy="afterInteractive" id="google-analytics">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_MEASUREMENT_ID}');
      `}</Script>
    </>
  );
};

export default GoogleAnalytics;
