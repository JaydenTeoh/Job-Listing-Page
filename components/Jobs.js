export default function Jobs(props) {
  return (
    <div className="w-full h-[200px] md:h-[330px] rounded-md overflow-hidden border-2 pl-4 pr-4 pb-0 flex flex-col justify-center bg-white transform hover:translate-y-[-3px] hover:drop-shadow-md">
      <div className="md:h-[255px]">
        <div className="flex items-center md:flex-col ">
          <img
            className="md:m-auto h-[90px] w-[90px] rounded-md mr-2"
            src={props.logo}
            alt="Company Logo"
          />
          <div className="w-full md:mt-2 md:h-[125px] flex flex-col justify-between">
            <div>
              <p className="text-gray-700 text-xs">{props.name}</p>
              <div className="font-bold text-md mb-2 md:h-14">
                {props.position.length > 57
                  ? props.position.slice(0, 54) + "..."
                  : props.position}
              </div>
            </div>
            <div className="flex">
              <p className="text-gray-700 text-xs">{props.pay}</p>

              {props.EST ? (
                <span className="ml-1 inline-block bg-gray-200 rounded-md px-1.5 py-0.5 text-[9px]  text-gray-700">
                  EST
                </span>
              ) : (
                <span></span>
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center mb-2">
          {props.listed > 3 ? (
            <p className="text-slate-500 text-xs italic">
              {props.listed + " days ago"}
            </p>
          ) : (
            <p className="text-green-400 font-bold text-xs italic">
              {props.listed + " days ago"}
            </p>
          )}

          <span className="ml-2 inline-block bg-green-100 rounded-md px-2 py-1 text-xs font-semibold text-green-500">
            {props.jobType}
          </span>
        </div>
      </div>
      <hr className="m-0 p-0" />
      <div className="pt-2 h-[20px]">
        {props.skills.length > 3 ? (
          <div className="flex">
            {props.skills.slice(0, 3).map((item) => (
              <span className="inline-block bg-gray-200 rounded-md px-2 py-1 text-xs font-semibold text-gray-500 mr-1">
                {item}
              </span>
            ))}
            <span>...</span>
          </div>
        ) : (
          props.skills.map((item) => (
            <span className="inline-block bg-gray-200 rounded-md px-2 py-1 text-xs font-semibold text-gray-500 mr-1">
              {item}
            </span>
          ))
        )}
      </div>
    </div>
  );
}
