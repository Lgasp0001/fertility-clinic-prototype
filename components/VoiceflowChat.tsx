'use client';

import { useEffect } from 'react';

declare global {
    interface Window {
        voiceflow: {
            chat: {
                load: (config: {
                    verify: { projectID: string };
                    url: string;
                    versionID: string;
                    voice?: { url: string };
                }) => Promise<void>;
            };
        };
    }
}

export default function VoiceflowChat() {
    useEffect(() => {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://cdn.voiceflow.com/widget-next/bundle.mjs';
        script.async = true;

        script.onload = () => {
            if (window.voiceflow && window.voiceflow.chat) {
                window.voiceflow.chat.load({
                    verify: { projectID: '699261a9d6a662d6c77cb9cc' },
                    url: 'https://general-runtime.voiceflow.com',
                    versionID: 'production',
                    voice: {
                        url: 'https://runtime-api.voiceflow.com'
                    }
                }).then(() => {
                    const style = document.createElement('style');
                    style.innerHTML = `
            .vfrc-launcher__container {
              bottom: 200px !important;
            }
            .vfrc-chat__container {
              bottom: 276px !important;
            }
          `;

                    // Wait a bit for the element to be available in the DOM if needed
                    const interval = setInterval(() => {
                        const chatElement = document.querySelector('#voiceflow-chat');
                        if (chatElement && chatElement.shadowRoot) {
                            chatElement.shadowRoot.appendChild(style);
                            clearInterval(interval);
                        }
                    }, 100);

                    // Clear interval after 5 seconds just in case
                    setTimeout(() => clearInterval(interval), 5000);
                });
            }
        };

        document.body.appendChild(script);

        return () => {
            // Clean up script if component unmounts
            if (script.parentNode) {
                script.parentNode.removeChild(script);
            }
        };
    }, []);

    return null;
}
