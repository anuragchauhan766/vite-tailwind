import Input from "./Input";
import LogoSocial from "./LogoSocial";
import Menu from "./Menu";
function Footer() {
  return (
    <footer className="bg-veryDarkBlue">
      <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto  space-y-8 md:flex-row md:space-y-0">
        <LogoSocial />
        <Menu />
        <Input />
      </div>
    </footer>
  );
}
export default Footer;
