export const InputMessage = () => {
    return (
        <div className="flex flex-row">
            <img src="images/man.jpg" alt="user" className="w-10"/>
            <div className="ml-2 flex flex-col justify-between">
                <div className="font-normal">Message</div>
                <div className="font-lighter text-xs">00:00</div>
            </div>
        </div>
    )
}