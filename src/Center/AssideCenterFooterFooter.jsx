import { TbCircleLetterC } from "react-icons/tb";

function AssideCenterFooterFooter() {
    return (
        <div className="flex mt-24 md:mt-28 lg:mt-32 space-x-4 md:space-x-12 lg:space-x-20 ml-20">
            <span className="self-center">
                <TbCircleLetterC/>
            </span>
            <span className="w-60 md:w-auto self-center">Aster News, 2022</span>
            <span className="ml-auto md:ml-0 self-center">Privacy Policy</span>
            <span className="self-center">Terms of Service</span>
        </div>
    );
}

export default AssideCenterFooterFooter;
