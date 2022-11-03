export default function FourZeroFour() {
    return (
        <div className="flex px-8 justify-center align-center min-h-[100vh]">
            <div className="flex flex-1 items-center justify-center">
                <div className="flex w-full max-w-2xl flex-col items-center px-6 text-center md:px-10">
                    <h1 className="text-9xl font-bold text-heading">oops...</h1>
                    <h2
                        className="mt-6 text-2xl font-semibold text-heading">The page your were looking for could not be
                        found.
                    </h2>
                    <p className="mt-4 font-medium text-text">It seems this page is missing. Please check the
                        URL or go home.
                    </p>
                    {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                    <a href="/"
                          className="mt-8 inline-flex cursor-pointer items-center justify-center rounded-xl border-2 border-blue-500 bg-blue-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:border-blue-400 hover:bg-blue-400 disabled:opacity-30 disabled:hover:border-primary disabled:hover:bg-primary disabled:hover:text-white">Go
                        Home
                    </a>
                </div>
            </div>
        </div>
    )
}
