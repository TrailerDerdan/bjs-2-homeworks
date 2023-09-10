// Задача 1. Форматтер чисел
function parseCount(value) {
  const parsedValue = Number.parseFloat(value);
  if (Number.isNaN(parsedValue)) {
    throw new Error('Невалидное значение');
  }
  return parsedValue;
}

function validateCount(value) {
  try {
    return parseCount(value);
  } catch (error) {
    return error;
  }
}

// Задача 2. Треугольник
class Triangle {
  constructor(side1, side2, side3) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
    if (
      this.side1 + this.side2 <= this.side3 ||
      this.side1 + this.side3 <= this.side2 ||
      this.side2 + this.side3 <= this.side1
    ) {
      throw new Error('Треугольник с такими сторонами не существует');
    }
  }
  get perimeter() {
    return this.side1 + this.side2 + this.side3;
  }
  get area() {
    return Math.sqrt(
        perimeter *
        (perimeter - this.side1) *
        (perimeter - this.side2) *
        (perimeter - this.side3)
    ).toFixed(3);
  }
}

function getTriangle(side1, side2, side3) {
  try {
    const triangle = new Triangle(side1, side2, side3);
    return triangle;
  } catch (error) {
    return {
      get area() {
        return 'Ошибка! Треугольник не существует';
      },
      get perimeter() {
        return 'Ошибка! Треугольник не существует';
      },
    };
  }
}
