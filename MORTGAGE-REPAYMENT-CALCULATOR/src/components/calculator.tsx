import { Form, Results, Instructions } from "../components";

interface Props {
    styles?: string;
}

export const Calculator = ({ styles = '' }: Props) => {
    return (
        <div className={`${styles} md:max-w-172 md:my-10 md:rounded-2xl overflow-hidden lg:flex lg:max-w-252`}>
            <Form styles="lg:flex-1" />
            <div className="lg:flex-1 bg-white">
                {/* <Instructions /> */}
                <Results />
            </div>
        </div>
    )
}