import { Player } from '@lottiefiles/react-lottie-player';
import LogoAnimation from "../../Animations/Logo-Seidor.json";

export default function Spinner() {
  return( <Player
  autoplay
  loop
  src={LogoAnimation}
  style={{ height: '400px', width: '400px' }} // Adjust the size as needed
/>
  );
}
