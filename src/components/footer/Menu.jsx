function Menu() {
  return (
    <div className="flex justify-around space-x-32">
      <div className="flex flex-col space-y-3 text-white">
        <a href="#" className="hover:text-brightRed">
          Home
        </a>
        <a href="#" className="hover:text-brightRed">
          Pricing
        </a>
        <a href="#" className="hover:text-brightRed">
          Products
        </a>
        <a href="#" className="hover:text-brightRed">
          About
        </a>
      </div>
      <div className="flex flex-col space-y-3 text-white">
        <a href="#" className="hover:text-brightRed">
          Careers
        </a>
        <a href="#" className="hover:text-brightRed">
          Community
        </a>
        <a href="#" className="hover:text-brightRed">
          Privacy Policy
        </a>
      </div>
    </div>
  );
}
export default Menu;
