
export default function Navber() {
  return (
    <div>
      <nav className="py-6">
        <div className="container mx-auto flex items-center justify-between gap-x-6">
          {/* logo */}
          <a href="/">
            {/* <img className="h-[40px]" src={logo} alt="Lws" /> */}
            <h2 className="text-3xl font-bold text-white">UniWise</h2>
          </a>
          {/* Logo Ends */}
          <a className="px-5 py-2 bg-[#172227] rounded-[44px] text-white" href="#">
            Get Admission
          </a>
        </div>
      </nav>
    </div>
  );
}
