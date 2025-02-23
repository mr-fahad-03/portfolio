import dynamic from 'next/dynamic';
import PropTypes from 'prop-types';

// Dynamically import Lottie with SSR disabled
const ReactLottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function Lottie({ animationDataFile }) {
  return (
    <ReactLottie animationData={animationDataFile} loop={true} />
  );
}

Lottie.propTypes = {
  animationDataFile: PropTypes.object,
};
