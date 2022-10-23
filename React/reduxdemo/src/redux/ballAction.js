export const buyBall = (qty) => {
    console.log("buying balls");
    return {
        type: "BUY_BALL",
        payload:qty
    }
}