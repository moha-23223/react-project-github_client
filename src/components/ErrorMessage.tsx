import React from 'react';

interface Props {
  message: string;
}

const ErrorMessage: React.FC<Props> = ({ message }) => {
  if (!message) return null;

  return (
    <div style={{
      backgroundColor: '#ffe0e0',
      color: '#b00020',
      padding: '1rem',
      margin: '1rem 0',
      borderRadius: '8px',
      border: '1px solid #ffcccc',
      textAlign: 'center',
    }}>
      {message}
    </div>
  );
};

export default ErrorMessage;
