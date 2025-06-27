import { Suspense } from "react";

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
