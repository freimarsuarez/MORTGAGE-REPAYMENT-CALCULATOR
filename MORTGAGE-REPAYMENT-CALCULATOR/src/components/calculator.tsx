import { Form, Results, Instructions } from "../components";

interface Props {
    styles?: string;
}

export const Calculator = ({ styles = '' }: Props) => {
    return (
        <div className={`${styles} w-93.75`}>
            <Form />
            <div>
                <Results />
                <Instructions />
            </div>
        </div>
    )
}