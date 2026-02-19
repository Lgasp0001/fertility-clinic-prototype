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
                }) => void;
            };
        };
    }
}

export default function VoiceflowChat() {
    useEffect(() => {
        let timer: NodeJS.Timeout;

        const initializeVoiceflow = () => {
            // Remove listeners to ensure this only runs once
            window.removeEventListener('click', handleInteraction);
            window.removeEventListener('touchstart', handleInteraction);
            window.removeEventListener('scroll', handleInteraction);

            // Start the 5-second countdown after the first interaction
            timer = setTimeout(() => {
                const script = document.createElement('script');
                script.type = 'text/javascript';
                script.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs";
                script.async = true;

                script.onload = () => {
                    if (window.voiceflow && window.voiceflow.chat) {
                        window.voiceflow.chat.load({
                            verify: { projectID: '699261a9d6a662d6c77cb9cc' },
                            url: 'https://general-runtime.voiceflow.com',
                            versionID: 'production',
                            voice: {
                                url: "https://runtime-api.voiceflow.com"
                            }
                        });

                        // Surgical script to move only the launcher/host
                        const adjustPosition = () => {
                            const selectors = [
                                '#voiceflow-chat',
                                '[id^="voiceflow-chat"]',
                                '.vfrc-launcher',
                                '.vfrc-widget-launcher'
                            ];

                            selectors.forEach(selector => {
                                const elements = document.querySelectorAll(selector);
                                elements.forEach((el: any) => {
                                    // Move to Center Right
                                    el.style.top = 'auto';
                                    el.style.right = '32px';
                                    el.style.left = 'auto';
                                    el.style.bottom = '50%';
                                    el.style.transform = 'translateY(50%)';
                                    el.style.position = 'fixed';

                                    // Deep target inside Shadow DOM if it's the host
                                    if (el.shadowRoot) {
                                        const children = el.shadowRoot.querySelectorAll('.vfrc-launcher, [class*="launcher"]');
                                        children.forEach((child: any) => {
                                            child.style.top = 'auto';
                                            child.style.bottom = '0px';
                                            child.style.right = '0px';
                                            child.style.left = 'auto';
                                            child.style.position = 'relative';
                                        });
                                    }
                                });
                            });
                        };

                        setInterval(adjustPosition, 200);
                        adjustPosition();
                    }
                };

                document.body.appendChild(script);
            }, 5000);
        };

        const handleInteraction = () => {
            initializeVoiceflow();
        };

        // Listen for the first click, touch, or scroll
        window.addEventListener('click', handleInteraction, { once: true });
        window.addEventListener('touchstart', handleInteraction, { once: true });
        window.addEventListener('scroll', handleInteraction, { once: true });

        return () => {
            window.removeEventListener('click', handleInteraction);
            window.removeEventListener('touchstart', handleInteraction);
            window.removeEventListener('scroll', handleInteraction);
            if (timer) clearTimeout(timer);
        };
    }, []);

    return null;
}
