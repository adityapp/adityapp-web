export default function HomePage() {
  return (
    <div className="flex flex-col items-center">
      <div className="p-10">
        <h1 className="font-extralight text-3xl text-white">
          Welcome to My Personal Website
        </h1>
      </div>

      <div className="justify-center m-10 min-w-min max-w-2xl border rounded-lg shadow bg-gray-800 border-gray-700">
        <div className="flex flex-col items-center p-10">
          <img
            className="w-48 h-48 mb-3 rounded-full shadow-lg"
            src="https://pbs.twimg.com/profile_images/1759797937780183040/1tDV6W6A_400x400.jpg"
            alt="Bonnie image"
          />
          <h5 className="mb-1 text-xl font-medium text-white">
            Aditya Putra Pratama
          </h5>
          <h5 className="mb-1 text-sm text-gray-400">
            Software Engineer
          </h5>
          <span className="font-light text-base mt-10 text-white">
            Hi Folks! My name is <b className="text-lg font-normal">Adit</b>, I have been a professional Software Engineer since 2018. Before 2020, I started my career as an Android Developer, and after that, I switched my career to a Backend Engineer.
          </span>
        </div>
      </div>
    </div>
  );
}
