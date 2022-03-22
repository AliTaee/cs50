#include <stdio.h>
#include <cs50.h>

int get_length(string s);

int main(void)
{
    string name = get_string("What is your name? ");
    
    int NameLength = get_length(name);
    
    printf("%i\n", NameLength);
}

int get_length(string s)
{
    int NameLength = 0;
    
    while(s[NameLength] != '\0')
    {
        NameLength++;
    }
    
    return NameLength;
}