export default function FeedbackOptions({ options, onBtnClick }) {
    return options.map(option => {
        return (
            <button
                key={option}
                onClick={() => onBtnClick(option)}
                type="button"
            >
                {option}
            </button>
        )
    });
}