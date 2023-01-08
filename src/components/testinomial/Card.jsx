function Card(props) {
  const { name, img, review } = props;
  return (
    <div className="flex flex-col items-center p-6 rounded-lg bg-veryLightGray  md:w-1/3  ">
      <img src={img} className="w-16 -m-14" alt="" />
      <div className="mt-16">
        <h5 className="text-lg font-bold ">{name}</h5>
        <p className="text-sm text-darkGrayishBlue">{review}</p>
      </div>
    </div>
  );
}
export default Card;
