import { TwitterApi } from "twitter-api-v2";

const userClient = new TwitterApi({
  appKey: "l4U93dooWcVmIW1PW3XPZWtUA",
  appSecret: "1JjsgXMoVh3JGCtt7WkMVv1aLAnNXBW07QeFzmbHOwfHc9aaWZ",
  accessToken: "1645504728439177216-vzJp8kwcz4qkKawN2bg4iMFiFRd5ii",
  accessSecret: "bWs3XorCUMPVZ03WwSFk20mlOjPQNUUTfMra78U1kWlMv",
});

const client = userClient.readWrite;

export default client;
