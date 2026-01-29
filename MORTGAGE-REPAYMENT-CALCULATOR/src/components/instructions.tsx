interface Props {
    styles?: string;
}

export const Instructions = ({ styles = '' }: Props) => {
    return (
        <div className={`${styles} bg-Slate-900 text-white py-8 px-6 text-center lg:h-full lg:rounded-bl-[80px]`}>
            <img
                src="/assets/images/illustration-empty.svg"
                alt="illustration empty"
                className="m-auto mb-4"
            />
            <h2 className=" text-2xl font-bold mb-4">Results shown here</h2>
            <p className="text-Slate-300">Complete the form and click “calculate repayments” to see what
                your monthly repayments would be.</p>
        </div>
    )
}