export const normalizeMaxMin = (value, max, min) => {
    if (value <= min){
        return min;
    }
    if (value > max){
        return max;
    }
    return value;
}