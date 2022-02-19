#include <cs50.h>
#include <stdio.h>
#include <string.h>

typedef struct
{
    string name;
    string number;
}
person;

int main(void)
{
    person people[2];
    
    people[0].name = "ali";
    people[0].number = "555-111-444";
    
    people[1].name = "mandalorian";
    people[1].number = "999-666-333";

    for(int i = 0; i < 2; i++)
    {
        if(strcmp(people[i].name, "ali") == 0)
        {
            printf("Found %s\n", people[i].number);    
            return 0;
        }
    }

    printf("Not found \n");
    return 1;
}