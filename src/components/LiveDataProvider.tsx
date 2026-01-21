import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface LiveData {
  isLive: boolean;
  temperature: number;
  humidity: number;
  lastActivity: string;
  sleepStatus: 'sleeping' | 'awake' | 'restless';
}

interface LiveDataContextType {
  data: LiveData;
  updateData: (updates: Partial<LiveData>) => void;
}

const LiveDataContext = createContext<LiveDataContextType | undefined>(undefined);

export function LiveDataProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<LiveData>({
    isLive: true,
    temperature: 73,
    humidity: 40,
    lastActivity: 'Hey dad, I woke up 20 minutes ago',
    sleepStatus: 'awake'
  });

  const updateData = (updates: Partial<LiveData>) => {
    setData(prev => ({ ...prev, ...updates }));
  };

  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Randomly update temperature and humidity slightly
      setData(prev => ({
        ...prev,
        temperature: Math.max(70, Math.min(76, prev.temperature + (Math.random() - 0.5) * 0.5)),
        humidity: Math.max(35, Math.min(45, prev.humidity + (Math.random() - 0.5) * 2))
      }));
    }, 10000); // Update every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <LiveDataContext.Provider value={{ data, updateData }}>
      {children}
    </LiveDataContext.Provider>
  );
}

export function useLiveData() {
  const context = useContext(LiveDataContext);
  if (context === undefined) {
    throw new Error('useLiveData must be used within a LiveDataProvider');
  }
  return context;
}