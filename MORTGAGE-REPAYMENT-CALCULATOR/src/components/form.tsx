import { Input, Radio, Button } from "../components"
import { useForm } from 'react-hook-form'

interface Props {
    styles?: string;
}

interface Inputs {
    mortgageAmount: number;
    mortgageTerm: number;
    InterestRate: number;
    mortgageType: "Repayment" | "Interest Only"
}

export const Form = ({ styles = '' }: Props) => {

    const { register, handleSubmit } = useForm<Inputs>()

    return (
        <div className={`${styles} bg-white px-6 py-8 md:p-10`}>
            <div className="md:flex md:justify-between md:items-center md:mb-10">
                <h1 className="text-2xl font-bold mb-2">Mortgage Calculator</h1>
                <button className="underline text-slate-700 mb-6 cursor-pointer md:mb-0">Clear All</button>
            </div>
            <div className="flex flex-col gap-6 mb-6">
                <Input
                    position="left"
                    label="Mortgage Amount" unit="$"
                    {...register("mortgageAmount", { required: true, valueAsNumber: true })}
                />
                <div className="md:flex md:gap-6">
                    <Input
                        unit="years"
                        label="Mortgage Term"
                        {...register("mortgageTerm", { required: true, valueAsNumber: true })}
                    />
                    <Input
                        unit="%"
                        label="Interest Rate"
                        {...register("InterestRate", { required: true, valueAsNumber: true })}
                    />
                </div>
            </div>
            <h2 className="text-slate-700 mb-3">Mortgage Type</h2>
            <Radio {...register("mortgageType", { required: true })} label="Repayment" />
            <Radio {...register("mortgageType", { required: true })} label="Interest Only" />
            <Button />
        </div>
    )
}