const RedGradientBG = () => {
    const style = {
        position: "fixed",
        top: 0,
        left: 0,
        height: "100%",
        width: "100%",
        zIndex: -3,
        background: "linear-gradient(108deg, #FD6767 0%, #DE2020 100%)",
    };

    return <div style={style}></div>;
};

export default RedGradientBG;
