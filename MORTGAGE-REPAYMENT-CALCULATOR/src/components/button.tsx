interface Props {
    styles?: string;
}

export const Button = ({ styles = '' }: Props) => {
    return (
        <button
            type="submit"
            className={`${styles} bg-Lime h-13.5 w-full rounded-full hover:bg-Lime/50 cursor-pointer flex items-center justify-center gap-4`}>
            <img src="/assets/images/icon-calculator.svg" alt="calculator" />
            <span>
                Calculate Repayments
            </span>
        </button>
    )
}