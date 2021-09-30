export default function transformNumbers(numbers: number[]) {
    for(let i = 0; i < numbers.length; i++) {
        let j = i;
        rightIteration(j, numbers);

        j = i;
        leftIteration(j, numbers);
    }

    return numbers;
}

function rightIteration(j: number, numbers: number[]) {
    while(numbers[j] > numbers[j+1]) {
        let temp = numbers[j+1];
        numbers[j+1] = numbers[j];
        numbers[j] = temp;
        j++;
    }
}

function leftIteration(j: number, numbers: number[]) {
    while(numbers[j] < numbers[j-1]) {
        let temp = numbers[j-1];
        numbers[j-1] = numbers[j];
        numbers[j] = temp;
        j--;
    }
}
