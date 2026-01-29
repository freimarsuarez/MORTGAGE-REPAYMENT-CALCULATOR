interface Props {
    label: string;
}

export const Radio = ({ label, ...props }: Props) => {
    return (
        <label htmlFor={label} className="border border-slate-500 rounded-sm flex items-center gap-2 px-2 h-11.5 w-full mb-3 cursor-pointer hover:border-Lime hover:bg-Lime/10 has-checked:bg-Lime/10 has-checked:border-Lime ">
            <div className="relative flex items-center justify-center">
                <input
                    {...props}
                    id={label}
                    type="radio"
                    name="Mortgage Type"
                    className="appearance-none size-5 border checked:border-Lime rounded-full peer"
                />
                <span className=" absolute rounded-full size-3 bg-Lime opacity-0 peer-checked:opacity-100"></span>
            </div>
            <span>{label}</span>

        </label>
    )
}