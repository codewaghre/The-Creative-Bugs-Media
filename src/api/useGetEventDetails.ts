import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

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

export const useGetEventDetails = (username: string, eventId: string) => {
  return useQuery<EventDetails>({
    queryKey: ['eventDetails', username, eventId],
    queryFn: async () => {
      const res = await axios.get<EventDetails>('api/getEventDetails', {
        params: { username, eventId },
      });
      
      return res.data;
    },
    enabled: !!username && !!eventId,
  });
};
