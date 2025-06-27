import { useQuery } from '@tanstack/react-query';
import axios from 'axios';


export interface EventAvailability {
  date: string;
  slots: string[];
}

const crossOrigin = import.meta.env.VITE_CROSS_ORIGIN

export const useGetEventAvailability = (
  username: string,
  eventId: string
) => {
  return useQuery<EventAvailability[]>({
    queryKey: ['eventAvailability', username, eventId],
    queryFn: async () => {
      const { data } = await axios.get<EventAvailability[]>(
        `${crossOrigin}/api/getEventAvailability`,
        {
          params: { username, eventId },
        }
      );
    
      return data;
    },
    enabled: !!username && !!eventId,
  });
};
