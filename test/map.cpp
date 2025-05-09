#include <iostream>
#include <fstream>
#include <sstream>
#include <string>
#include <unordered_map>
#include <vector>
#include <set>

int main() {
    std::ifstream infile("/eos/user/j/jlai/itk_data/old/athenaIdentifierToDetrayMap.txt");
    if (!infile.is_open()) {
        std::cerr << "Failed to open file!\n";
        return 1;
    }

    std::unordered_map<std::string, std::vector<uint64_t>> atlasToDetrayMap;
    std::string line;

    while (std::getline(infile, line)) {
        std::stringstream ss(line);
        std::string atlas_id, detray_id;
        std::getline(ss, atlas_id, ',');
        std::getline(ss, detray_id, ',');

        uint64_t detray = std::stoull(detray_id);
        atlasToDetrayMap[atlas_id].push_back(detray);
    }

    int count = 0;
    std::cout << "Duplicated atlas_id entries:\n";

    for (const auto& pair : atlasToDetrayMap) {
        if (pair.second.size() > 1) {
            std::cout << "  " << pair.first << " => ";
            for (auto val : pair.second) {
                std::cout << val << " ";
            }
            std::cout << "\n";
            count++;
            if (count >= 100) break;
        }
    }

    return 0;
}
