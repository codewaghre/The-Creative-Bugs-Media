import { useGetEventDetails } from '../api/useGetEventDetails';
import { useGetEventAvailability } from '../api/useGetEventAvailability ';
import EventDetails from '@/components/EventDetails';
import { BookingForm } from '@/components/BookingForm';
import { Suspense } from "react";
import Heading from '@/components/Heading';
import { SkeletonLoader } from '@/components/SkeletonLoader';


// const username = 'creativebugsmeeting';
// const eventId = '1a062314-5461-43c2-8c8e-930bef835abc';


interface EventComponentProps {
    username: string;
    eventId: string;
}



const EventComponent = ({ username, eventId }: EventComponentProps) => {


    const { data: event, isLoading, error } = useGetEventDetails(username, eventId);

    console.log(event);

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

            <header className='content-container'>
                <Heading
                    one='Get in Touch with Us'
                    oneColor='var(--bg-green)'
                />
            </header>

            {isLoading || eventLoading ? (<SkeletonLoader />)
                : (
                    <div className="booking-page content-container">
                        <EventDetails event={event} />
                        <Suspense fallback={<div>Loading booking form...</div>}>
                            <BookingForm event={{ ...event, username }} availability={availability} />
                        </Suspense>
                    </div>
                )}

        </>

    );
};

export default EventComponent;
