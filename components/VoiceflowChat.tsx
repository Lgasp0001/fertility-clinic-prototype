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

                        const fixChatbot = () => {
                            const host = document.querySelector('#voiceflow-chat, [id^="voiceflow-chat"]');
                            if (host && host.shadowRoot) {
                                const el = host as HTMLElement;

                                // Reset host to not interfere with Shadow DOM layout
                                el.style.setProperty('position', 'fixed', 'important');
                                el.style.setProperty('top', '45vh', 'important');
                                el.style.setProperty('right', '32px', 'important');
                                el.style.setProperty('bottom', 'auto', 'important');
                                el.style.setProperty('width', '80px', 'important');
                                el.style.setProperty('height', '80px', 'important');
                                el.style.setProperty('z-index', '9999999', 'important');
                                el.style.setProperty('overflow', 'visible', 'important');

                                const launcher = host.shadowRoot.querySelector('.vfrc-launcher') as HTMLElement;
                                const widget = host.shadowRoot.querySelector('.vfrc-widget') as HTMLElement;

                                if (launcher) {
                                    // Ensure launcher is not squashed and uses absolute positioning relative to host
                                    launcher.style.setProperty('position', 'absolute', 'important');
                                    launcher.style.setProperty('top', '0', 'important');
                                    launcher.style.setProperty('right', '0', 'important');
                                    launcher.style.setProperty('margin', '0', 'important');
                                    launcher.style.setProperty('transform', 'none', 'important');
                                }

                                if (widget) {
                                    // Position the chat window correctly when it opens
                                    if (!widget.classList.contains('vfrc-widget--hidden')) {
                                        el.style.setProperty('width', '400px', 'important');
                                        el.style.setProperty('height', '600px', 'important');
                                        widget.style.setProperty('position', 'absolute', 'important');
                                        widget.style.setProperty('bottom', '0', 'important');
                                        widget.style.setProperty('right', '0', 'important');
                                    } else {
                                        el.style.setProperty('width', '80px', 'important');
                                        el.style.setProperty('height', '80px', 'important');
                                    }
                                }
                            }
                        };

                        const observer = new MutationObserver(fixChatbot);
                        observer.observe(document.body, { childList: true, subtree: true });
                        setInterval(fixChatbot, 300);
                        fixChatbot();
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
