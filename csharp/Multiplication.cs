using System;

class Multiplication
{
    static void PrintTable(int n)
    {
        for (int i = 1; i <= 10; i++)
        {
            Console.WriteLine($"{n} × {i} = {n * i}");
        }
    }

    static void Main()
    {
        Console.Write("Введи число: ");
        int n = int.Parse(Console.ReadLine());
        PrintTable(n);
    }
}