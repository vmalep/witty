const ChooseCountDown = (props) => {
    const { countDown, setCountDown } = props;

    function handleCountDown() {
        setCountDown(!countDown)
    }

    return (
            <button
                onClick={() => handleCountDown()}
                className={
                    countDown
                    ? "action-btn"
                    : "disabled-btn"
                }
            >
                Countdown
            </button>
    )
}

export default ChooseCountDown;