import { data } from "./data/numberList";
import ListItem from "./ListItem";
function RightPart() {
  return (
    <div className="flex flex-col space-y-8 md:w-1/2">
      {data.map((item) => {
        return <ListItem {...item} key={item.headingNo} />;
      })}
    </div>
  );
}
export default RightPart;
