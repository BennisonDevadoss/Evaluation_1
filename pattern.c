#include <stdio.h>
int main()
{
    int space = 5;
    for (int i = 0; i < 5; i++)
    {
        for (int k = 0; k < space; k++)
        {
            printf(" ");
        }
        space--;

        for (int j = 0; j <= i; j++)
        {
            printf("* ");
        }
        printf("\n");
    }
}
