class RandomUtils {

    static pad2(num) {
        return (num < 10 ? "0" + num : num);
    }

    static getRandomBoolean() {
        return (Math.random() >= 0.5);
    }

    static getRandomFromArray(array) {        
        return array[Math.floor(Math.random() * (array.length - 1))];
    }

    static getRandomDecimal(start, stop) {
        return (start + Math.random() * (stop - start));
    }

    static getRandomNumber(start, stop) {
        return Math.floor(this.getRandomDecimal(start, stop));
    }

    static getRandomDate(start, stop) {
        return new Date(this.getRandomNumber(start.getTime(), stop.getTime()));
    }

}

export default RandomUtils;