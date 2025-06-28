import { Suspense } from "react";

import { useGetEventDetails } from '../api/useGetEventDetails';
import { useGetEventAvailability } from '../api/useGetEventAvailability ';
import { BookingForm } from '@/components/BookingForm';

import { Title, Meta, Link as HeadLink } from 'react-head';

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

            <ConnectPageSEO />
            <main>

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

            </main>
        </>

    );
};

export default EventComponent;



const ConnectPageSEO = () => (
    <>
        <Title>Contact Us | Creative Bugs Media</Title>
        <Meta
            name="description"
            content="Connect with Creative Bugs Media for your next video project. Reach out to discuss your vision, timeline, and creative needs."
        />
        <HeadLink rel="canonical" href="https://www.the-creative-bugs.vercel.app/connect" />
        <Meta property="og:title" content="Contact Us | Creative Bugs Media" />
        <Meta
            property="og:description"
            content="Let's collaborate! Contact us for video editing, production, and creative solutions."
        />
        <Meta property="og:url" content="https://www.the-creative-bugs.vercel.app/connect" />
        <Meta
            property="og:image"
            content="https://www.the-creative-bugs.vercel.app/creativeBugsMedia.jpg"
        />
        <Meta name="twitter:title" content="Contact Us | Creative Bugs Media" />
        <Meta
            name="twitter:description"
            content="Start your project today — message Creative Bugs Media to bring your story to life."
        />
        <Meta
            name="twitter:image"
            content="https://www.the-creative-bugs.vercel.app/creativeBugsMedia.jpg"
        />
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "ContactPage",
                    "mainEntity": {
                        "@type": "Organization",
                        "name": "Creative Bugs Media",
                        "url": "https://www.the-creative-bugs.vercel.app",
                        "contactPoint": {
                            "@type": "ContactPoint",
                            "contactType": "Customer Support",
                            "email": "hello@creativebugsmedia.com",
                            "url": "https://www.the-creative-bugs.vercel.app/connect",
                        },
                    },
                }),
            }}
        />
    </>
);


