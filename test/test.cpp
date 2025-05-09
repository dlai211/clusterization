#include <cmath>
#include <iostream>
#include <iomanip>  // for std::setprecision

int main() {
    float x = M_PI / 2;
    std::cout << std::setprecision(15) << M_PI << " " << x << std::endl;
    return 0;
}