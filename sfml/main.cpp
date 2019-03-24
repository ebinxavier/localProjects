#include <SFML/Graphics.hpp>
#include <iostream>

int main()
{
    std::vector<std::string> str;

    str.push_back("ebin");
    str.push_back("dibin");
    std::cout<<str[0]<<str[1];

    sf::RenderWindow window(sf::VideoMode(200, 200), "SFML works!");
    sf::CircleShape shape(100.f);
    shape.setFillColor(sf::Color::Red);

    while (window.isOpen())
    {
        sf::Event event;
        while (window.pollEvent(event))
        {
            if (event.type == sf::Event::Closed)
                window.close();
        }

        window.clear();
        window.draw(shape);
        window.display();
    }
   
    return 0;
}