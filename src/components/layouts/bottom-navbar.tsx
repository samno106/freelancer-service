import { Button } from "../ui/button";

const BottomNavbar = ()=>{

    return(
        <div className="md:hidden flex justify-between fixed inset-x-0 bottom-0 px-5 py-2 w-full border-t border-gray-300 bg-white">
            <ul className="flex items-center space-x-8 text-sm font-[500] text-gray-700 uppercase">
                <li className="flex items-center space-x-2">
                    <span>Hire Freelancer</span>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </span>
                </li>
                <li className="flex items-center space-x-2">
                    <span>Find job</span>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </span>
                </li>
            </ul>
            <div>
            <Button size={"icon"} variant={"outline"} className="rounded-full border-gray-400 bg-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
            </Button>
            </div>
        </div>
    );

}
export default BottomNavbar