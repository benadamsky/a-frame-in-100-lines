import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';

const frameMetadata = getFrameMetadata({
  buttons: ['Redeem to wallet', 'Donate to purple', '50/50 (You/Purple)'],
  image: '/reward-unlocked.png',
  post_url: `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/frame`,
});

export const metadata: Metadata = {
  title: 'weponder.io',
  description: 'Frame app',
  openGraph: {
    title: 'Ponder Rewards',
    description: 'Frame app',
    images: ['/reward-unlocked.png'],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>weponder.io</h1>
    </>
  );
}
