import { useEffect } from 'react';

export default function audioMenu() {
    useEffect(() => {
        audioHover();

        // Cleanup function to remove event listeners
        return () => {
            const navLinks = document.querySelectorAll('a');
            navLinks.forEach((link) => {
                link.removeEventListener('pointerenter', () => {});
            });
        };
    }, []);

    function audioHover() {
        const navLinks = document.querySelectorAll('a');
        const originalBeep = document.getElementById('beep');

        if (!originalBeep) return; // Check if the beep element exists

        // Set the initial volume for the original beep element
        originalBeep.volume = 0.5; // Adjust this value to make the sound quieter

        navLinks.forEach((link, i) => {
            if (i !== 0) {
                const clonedBeep = originalBeep.cloneNode(true);
                clonedBeep.id = 'beep' + i;
                // Set the volume for the cloned beep elements
                clonedBeep.volume = 0.5; // Adjust this value to make the sound quieter
                link.parentNode.appendChild(clonedBeep);
            }
            link.dataset.beeper = i;
        });

        navLinks.forEach((link) => {
            link.addEventListener('pointerenter', () => {
                const beeperIndex = link.dataset.beeper;
                const audio = document.getElementById('beep' + beeperIndex);
                if (audio) {
                    audio.play();
                }
            });
        });

        originalBeep.id = 'beep0';
    }
}