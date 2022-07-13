export const getGridSizeBasedOnScreenWidth = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth >= 1024) {
        return 48;
    } else if (screenWidth >= 375) {
        return 36;
    } else {
        return 24;
    }
}
