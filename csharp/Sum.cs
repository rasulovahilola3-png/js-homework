using System;

class Sum
{
    static int SumTo(int n)
    {
        int sum = 0;
        for (int i = 1; i <= n; i++)
        {
            sum += i;
        }
        return sum;
    }

    static void Main()
    {
        Console.Write("Введи n: ");
        int n = int.Parse(Console.ReadLine());
        Console.WriteLine($"Сумма чисел от 1 до {n} = {SumTo(n)}");
    }
}