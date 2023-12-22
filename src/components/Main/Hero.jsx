import ivanphoto from "../../assets/img/ivanphoto.jpg";

export const Hero = () => {
  return (
    <div className="flex w-full justify-between items-center mb-[350px] sm:mb-[50px] sm:flex-col">
      <p className="text-title-bg text-section-title-color font-bold sm:text-[35px] sm:mb-[30px]">
        Hi, <br />
        My name is <br />
        IVAN ZHIGALEV <br />I build things for web
      </p>
      <img
        style={{
          background:
            "linear-gradient(#ccc 0 0) padding-box, linear-gradient(to right, #9c20aa, #fb3570) border-box",
          color: "#313149",
          padding: "10px",
          border: "5px solid transparent",
          " borderRadius": "100%",
        }}
        src={ivanphoto}
        alt="myphoto"
        className="w-full h-auto max-w-[349px] max-h-[350px] rounded-full overflow-hidden object-cover sm:max-w-[250px] sm:max-h-[250px]"
      />
    </div>
  );
};
