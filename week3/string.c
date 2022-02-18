#include <cs50.h>
#include <stdio.h>
#include <string.h>

int main(void)
{
    string name = get_string("Input your name: ");

    for(int i = 0, name_length = strlen(name); i < name_length; i++)
    {
        printf("%c", name[i]);
    }

    printf("\n");
}