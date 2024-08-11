import { Response } from '../interfaces/types';
export default function useFetch(url: string): {
    data: Response | null;
    error: any;
    loading: boolean;
};
