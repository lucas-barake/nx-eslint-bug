import React from 'react';
import { useZustandStore } from '@myorg/utils';

export const App: React.FC = () => {
  const [message, setMessage] = React.useState<string>("Hello, Nx!");
  const store = useZustandStore((state) => state.someValue);

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
}
