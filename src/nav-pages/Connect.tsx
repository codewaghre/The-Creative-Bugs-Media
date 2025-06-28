import { Suspense } from "react";

// import { Helmet } from 'react-helmet-async';

import { useGetEventDetails } from '../api/useGetEventDetails';
import { useGetEventAvailability } from '../api/useGetEventAvailability ';
import { BookingForm } from '@/components/BookingForm';

import { SkeletonLoader } from '@/components/SkeletonLoader';

import EventDetails from '@/components/EventDetails';
import Heading from '@/components/Heading';

import connectHeading from '../data/heading.json'
import connect from '../data/connect.json'

interface EventComponentProps {
    username: string;
    eventId: string;
}

const EventComponent = ({ username, eventId }: EventComponentProps) => {

    const { p1, p2, p3 } = connect
    const { one, two, oneColor, twoColor } = connectHeading.connect
    const { data: event, isLoading, error } = useGetEventDetails(username, eventId);
    const { data: eventData, isLoading: eventLoading, error: eventError } = useGetEventAvailability(username, eventId);

    // ✅ Early returns after all hooks
    if (isLoading || eventLoading) return <div><SkeletonLoader /></div>;
    if (error || eventError) return <div>Error loading data</div>;

    if (!event) {
        return <div>Event not found</div>; //TODO add 404 page here
    }

    // Type-checking availability data
    const availability = eventData ?? [];

    return (

        <>

            {/* <Helmet>
                <title>Contact Us | Creative Bugs Media</title>
                <meta name="description" content="Connect with Creative Bugs Media for your next video project. Reach out to discuss your vision, timeline, and creative needs." />
                <link rel="canonical" href="https://the-creative-bugs-media.vercel.app/contact" />
                <meta property="og:title" content="Contact Us | Creative Bugs Media" />
                <meta property="og:description" content="Let's collaborate! Contact us for video editing, production, and creative solutions." />
                <meta property="og:url" content="https://the-creative-bugs-media.vercel.app/contact" />
                <meta property="og:image" content="https://the-creative-bugs-media.vercel.app/creativeBugsMedia.webp" />
                <meta name="twitter:title" content="Contact Us | Creative Bugs Media" />
                <meta name="twitter:description" content="Start your project today — message Creative Bugs Media to bring your story to life." />
                <meta name="twitter:image" content="https://the-creative-bugs-media.vercel.app/creativeBugsMedia.webp" />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ContactPage",
                        "mainEntity": {
                            "@type": "Organization",
                            "name": "Creative Bugs Media",
                            "url": "https://the-creative-bugs-media.vercel.app/",
                            "contactPoint": {
                                "@type": "ContactPoint",
                                "contactType": "Customer Support",
                                "email": "hello@creativebugsmedia.com",
                                "url": "https://the-creative-bugs-media.vercel.app/contact"
                            }
                        }
                    })}
                </script>
            </Helmet> */}

            <header>
                <Heading
                    one={one}
                    oneColor={oneColor}
                    two={two}
                    twoColor={twoColor}
                />
            </header>

            <div className="connect-para">
                <p>{p1}</p>

                <p>{p2}</p>

                <span className='bg-green'>{p3}</span>
            </div>

            {isLoading || eventLoading ? (<SkeletonLoader />)
                : (
                    <div className="booking-page content-container">
                        <EventDetails event={event} />
                        <Suspense fallback={<div>.</div>}>
                            <BookingForm event={{ ...event, username }} availability={availability} />
                        </Suspense>
                    </div>
                )}

        </>

    );
};

export default EventComponent;
