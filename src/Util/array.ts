export const createNewArray = (rowLength: number, colLength: number, defaultValue: any) => {
    let matrix = new Array(rowLength).fill([]);
    matrix = matrix.map(item => {
        return new Array(colLength).fill(defaultValue);
    });
    return matrix;
};