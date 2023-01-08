import Card from "./Card";
import Button from "../button";
import { data } from "./data/data";
function Testinomial() {
  return (
    <div className="max-w-6xl px-5 mx-auto  mt-32 text-center">
      <h2 className="text-4xl font-bold text-center">
        What's Different About Manage?
      </h2>
      <div className="flex flex-col mt-24 space-y-10 md:space-y-0 md:flex-row md:space-x-6">
        {data.map((item, index) => {
          return <Card {...item} key={index} />;
        })}
      </div>
      <div className="my-16">
        <Button />
      </div>
    </div>
  );
}
export default Testinomial;
