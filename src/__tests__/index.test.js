const isPrime = require('../index')

describe("Проверка счёта на убываение", () => {
    it("3 = 321", () => expect(isPrime(3)).toBe("321"));
    it("5 = 54321", () => expect(isPrime(5)).toBe("54321"));
    it("0 = error", () => expect(isPrime(0)).toBe("Число не может быть меньше единицы."));
    it("103 = error", () => expect(isPrime(103)).toBe("Число не может быть больше ста."));
    it("3.3 = error", () => expect(isPrime(3.3)).toBe("Ожидается целое число."));
});
