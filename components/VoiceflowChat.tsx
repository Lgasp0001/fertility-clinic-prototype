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

                        // Surgical script to move to Center Right without distortion
                        const forceCenterRight = () => {
                            const host = document.querySelector('#voiceflow-chat, [id^="voiceflow-chat"]');
                            if (host) {
                                const el = host as HTMLElement;
                                el.style.setProperty('position', 'fixed', 'important');
                                el.style.setProperty('right', '20px', 'important');
                                el.style.setProperty('bottom', '50%', 'important');
                                el.style.setProperty('top', 'auto', 'important');
                                el.style.setProperty('left', 'auto', 'important');
                                el.style.setProperty('transform', 'translateY(50%)', 'important');
                                // Crucial: Do NOT set width/height to auto or fixed values here
                                el.style.setProperty('z-index', '999999', 'important');

                                // Ensure the launcher inside isn't squashed
                                if (el.shadowRoot) {
                                    const launcher = el.shadowRoot.querySelector('.vfrc-launcher');
                                    if (launcher) {
                                        const l = launcher as HTMLElement;
                                        l.style.setProperty('position', 'static', 'important');
                                        l.style.setProperty('bottom', 'auto', 'important');
                                        l.style.setProperty('right', 'auto', 'important');
                                    }
                                }
                            }
                        };

                        const observer = new MutationObserver(forceCenterRight);
                        observer.observe(document.body, { childList: true, subtree: true });
                        setInterval(forceCenterRight, 500);
                        forceCenterRight();
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
