import { Input } from "../components";

interface Props {
    styles?: string;
}

export const Form = ({ styles = '' }: Props) => {
    return (
        <div className={`${styles} bg-white px-6 py-8`}>
            <h1 className="text-2xl font-bold mb-2">Mortgage Calculator</h1>
            <button className="underline text-slate-700 mb-6 cursor-pointer">Clear All</button>
            <div className="flex flex-col gap-6">
                <Input label="Mortgage Amount" unit="$" position="left" />
                <Input label="Mortgage Term" unit="years" />
                <Input label="Interest Rate" unit="%" />
            </div>
        </div>
    )
}