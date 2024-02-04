import Card from "@/components/atoms/Card";

export default function Home() {
  const numberOfCards = 30;

  return (
    <main className="min-h-screen z-50 w-full lg:max-w-7xl lg:py-8 py-5 lg:px-0 px-5   mx-auto">
      <h1 className="text-center font-semibold z-50 lg:text-[34px] text-[24px]  ">
        Discover Exploding Topics
      </h1>
      <h2 className="text-center lg:text-base z-50 text-[16px]  my-5 text-gray-500">
        We surface rapidly growing topics before they take off.
      </h2>

      <div className="lg:flex z-50 flex lg:flex-row flex-col  gap-y-2 justify-center gap-x-3 mt-10   items-center">
        <h6 className="text-gray-500  text-xs font-semibold">FILTER BY:</h6>

        <div className=" z-50 flex items-center justify-between lg:w-[170px] w-full  border-[1px] hover:border-black border-gray-200  cursor-pointer bg-white py-2 px-2">
          <h6 className="z-50 text-gray-400 text-[13px] ">5 Years</h6>
          <svg
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4 text-gray-400 text-[13px] "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>

        <div className=" z-50 flex items-center justify-between lg:w-[170px] w-full border-[1px] hover:border-black border-gray-200  cursor-pointer bg-white py-2 px-2">
          <h6 className=" z-50 text-gray-400 text-[13px] ">All Categories</h6>
          <svg
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4 text-gray-400 text-[13px] "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>

        <div className=" z-50 flex items-center justify-between w-full  lg:w-[220px] border-[1px] hover:border-black border-gray-200  cursor-pointer bg-white py-[7px] px-2">
          <div className="flex z-50 items-center gap-x-1">
            <svg
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4 text-gray-400 text-[13px] "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
            <h6 className="text-gray-300 text-[13px] ">Search Trends</h6>
          </div>

          <button className="bg-[#3176E8] scale-90 text-white text-xs px-2 rounded-sm py-[3px] ">
            PRO
          </button>
        </div>
      </div>

      <div className="gap-x-4 gap-y-10 mx-auto mt-10 grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: numberOfCards }).map((_, index) => (
          <Card key={index} />
        ))}
      </div>
    </main>
  );
}
