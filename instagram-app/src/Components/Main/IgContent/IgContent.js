import React from 'react';
import InstagramEmbed from 'react-instagram-embed';

import './IgContent.css';

const IgContent = () => {

    return (
        <div className="igcontent">
            <InstagramEmbed
                url='https://www.instagram.com/p/B1yuamZI3AuGMu3BZ-NkKjx93iwl_koksdIoJc0/'
                maxWidth={ 320 }
                hideCaption={ false }
                containerTagName='div'
                protocol=''
                injectScript
                onLoading={() => {}}
                onSuccess={() => {}}
                onAfterRender={() => {}}
                onFailure={() => {}}
            />
        </div>
    )
}

export default IgContent;
