export const InputMessage = () => {
    return (
        <div className="flex flex-row mt-3">
            <img src="images/man.jpg" alt="user" className="w-10 h-10 object-cover"/>
            <div className="ml-2 flex flex-col justify-between">
                <div className="font-normal max-w-xs text-left">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Debitis pariatur repellendus magnam illum eligendi eos nostrum maiores consectetur.
                </div>
                <div className="font-lighter text-xs text-right">00:00</div>
            </div>
        </div>
    )
}