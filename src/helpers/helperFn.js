import { TimeOut_Sec } from './config';

const timeOut = (s) => {
  return new Promise((_, reject) => {
    return setTimeout(
      () => reject(`Request is taking too long. More than ${s} seconds.`),
      s * 1000
    );
  });
};

export const getJson = async (url, errMsg = 'Something went wrong') => {
  try {
    const response = await Promise.race([fetch(url), timeOut(TimeOut_Sec)]);
    const data = await response.json();
    if (!response.ok) {
      throw new Error(`${errMsg}, ${response.status}, ${data.message}`);
    }
    return data;
  } catch (err) {
    throw err;
  }
};
