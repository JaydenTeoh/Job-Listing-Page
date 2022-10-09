import "../styles/globals.css";
import Jobs from "../components/Jobs";
import Header from "../components/Header";
import { listedJobs } from "../constants/listedJobs";

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-[#f2f2f2]">
      <Header />
      <div className="text-lg font-bold lg:w-[900px] m-auto mt-6 pl-6 pr-6 flex items-center justify-between">
        <h1>8728 Jobs</h1>
        <div className="items-center flex">
          <span className="text-xs mr-2">SORT BY</span>
          <button className="bg-white text-xs font-light px-2 py-1 flex items-center rounded-sm border-slate-300 hover:border-slate-700 border">
            Recent <span className="w-[20px]">&nbsp;&nbsp;</span> |
            <svg
              class=" w-4 h-4"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="p-4 box-border h-full w-full lg:w-[900px] m-auto grid items-center justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {listedJobs.map((item) => (
          <div className="b-2 w-full h-full">
            <Jobs {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyApp;
