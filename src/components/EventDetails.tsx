import { Calendar, Clock } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";


export interface EventDetails {
    id: string;
    title: string;
    description: string;
    duration: number;
    userId: string;
    isPrivate: boolean;
    createdAt: string;
    updatedAt: string;
    user: {
        name: string;
        email: string;
        imageUrl: string;
    };
}

// Define the props for the EventDetails component
interface EventDetailsProps {
    event: EventDetails;
}

export default function EventDetails({ event }: EventDetailsProps) {
    const { user } = event;
    return (
        <div className="event-details">
            <h1 className="event-title font-paytone">{event.title}</h1>
            <div className="host-info">
                <Avatar className="w-12 h-12 mr-4">
                    <AvatarImage src={user.imageUrl} alt={user.name} />
                    <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                    <h2 className="text-xl font-semibold">{user.name}</h2>
                    <p>{user.email}</p>
                </div>
            </div>
            <div className="event-meta">
                <Clock className="mr-2" />
                <span>{event.duration} minutes</span>
            </div>
            <div className="event-meta">
                <Calendar className="mr-2" />
                <span>Google Meet</span>
            </div>
            <p>{event.description}</p>
        </div>
    );
}
