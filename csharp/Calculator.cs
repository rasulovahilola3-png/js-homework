using System;

class Calculator
{
    static double Calculate(double a, double b, string op)
    {
        switch (op)
        {
            case "+": return a + b;
            case "-": return a - b;
            case "*": return a * b;
            case "/":
                if (b == 0) throw new DivideByZeroException("Деление на ноль");
                return a / b;
            default: throw new ArgumentException("Неизвестная операция");
        }
    }

    static void Main()
    {
        Console.Write("Первое число: ");
        double a = double.Parse(Console.ReadLine());
        Console.Write("Второе число: ");
        double b = double.Parse(Console.ReadLine());
        Console.Write("Операция (+, -, *, /): ");
        string op = Console.ReadLine();

        try
        {
            double result = Calculate(a, b, op);
            Console.WriteLine($"{a} {op} {b} = {result}");
        }
        catch (Exception ex)
        {
            Console.WriteLine("Ошибка: " + ex.Message);
        }
    }
}