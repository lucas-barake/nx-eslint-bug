import React from 'react';
import { utils } from '@myorg/utils';

export const App: React.FC = () => {
  const [message, setMessage] = React.useState<string>("Hello, Nx!");

  const value = utils();
  value.someField;

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
}
