import ImageRight from "./ImageRight";
import MainHeadingLeft from "./MainHeading";
function HeroSection() {
  return (
    <div className="container flex flex-col-reverse md:flex-row items-center px-6 mx-auto  mt-10 space-y-0">
      <MainHeadingLeft />
      <ImageRight />
    </div>
  );
}
export default HeroSection;
