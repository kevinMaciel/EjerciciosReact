import axios from 'axios';
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

import logger from './loginService';

import { toast } from 'react-toastify';

axios.interceptors.response.use(null, error => {
    const expectedError =
      error.response &&
      error.response.status >= 400 &&
      error.response.status < 500;
  
    if(!expectedError) {
      logger.log(error);
      toast.error("An unexpected error occurred.");
    }
  });

  export default {
      get:axios.get,
      post: axios.post,
      put:axios.put,
      delete: axios.delete
  };
  