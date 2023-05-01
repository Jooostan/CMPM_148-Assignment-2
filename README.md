Title: Domino Pizza Randomizer

Description: A text generator using the starter code from 
- https://github.com/julinas/p1-text-generation-starter
The page generates a random pizza order using a grammer template and groups
of tokens to create a paragraph of text.

Artist Statement: With this first assignment I was inspired by pizza orders and the random assortment of food and toppics to be ordered. While working the assignment I drew from Domino's website and used the same items / toppings along with the Domino colors to achieve a similar style.

Level of Complexity: For a slight layer of complexity I had one of the token groups draw from three other token groups in the randomization. When getting the Carryout option, it will pull from the token lists of street num, street, and city to provide more randomness in the generation.
- ex: ordertype: ["Carryout", "Delivery to $streetnum $street, $city"] 
Within the toppings the template may potentially draw from two token groups
of toppings to create different combinations.

Credit: Adam Smith