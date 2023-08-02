export default function Banner() {
    return (
        <div className="flex justify-center mb-16 py-3">
            <a href="https://t.me/socketsomeoneshit"
               className="flex items-center truncate bg-blue-100 dark:bg-blue-900  hover:bg-blue-200 dark:hover:bg-blue-800 text-blue-500 dark:text-white border border-blue-300 dark:border-blue-500 py-3 px-4 rounded">
                <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2">
                    <path d="M7.29936 1.15381L5.48547 4.77413L1.42714 5.35655C0.699362 5.46045 0.407695 6.34366 0.935473 6.84952L3.87158 9.66592L3.17714 13.6444C3.05214 14.3636 3.82158 14.9023 4.46603 14.5659L8.09658 12.6874L11.7271 14.5659C12.3716 14.8995 13.141 14.3636 13.016 13.6444L12.3216 9.66592L15.2577 6.84952C15.7855 6.34366 15.4938 5.46045 14.766 5.35655L10.7077 4.77413L8.89381 1.15381C8.56881 0.508501 7.62714 0.500298 7.29936 1.15381Z" fill="currentColor"></path>
                </svg>

                <span className="truncate"><b>Announcement</b>: Subscribe to my blog!</span>
            </a>
        </div>
    )
}
