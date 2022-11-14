// 1
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort();

const maxAge = Math.max(...ages);
const minAge = Math.min(...ages);
const medianAge = ages.slice(4, 5);
const averageAge = ages.reduce((prev, cur) => prev + cur, 0) / ages.length;
const rangeAge = maxAge - minAge;
const minMinusAverage = Math.abs(minAge - averageAge);
const maxMinusAverage = Math.abs(maxAge - averageAge);

