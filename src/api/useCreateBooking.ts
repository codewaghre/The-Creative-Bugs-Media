import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

interface BookingDetails {
  eventId: string;
  name: string;
  email: string;
  startTime: string; // ISO 8601
  endTime: string;
  additionalInfo?: string;
}

interface Booking {
  id: string;
  eventId: string;
  userId: string;
  name: string;
  email: string;
  additionalInfo: string;
  startTime: string;
  endTime: string;
  meetLink: string;
  googleEventId: string;
  createdAt: string;
  updatedAt: string;
}

interface BookingResponse {
  success: boolean;
  booking: Booking;
  meetLink: string;
}

interface CreateBookingParams {
  username?: string;
  eventId?: string;
  bookingDetails: BookingDetails;
}

const crossOrigin = import.meta.env.VITE_CROSS_ORIGIN

export const useCreateBooking = () => {
  return useMutation<BookingResponse, Error, CreateBookingParams>({
    mutationFn: async ({bookingDetails }) => {
      const { data } = await axios.post<BookingResponse>(
        `${crossOrigin}/api/createBooking`,
        bookingDetails
          );
          return data;
    },
  });
};
