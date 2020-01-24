import React, { useEffect, useState } from 'react';
import { Modal } from '../../components';

const withErrorhandler = (WrappedComponent, axios) => {
  return (props) => {
    const [error, setError] = useState(null);

    useEffect(() => {
      const reqInterceptor = axios.interceptors.request.use(req => {
        setError(null);

        return req;
      });
      const resInterceptor = axios.interceptors.response.use(res => res,
        errorReceived => setError(errorReceived)
      );

      return () => {
        axios.interceptors.request.eject(reqInterceptor);
        axios.interceptors.response.eject(resInterceptor);
      }
    }, []);

    return (
      <>
        <Modal visible={error} closed={() => setError(null)}>
          {error ? error.message : null}
        </Modal>
        <WrappedComponent {...props}/>
      </>
    );

  }
}

export default withErrorhandler;