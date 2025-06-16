import Typewriter from "typewriter-effect";

const Type = (): JSX.Element => {
  return (
    <Typewriter
      options={{
        strings: [
          "Full Stack Developer",
          "Software Developer",
          "Freelancer",
          "Open Source Contributor",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
};

export default Type;
