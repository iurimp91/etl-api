export default function transformNumbers(numbers: number[]) {
    for(let i = 0; i < numbers.length; i++) {
        let j = i;
        while(numbers[j] > numbers[j+1]) {
            let temp = numbers[j+1];
            numbers[j+1] = numbers[j];
            numbers[j] = temp;
            j++;
        }

        j = i;
        while(numbers[j] < numbers[j-1]) {
            let temp = numbers[j-1];
            numbers[j-1] = numbers[j];
            numbers[j] = temp;
            j--;
        }
    }

    return numbers;
}