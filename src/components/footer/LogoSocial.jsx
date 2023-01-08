function LogoSocial() {
  return (
    <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
      <div className="mx-auto my-6 text-center text-white md:hidden">
        Copyright &copy; 2022,All Right Reserved
      </div>
      <div>
        <img src="img/logo-white.svg" className="h-8" alt="" />
      </div>
      <div className="flex justify-center space-x-4">
        <a href="#">
          <img src="img/icon-facebook.sv" alt="" className="h-8" />
        </a>
        <a href="#">
          <img src="img/icon-youtube.svg" alt="" className="h-8" />
        </a>
        <a href="#">
          <img src="img/icon-twitter.svg" alt="" className="h-8" />
        </a>
        <a href="#">
          <img src="img/icon-pinterest.svg" alt="" className="h-8" />
        </a>
        <a href="#">
          <img src="img/icon-instagram.svg" alt="" className="h-8" />
        </a>
      </div>
    </div>
  );
}
export default LogoSocial;
