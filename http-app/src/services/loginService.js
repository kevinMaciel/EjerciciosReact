import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";


function init (){
    Sentry.init({
        dsn: "https://7908d8cf28134d6c92fa819a4b2ab35a@o572465.ingest.sentry.io/5721882",
        integrations: [new Integrations.BrowserTracing()],
      
        // Set tracesSampleRate to 1.0 to capture 100%
        // of transactions for performance monitoring.
        // We recommend adjusting this value in production
        tracesSampleRate: 1.0,
      });
}

function log(error) {
    Sentry.captureException(error);
}

export default {
    init,
    log
};