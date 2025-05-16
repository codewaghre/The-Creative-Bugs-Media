import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export interface EventAvailability {
  date: string;
  slots: string[];
}

export const useGetEventAvailability = (
  username: string,
  eventId: string
) => {
  return useQuery<EventAvailability[]>({
    queryKey: ['eventAvailability', username, eventId],
    queryFn: async () => {
      const { data } = await axios.get<EventAvailability[]>(
        '/api/getEventAvailability',
        {
          params: { username, eventId },
        }
      );
      return data;
    },
    enabled: !!username && !!eventId,
  });
};
