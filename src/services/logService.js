// import * as Sentry from "@sentry/browser";

function init() {
  // Sentry.init({
  //   dsn:
  //     "https://ba5fb995f2164577b9aac15ade7b38c8@o388021.ingest.sentry.io/5224187",
  // });
}

function log(error) {
  console.error(error);
  // Sentry.captureException(error);
}

export default {
  init,
  log,
};
