export const getGridSizeBasedOnScreenWidth = () => {
    const screenWidth = window.screen.width;

    if (screenWidth >= 768) {
        return 48;
    } else if (screenWidth < 768 && screenWidth >= 375) {
        return 36;
    } else {
        return 24;
    }
}
