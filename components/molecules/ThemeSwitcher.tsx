import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

export default function ThemeSwitcher() {
    const {setTheme} = useTheme();

    return (
        <div className="absolute z-30 top-6 right-5 flex justify-center cursor-pointer">
            <SunIcon className="w-6 md:w-10 text-white hidden dark:flex" onClick={() => setTheme('light')}/>
            <MoonIcon className="w-6 md:w-10 text-gray-800 dark:hidden" onClick={() => setTheme('dark')}/>
        </div>
    )
}
