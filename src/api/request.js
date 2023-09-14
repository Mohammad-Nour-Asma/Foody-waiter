import axios from "axios";

const client = axios.create({
  baseURL: "https://api.foody.gomaplus.tech/api",
});
export const request = async ({ ...options }) => {
  client.defaults.headers.common.Authorization = `Bearer 5|rnPrEIxO64Z32BQx2TfjcLmp8kF7uaFTKLtUiU9j6626ca9b`;
  client.defaults.timeout = 6000;
  const onSuccess = (res) => {
    return res;
  };
  const onError = (err) => {
    return err;
  };
  return client(options).then((res) => res);
};
