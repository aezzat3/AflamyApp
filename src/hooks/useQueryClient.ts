import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { QueryCache, QueryClient } from 'react-query';
import { CacheAdapter } from '../utils';



const loadPersistedData = async (key: string): Promise<any> => {
  const { getItem } = useAsyncStorage(key);
  try {
    const value = await getItem();
    return value ? JSON.parse(value) : undefined;
  } catch (error) {
    console.error('Error loading persisted data:', error);
    return undefined;
  }
};

const persistData = async (key: string, value: any): Promise<void> => {
  const { setItem } = useAsyncStorage(key);
  try {
    await setItem(JSON.stringify(value));
  } catch (error) {
    console.error('Error persisting data:', error);
  }
};

const AsyncStorageCacheAdapter: CacheAdapter = {
  read: async (key: string) => {
    return loadPersistedData(key);
  },
  write: async (key: string, value: any) => {
    await persistData(key, value);
  },
  invalidate: async (key: string) => {
    const { removeItem } = useAsyncStorage(key);
    await removeItem();
  },
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 1000 * 60 * 10, // Cache data for 10 minutes
      staleTime: Infinity, 
    },
  },
  cache: new QueryClient({
    queryCache: new QueryCache({
      adapter: AsyncStorageCacheAdapter,
    }),
  }).getQueryCache(),
});
