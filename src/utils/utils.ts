export const logErrorToConsole = (err: Response) => {
  if (!err.json) {
    console.error(err);
  } else {
    err.json().then((err) => {
      console.error(err.message);
    });
  }
};
