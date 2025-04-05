import React, { useEffect } from 'react'

function CalendlyWidget() {
    useEffect(() => {
        // Load the Calendly script dynamically
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            // Clean up the script when the component unmounts
            document.body.removeChild(script);
        };
    }, []);
    return (
        <>
            <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/waghreabhishek/30min?primary_color=0068ff"
                style={{ minWidth: '320px', height: '100vh', maxHeight: '100vh' }}
            />
        </>
    )
}

export default CalendlyWidget