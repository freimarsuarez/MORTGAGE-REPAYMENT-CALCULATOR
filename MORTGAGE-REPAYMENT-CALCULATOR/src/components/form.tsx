import { Input, Radio, Button } from "../components"
import { useForm, type SubmitHandler } from 'react-hook-form'
import { calculateMortgage, type MortgageType } from "../utils/calculateMortgage";
import React, { useContext } from "react";
import { PaymentContext } from "../contexts/payment-context";

interface Props {
    styles?: string;
}

interface Inputs {
    mortgageAmount: number;
    mortgageTerm: number;
    InterestRate: number;
    mortgageType: MortgageType;
}

export const Form = ({ styles = '' }: Props) => {

    const context = useContext(PaymentContext)

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<Inputs>()

    const sendForm: SubmitHandler<Inputs> = (data: Inputs) => {

        const { mortgageAmount, mortgageTerm, InterestRate, mortgageType } = data;

        const { monthlyPayment, totalRepay } = calculateMortgage(mortgageAmount, mortgageTerm, InterestRate, mortgageType)

        context.setResults({ monthlyPayment, totalRepay })
    }

    const clearAll = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        context.setResults({
            monthlyPayment: 0,
            totalRepay: 0
        })
        reset()
    }

    return (
        <form onSubmit={handleSubmit(sendForm)} className={`${styles} bg-white px-6 py-8 md:p-10`}>
            <div className="md:flex md:justify-between md:items-center md:mb-10">
                <h1 className="text-2xl font-bold mb-2">Mortgage Calculator</h1>
                <button onClick={clearAll} className="underline text-slate-700 mb-6 cursor-pointer md:mb-0">Clear All</button>
            </div>
            <div className="flex flex-col gap-6 mb-6">
                <Input
                    unit="$"
                    position="left"
                    label="Mortgage Amount"
                    error={errors.mortgageAmount?.type === "required"}
                    {...register("mortgageAmount", {
                        required: true,
                        valueAsNumber: true,
                        min: { value: 0.01, message: "El valor deeb ser mayor que 0" }
                    })}
                />
                <div className="md:flex md:gap-6">
                    <Input
                        unit="years"
                        label="Mortgage Term"
                        error={errors.mortgageTerm?.type === "required"}
                        {...register("mortgageTerm", {
                            required: true,
                            valueAsNumber: true,
                            min: { value: 0.01, message: "El valor deeb ser mayor que 0" }
                        })}
                    />
                    <Input
                        unit="%"
                        label="Interest Rate"
                        error={errors.InterestRate?.type === "required"}
                        {...register("InterestRate", {
                            required: true,
                            valueAsNumber: true,
                            min: { value: 0.01, message: "El valor deeb ser mayor que 0" }
                        })}
                    />
                </div>
            </div>
            <h2 className="text-slate-700 mb-3">Mortgage Type</h2>
            <Radio {...register("mortgageType", { required: true })} label="Repayment" />
            <Radio {...register("mortgageType", { required: true })} label="Interest Only" />
            {errors.mortgageType && <p className="text-Red text-sm my-3">This field is required</p>}
            <Button />
        </form>
    )
}