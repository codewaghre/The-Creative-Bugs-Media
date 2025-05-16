

type Props = {
    width: string;
};
const Dummy = ({ width }: Props) => {
    return (
        <div className="dummy" role="presentation" aria-hidden="true" style={{ width }}>
            <div
                className="dummy-one"
                role="presentation"
                aria-hidden="true"
            ></div>
            <div
                className="dummy-two"
                role="presentation"
                aria-hidden="true"
            ></div>
            <div
                className="dummy-three"
                role="presentation"
                aria-hidden="true"
            ></div>
        </div >
    )
}

export default Dummy