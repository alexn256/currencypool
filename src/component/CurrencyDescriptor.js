export const CurrencyDescriptor = ({ base, out }) => {
    return (
        <div className="row-wrapper">
            <div className="currency-panel">
                <small>{base}</small>
                <small>{out}</small>
            </div>
        </div>
    );
}