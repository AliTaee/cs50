#include <stdio.h>
#include <cs50.h>

void meow(int numberToMeow);

int main(void)
{
    int num = get_int("How many time to meow?");
    meow(num);
}

void meow(int numberToMeow)
{
    for(int i = 1; i <= numberToMeow; i++)
    {
        printf("Meow.\n");
    }
}