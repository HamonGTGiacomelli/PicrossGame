export const createNewArray = <T>(rowLength: number, colLength: number, defaultValue: T): T[][] => {
    let matrix = new Array(rowLength).fill([]);
    matrix = matrix.map((item) => {
        return new Array(colLength).fill(defaultValue);
    });
    return matrix;
};
