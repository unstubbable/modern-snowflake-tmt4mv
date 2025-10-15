import { init } from "@launchdarkly/node-server-sdk";

/** Add your relevant code here for the issue to reproduce */
export default async function Home() {
  const client = init("sdk-005ace60-cd41-49cd-a91e-990c2069e579");

  await client.waitForInitialization({ timeout: 1 });

  const featureFlag = await client.variation(
    "test",
    {
      kind: "user",
      key: "user-key-123abc",
      name: "Sandy",
    },
    false
  );

  return null;
}
