function Input() {
  return (
    <div className="flex flex-col justify-between">
      <form>
        <div className="flex space-x-3">
          <input
            type="text"
            className="flex-1 px-4 rounded-full focus:outline-none"
            placeholder="Updated in your inbox"
          />
          <button className="px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none">
            Go
          </button>
        </div>
      </form>
      <div className="hidden text-white md:block">
        Copyright &copy; 2022,All Right Reserved
      </div>
    </div>
  );
}
export default Input;
