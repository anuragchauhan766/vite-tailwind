import LeftPart from "./LeftPart";
import RightPart from "./RightPart";
function FeatureSection() {
  return (
    <div className="container flex flex-col px-4 mx-auto  mt-10 space-y-12 md:space-y-0 md:flex-row">
      <LeftPart />
      <RightPart />
    </div>
  );
}
export default FeatureSection;
