const fillers = {
    welcome: ["Salutations", "Welcome", "Greetings", "Howdy", "Good evening", "Good Day", "Pleased to meet you"],
    steal: ["Stealing from", "Theiving from", "Pilfering", "Plundering", "Robbing"],
    enemies: ["Animalist Newyorkers", "Rodent Testing Scientists", "Sexist Cheese Mongers", "Pest Control & Exterminators"],
    collect: ["Gather", "Collect", "Assemble", "Compile", "Amass", "Secure"],
    capture: ["Apprehend", "Catch", "Ensnare"],
    item: ["supplies", "camouflage", "disguises", "human disguise", "dummy rats", "intel", "cheese", "traps"],
    peeps: ["new recuits", "the fleas", "the mice", "the beavers", "the snakes"],
    perps: ["the human", "the guards", "the person", "the exterminator", "the cats", "the vacuum", "the big cheese"],
    task: ["$collect the $item", "$capture the $perps", "$steal $perps", "$collect $peeps"]
  };
  
  const template = `$welcome NEW RECRUITS to R.A.T. K.I.N.G (RODENTS • AGAINST • TYRANNY) (KEEN • INTELLECTUAL • NOBLE • GALLANT)
  For this upcoming heist we'll be... $steal the $enemies. We're in the midst of preparing for our largest heist yet and we'll need
  all of the help we can get.

  Here are the various tasks that we'll need to complete.
  
  (13) $task
  (11) $task
  (10) $task
   (9) $task
   (8) $task
   (7) $task
   (6) $task
   (5) $task
   (4) $task
   (2) $task
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
