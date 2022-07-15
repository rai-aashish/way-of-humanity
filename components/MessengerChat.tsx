import * as React from 'react';
import Script from 'next/script';

interface MessengerChatProps {}

const MessengerChat: React.FunctionComponent<MessengerChatProps> = (props) => {
  const { NEXT_PUBLIC_FACEBOOK_PAGE_ID: pageId } = process.env;
  return (
    <>
      <div id="fb-root"></div>
      <div id="fb-customer-chat" className="fb-customerchat"></div>

      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `

        var chatbox = document.getElementById('fb-customer-chat');
        chatbox.setAttribute("page_id", "${pageId}");
        chatbox.setAttribute("attribution", "biz_inbox");

              window.fbAsyncInit = function() {
        FB.init({
          xfbml            : true,
          version          : 'v14.0'
        });
      };

      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
          `,
        }}
      />
    </>
  );
};

export default MessengerChat;
