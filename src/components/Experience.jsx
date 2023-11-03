import {
  Billboard,
  Environment,
  Float,
  OrbitControls,
  useTexture,
} from "@react-three/drei";
import { Heart } from "./Heart";
import { useControls } from "leva";
import { Banana } from "./Banana";
import { WesternBird } from "./WesternBird";

export function Experience() {
  const { item } = useControls({
    item: {
      value: "heart",
      options: ["heart", "banana", "bird"],
    },
  });

  const map = useTexture("textures/x-logo.png");

  return (
    <>
      <OrbitControls enableZoom={false} />
      <Environment preset="sunset" background blur={0.4} />
      <Float floatIntensity={2} speed={3}>
        <Heart scale={0.25} visible={item === "heart"} />
        <Banana scale={0.15} visible={item === "banana"} />
        <WesternBird scale={1.34} visible={item === "bird"} />
        <Billboard visible={item === "bird"}>
          <mesh>
            <planeGeometry args={[0.8, 0.8]} />
            <meshBasicMaterial map={map} transparent />
          </mesh>
        </Billboard>
      </Float>
    </>
  );
}
