import { useEffect, useState } from 'react';

function useHasToken() {
  const [hasToken, setHasToken] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setHasToken(!!token);
  }, []);

  return hasToken;
}

export default useHasToken;