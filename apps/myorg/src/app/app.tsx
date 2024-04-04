import React from 'react';

export const App: React.FC = () => {
  const [message, setMessage] = React.useState<string>("Hello, Nx!");

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
}
