const fillers = {
    // Pizza Stuff
    size: ["Small 10\"", "Medium 12\"", "Large 14\""],
    sauce: ["Robust Inspired Tomato Sauce", "Hearty Marinara Sauce", "Honey BBQ Sauce", "Garlic Parmesan Sauce", "Alfredo Sauce", "Ranch"],
    amount: ["Light", "Extra"],

    // Toppings
    meat: ["Ham", "Beef", "Salami", "Pepperoni", "Italian Sausage", "Premium Chicken", "Bacon", "Philly Steak"], 
    non_meat: ["Hot Buffalo Sauce", "Pineapple", "Garlic", "Cheddar Cheese", "Jalapeno Peppers", "Green Peppers", "Onions", "Spinach", "Banana Peppers", "Mushrooms"],
    toppings: ["$meat", "$non_meat", "$amount $meat", "$amount $non_meat", "$meat, $meat, and $meat", "$non_meat, $non_meat, and $non_meat", "$meat and $non_meat"],
    
    // Sauce
    dips: ["Garlic Dipping Sauce", "Ranch", "Marinara Dipping Sauce","Blue Cheese", "Sweet Mango Habanero Sauce"],

    // Breads
    breads: ["Parmesan Bread Twists", "Garlic Bread Twists", "Stuffed Cheesy Bread", "Stuffed Cheesy Bread with Spinach & Feta"],

    // Desserts
    desserts: ["Cinnamon Bread Twists", "Marbled Cookie Brownies", "Chocolate Lava Crunch Cakes", "Baked Apple Dip & Cinnamon Bread Twists"],

    // Ordering Stuff
    ordertype: ["Carryout", "Delivery to $streetnum $street, $city"],
    streetnum: ["2391", "3555", "512", "1659", "6059", "2682", "5313", "930", "907", "3853", "106"],
    street: ["Mission St", "Clares St", "Main Street", "Branham Lane", "Union Avenue", "Prospect Rd", "Hamilton Ave Suite", "Del Mar Ave"],
    city: ["Santa Cruz", "Capitola", "Watsonville", "San Jose", "Campbell", "San Francisco", "Sacramento", "Oakland", "San Mateo", "Rocklin"],
    words: ["correct", "right", "accurate"], 
    
  };
  
  const template = `Thank you for ordering with Dominos! Just to double check your order... 
  
  - I have a $size pizza with $sauce topped with $toppings

  - I also have some extra $sauce on the side 
  
  - Along with those I have some $breads and some $desserts

  - Lastly I have this order marked for $ordertype

  Let me know if your order is $words!

  `;
  
  
  // STUDENTS: You don't need to edit code below this line.
  
  const slotPattern = /\$(\w+)/;
  
  function replacer(match, name) {
    let options = fillers[name];
    if (options) {
      return options[Math.floor(Math.random() * options.length)];
    } else {
      return `<UNKNOWN:${name}>`;
    }
  }
  
  function generate() {
    let story = template;
    while (story.match(slotPattern)) {
      story = story.replace(slotPattern, replacer);
    }
  
    /* global box */
    box.innerText = story;
  }
  
  /* global clicker */
  clicker.onclick = generate;
  
  generate();
