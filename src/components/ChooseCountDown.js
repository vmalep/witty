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
                    ? "selected-btn"
                    : "unselected-btn"
                }
            >
                10s countdown
            </button>
    )
}

export default ChooseCountDown;