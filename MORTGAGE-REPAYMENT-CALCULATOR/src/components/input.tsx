

interface Props {
    styles?: string;
    label: string;
    unit: string;
    position?: 'right' | 'left';
    error: boolean;
}

export const Input = ({ styles = '', label, unit, position = 'right', error, ...props }: Props) => {
    return (
        <div className={`${styles} md:w-full`}>

            <label className="block mb-3 text-slate-700" htmlFor={label}>{label}</label>

            <div className="relative">
                <input
                    {...props}
                    step="0.01"
                    id={label}
                    type="number"
                    className={`outline ${position === 'right' ? 'pl-4' : 'pl-14'} ${error ? "outline-Red" : "outline-Slate-500"}  focus:outline-Lime peer rounded-sm w-full h-11.5 font-bold cursor-pointer [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none`}
                />
                <span className={`${error ? "bg-Red text-white" : "bg-slate-100"} peer-focus:bg-Lime absolute  top-0 ${position === "right" ? 'right-0 rounded-r-sm' : 'left-0 rounded-l-sm'} h-full px-4 grid place-content-center text-slate-700 font-bold`}>{unit}</span>
            </div>
            {error && <p className="text-Red text-sm mt-3">This field is required</p>}
        </div >
    )
}