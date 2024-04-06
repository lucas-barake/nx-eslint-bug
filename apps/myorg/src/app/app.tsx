import React from 'react';
import { useZustandStore, useAnotherZustandStore } from '@myorg/utils';

export const App: React.FC = () => {
  const [message, setMessage] = React.useState<string>("Hello, Nx!");
  const anotherStore = useAnotherZustandStore((state) => state.someValue);
  const store = useZustandStore((state) => state.someValue);

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
}
