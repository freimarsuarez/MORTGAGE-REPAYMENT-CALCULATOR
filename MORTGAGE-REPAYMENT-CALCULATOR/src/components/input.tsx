interface Props {
    styles?: string;
    label: string;
    unit: string;
    position?: 'right' | 'left';

}

export const Input = ({ styles = '', label, unit, position = 'right' }: Props) => {
    return (
        <div className={`${styles}`}>

            <label className="block mb-3 text-slate-700" htmlFor={label}>{label}</label>

            <div className="relative">
                <input
                    name=""
                    id={label}
                    type="number"
                    className={`outline ${position === 'right' ? 'pl-4' : 'pl-14'} outline-Slate-500 focus:outline-Lime peer rounded-sm w-full h-11.5 font-bold cursor-pointer [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none`}
                />
                <span className={`bg-slate-100 peer-focus:bg-Lime absolute  top-0 ${position === "right" ? 'right-0 rounded-r-sm' : 'left-0 rounded-l-sm'} h-full px-4 grid place-content-center text-slate-700 font-bold`}>{unit}</span>
            </div>
        </div >
    )
}