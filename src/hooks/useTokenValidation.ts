import { useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const useTokenValidation = () => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      router.push('/SignIn');
    } else {
      axios.get('/api/validate-token', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .catch(error => {
        localStorage.removeItem('token');
        localStorage.removeItem('profile');
        router.push('/SignIn');
      });
    }
  }, [router]);
};

export default useTokenValidation;