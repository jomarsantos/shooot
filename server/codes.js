var codes = [
	'quiz',
	'hazy',
	'jazz',
	'whiz',
	'cozy',
	'jinx',
	'phiz',
	'qoph',
	'zyme',
	'dozy',
	'foxy',
	'jack',
	'jock',
	'waxy',
	'zerk',
	'zonk',
	'boxy',
	'faze',
	'friz',
	'haze',
	'lazy',
	'oozy',
	'poxy',
	'quay',
	'yutz',
	'zany',
	'zarf',
	'czar',
	'fizz',
	'fuzz',
	'jamb',
	'jerk',
	'jink',
	'joke',
	'juke',
	'jump',
	'junk',
	'maze',
	'quip',
	'zaps',
	'zebu',
	'zinc',
	'zips',
	'zoic',
	'zoom',
	'adze',
	'buzz',
	'daze',
	'ditz',
	'doze',
	'faux',
	'flax',
	'flex',
	'flox',
	'flux',
	'gaze',
	'hawk',
	'hoax',
	'java',
	'jaws',
	'jays',
	'jive',
	'josh',
	'jowl',
	'joys',
	'july',
	'jury',
	'lynx',
	'onyx',
	'oryx',
	'quad',
	'quid',
	'sexy',
	'styx',
	'xray',
	'xyst',
	'zags',
	'zeds',
	'zigs',
	'zing',
	'apex',
	'aqua',
	'calx',
	'coax',
	'crux',
	'exam',
	'expo',
	'hack',
	'heck',
	'hick',
	'huff',
	'ibex',
	'icky',
	'iffy',
	'jabs',
	'jams',
	'jeep',
	'jibe',
	'jobs',
	'kaph',
	'laze',
	'minx',
	'nazi',
	'ooze',
	'ouzo',
	'poky',
	'quit',
	'raze',
	'sitz',
	'size',
	'tzar',
	'wack',
	'wavy',
	'whew',
	'whey',
	'wick',
	'yack',
	'yaff',
	'yuck',
	'zati',
	'zeal',
	'zees',
	'zein',
	'zens',
	'zero',
	'zest',
	'zeta',
	'zine',
	'ziti',
	'zits',
	'zoea',
	'zone',
	'zoon',
	'zoos',
	'zori',
	'zulu',
	'axed',
	'back',
	'bevy',
	'buck',
	'buff',
	'chef',
	'chew',
	'chiv',
	'chow',
	'cock',
	'cuff',
	'fumy',
	'gawk',
	'goji',
	'hymn',
	'hype',
	'hypo',
	'jade',
	'jags',
	'jigs',
	'jogs',
	'judo',
	'jugs',
	'miff',
	'mock',
	'muck',
	'muff',
	'myth',
	'pack',
	'peck',
	'pick',
	'pock',
	'puck',
	'puff',
	'razz',
	'wham',
	'whim',
	'whip',
	'whom',
	'whop',
	'whup',
	'yawp',
	'ajar',
	'axel',
	'axes',
	'axis',
	'axle',
	'axon',
	'baby',
	'chap',
	'chic',
	'chip',
	'chop',
	'chub',
	'chum',
	'copy',
	'cwms',
	'deck',
	'defy',
	'dewy',
	'dhow',
	'dock',
	'doff',
	'duck',
	'duff',
	'exes',
	'exit',
	'exon',
	'fake',
	'fink',
	'fogy',
	'folk',
	'fork',
	'funk',
	'gaff',
	'guck',
	'guff',
	'hark',
	'high',
	'hike',
	'honk',
	'hook',
	'hulk',
	'hump',
	'hunk',
	'husk',
	'inky',
	'jail',
	'jali',
	'jars',
	'jean',
	'jeer',
	'jeli',
	'jell',
	'jest',
	'jets',
	'jilt',
	'join',
	'jolt',
	'jots',
	'june',
	'just',
	'jute',
	'juts',
	'kays',
	'keys',
	'kiwi',
	'knew',
	'know',
	'kyat',
	'mach',
	'much',
	'next',
	'okay',
	'oxen',
	'oxes',
	'sext',
	'sikh',
	'skew',
	'taxa',
	'taxi',
	'text',
	'tyke',
	'unix',
	'vamp',
	'wake',
	'walk',
	'weak',
	'week',
	'wimp',
	'wink',
	'woke',
	'woks',
	'womb',
	'work',
	'yaks',
	'yank',
	'yelk',
	'yerk',
	'yeuk',
	'yodh',
	'yogh',
	'yoke',
	'yolk',
	'yuks',
	'ahoy',
	'amok',
	'ashy',
	'avow',
	'away',
	'awny',
	'awry',
	'bake',
	'balk',
	'bank',
	'bark',
	'bask',
	'bawd',
	'beak',
	'berk',
	'bike',
	'bilk',
	'body',
	'bomb',
	'bonk',
	'book',
	'bulk',
	'bump',
	'bunk',
	'busk',
	'cake',
	'camp',
	'cask',
	'chad',
	'chug',
	'comb',
	'conk',
	'cook',
	'cork',
	'demy',
	'effs',
	'envy',
	'fave',
	'fawn',
	'fish',
	'five',
	'flaw',
	'flay',
	'flew',
	'flow',
	'fowl',
	'fray',
	'fury',
	'gyms',
	'gyps',
	'half',
	'hash',
	'hath',
	'have',
	'haws',
	'hays',
	'heth',
	'hewn',
	'hews',
	'hive',
	'holy',
	'hoof',
	'howl',
	'hows',
	'huhs',
	'hush',
	'keep',
	'kelp',
	'kept',
	'kips',
	'knob',
	'kyak',
	'lack',
	'levy',
	'lick',
	'lock',
	'luck',
	'luff',
	'make',
	'mark',
	'mask',
	'meek',
	'milk',
	'mink',
	'monk',
	'murk',
	'musk',
	'navy',
	'neck',
	'nick',
	'offs',
	'owly',
	'park',
	'peak',
	'peek',
	'perk',
	'pike',
	'pimp',
	'pink',
	'poke',
	'pomp',
	'pork',
	'puke',
	'pump',
	'punk',
	'rack',
	'rick',
	'riff',
	'rock',
	'ruff',
	'sack',
	'shah',
	'shew',
	'shiv',
	'show',
	'shwa',
	'sick',
	'skim',
	'skip',
	'sock',
	'suck',
	'sway',
	'tack',
	'thaw',
	'they',
	'tick',
	'tiff',
	'toff',
	'tuck',
	'tuff',
	'vary',
	'very',
	'view',
	'vows',
	'waft',
	'waif',
	'wary',
	'wash',
	'wave',
	'wawl',
	'ways',
	'what',
	'when',
	'whet',
	'whir',
	'whoa',
	'wife',
	'wifi',
	'wily',
	'wiry',
	'wish',
	'with',
	'wive',
	'wolf',
	'woof',
	'wove',
	'wows',
	'wyes',
	'yawl',
	'yawn',
	'yaws',
	'yeah',
	'yews',
	'yowe',
	'yowl',
	'yows',
	'yoyo',
	'ywis',
	'ably',
	'ache',
	'ahem',
	'arch',
	'army',
	'baht',
	'barf',
	'bash',
	'bath',
	'bawl',
	'bays',
	'beef',
	'beth',
	'blah',
	'blew',
	'blow',
	'bony',
	'both',
	'bowl',
	'bows',
	'boys',
	'bray',
	'brew',
	'brow',
	'buhl',
	'buhr',
	'buoy',
	'bury',
	'bush',
	'busy',
	'buys',
	'byes',
	'byte',
	'cafe',
	'calf',
	'cash',
	'cave',
	'caws',
	'char',
	'chat',
	'chin',
	'chis',
	'city',
	'claw',
	'clay',
	'clef',
	'coho',
	'coif',
	'cosy',
	'cove',
	'cowl',
	'cows',
	'coys',
	'crew',
	'crow',
	'cyan',
	'cyst',
	'damp',
	'dank',
	'dark',
	'desk',
	'disk',
	'dork',
	'duke',
	'dumb',
	'dump',
	'dunk',
	'dusk',
	'dyed',
	'each',
	'echo',
	'eddy',
	'edgy',
	'eggy',
	'eked',
	'etch',
	'face',
	'fact',
	'fame',
	'farm',
	'fibs',
	'film',
	'firm',
	'flab',
	'flap',
	'flip',
	'flop',
	'flub',
	'foam',
	'fobs',
	'foci',
	'fops',
	'form',
	'from',
	'fume',
	'geek',
	'gimp',
	'gunk',
	'hams',
	'haps',
	'harm',
	'harp',
	'hasp',
	'heap',
	'helm',
	'help',
	'heme',
	'hems',
	'herb',
	'hips',
	'hobo',
	'home',
	'hoop',
	'hope',
	'hops',
	'hubs',
	'hums',
	'inch',
	'itch',
	'kegs',
	'kick',
	'kids',
	'kind',
	'king',
	'kudu',
	'lacy',
	'limy',
	'loch',
	'many',
	'mash',
	'math',
	'maws',
	'mayo',
	'mays',
	'meow',
	'mesh',
	'mews',
	'moho',
	'moth',
	'move',
	'mown',
	'mows',
	'mush',
	'myna',
	'obey',
	'ohms',
	'ouch',
	'ovum',
	'path',
	'pave',
	'pawn',
	'paws',
	'pays',
	'pelf',
	'pews',
	'phis',
	'pith',
	'pity',
	'play',
	'plow',
	'ploy',
	'pony',
	'pooh',
	'posh',
	'posy',
	'pouf',
	'pray',
	'prey',
	'prow',
	'puny',
	'push',
	'pyre',
	'racy',
	'rich',
	'ropy',
	'ruby',
	'sham',
	'shim',
	'ship',
	'shmo',
	'shop',
	'skid',
	'spay',
	'spry',
	'such',
	'swab',
	'swam',
	'swap',
	'swim',
	'swum',
	'sync',
	'tech',
	'them',
	'type',
	'typo',
	'verb',
	'vibe',
	'vice',
	'warm',
	'warp',
	'wasp',
	'webs',
	'weep',
	'wept',
	'wipe',
	'wisp',
	'worm',
	'wrap',
	'yams',
	'yaps',
	'yaup',
	'yegg',
	'yelm',
	'yelp',
	'yipe',
	'yips',
	'acme',
	'akin',
	'ambo',
	'amps',
	'apps',
	'arks',
	'asks',
	'avid',
	'awed',
	'babe',
	'balm',
	'barb',
	'barm',
	'beam',
	'beep',
	'berm',
	'bibs',
	'blab',
	'bleb',
	'blip',
	'blob',
	'bobs',
	'boom',
	'bops',
	'brim',
	'bubo',
	'bulb',
	'bums',
	'burp',
	'cabs',
	'calm',
	'came',
	'cams',
	'cape',
	'caps',
	'carp',
	'ceca',
	'clap',
	'clip',
	'clop',
	'club',
	'cobs',
	'coma',
	'come',
	'coop',
	'cope',
	'cops',
	'corm',
	'coup',
	'crab',
	'cram',
	'crap',
	'crib',
	'crop',
	'cube',
	'cubs',
	'cups',
	'curb',
	'cusp',
	'daft',
	'dash',
	'dawn',
	'days',
	'deaf',
	'deft',
	'delf',
	'deny',
	'deva',
	'dews',
	'deys',
	'dish',
	'diva',
	'dive',
	'doth',
	'doty',
	'dove',
	'down',
	'draw',
	'drew',
	'duly',
	'duty',
	'dyer',
	'dyes',
	'dyne',
	'ebbs',
	'eeks',
	'eker',
	'ekes',
	'elks',
	'epic',
	'eyed',
	'fade',
	'fads',
	'fang',
	'feds',
	'feed',
	'fend',
	'feud',
	'figs',
	'find',
	'flag',
	'fled',
	'flog',
	'fogs',
	'fold',
	'fond',
	'food',
	'frog',
	'fund',
	'gash',
	'gave',
	'gift',
	'give',
	'glow',
	'gnaw',
	'golf',
	'goof',
	'gory',
	'gosh',
	'goth',
	'gown',
	'gray',
	'grew',
	'grey',
	'grow',
	'gulf',
	'gush',
	'guys',
	'gyre',
	'gyro',
	'hags',
	'hand',
	'hang',
	'hard',
	'head',
	'heed',
	'held',
	'herd',
	'hide',
	'hind',
	'hoed',
	'hogs',
	'hold',
	'hood',
	'hued',
	'huge',
	'hugs',
	'hung',
	'idly',
	'ilka',
	'ilks',
	'imam',
	'imps',
	'inks',
	'irks',
	'kale',
	'keel',
	'keen',
	'kern',
	'kill',
	'kiln',
	'kilt',
	'kina',
	'kine',
	'kiss',
	'kite',
	'kits',
	'knar',
	'knee',
	'knit',
	'knot',
	'knur',
	'kuna',
	'lady',
	'lake',
	'lamb',
	'lamp',
	'lank',
	'lark',
	'leak',
	'leek',
	'leks',
	'lewd',
	'like',
	'limb',
	'limp',
	'link',
	'look',
	'lump',
	'lurk',
	'mace',
	'maim',
	'mama',
	'maps',
	'meme',
	'memo',
	'mica',
	'mice',
	'mime',
	'mobs',
	'moms',
	'mope',
	'mops',
	'mums',
	'nigh',
	'nuke',
	'numb',
	'oaks',
	'oink',
	'okra',
	'owed',
	'pace',
	'pact',
	'palm',
	'papa',
	'paps',
	'peep',
	'peps',
	'perm',
	'pipe',
	'pips',
	'plop',
	'plum',
	'poem',
	'poop',
	'pope',
	'pops',
	'pram',
	'prep',
	'prim',
	'prom',
	'prop',
	'pubs',
	'puce',
	'pulp',
	'puma',
	'pupa',
	'pups',
	'rake',
	'ramp',
	'rank',
	'reak',
	'reek',
	'rink',
	'risk',
	'romp',
	'rook',
	'sagy',
	'sake',
	'saki',
	'sank',
	'scab',
	'scam',
	'scum',
	'seek',
	'shed',
	'sigh',
	'silk',
	'sink',
	'skin',
	'skis',
	'skit',
	'soak',
	'spam',
	'sulk',
	'sump',
	'sunk',
	'swag',
	'swig',
	'taka',
	'take',
	'talk',
	'tamp',
	'tank',
	'task',
	'teak',
	'thud',
	'thug',
	'tidy',
	'tike',
	'tomb',
	'took',
	'trek',
	'tusk',
	'twig',
	'ughs',
	'ugly',
	'ukes',
	'umbo',
	'umps',
	'vang',
	'vend',
	'vied',
	'void',
	'vugs',
	'wade',
	'wads',
	'wage',
	'wags',
	'wand',
	'ward',
	'weds',
	'weed',
	'weld',
	'wend',
	'wide',
	'wigs',
	'wild',
	'wind',
	'wing',
	'woad',
	'wood',
	'word',
	'yagi',
	'yald',
	'yang',
	'yard',
	'yaud',
	'yeld',
	'yird',
	'yods',
	'yoga',
	'yogi',
	'yond',
	'yuga',
	'aahs',
	'aced',
	'acid',
	'afar',
	'afro',
	'ahas',
	'airy',
	'alef',
	'ally',
	'amid',
	'anew',
	'aped',
	'arty',
	'ashs',
	'aver',
	'awes',
	'awls',
	'awns',
	'awol',
	'ayes',
	'ayin',
	'bade',
	'bags',
	'bald',
	'band',
	'bang',
	'bard',
	'baud',
	'bead',
	'beds',
	'begs',
	'bend',
	'bide',
	'bids',
	'bind',
	'bird',
	'bled',
	'blog',
	'bode',
	'bogs',
	'bold',
	'bond',
	'brad',
	'brag',
	'bred',
	'buds',
	'bugs',
	'cads',
	'cage',
	'card',
	'cede',
	'cedi',
	'clad',
	'clod',
	'clog',
	'coda',
	'code',
	'cods',
	'coed',
	'cogs',
	'cold',
	'cord',
	'crag',
	'crud',
	'cuds',
	'cued',
	'curd',
	'dabs',
	'dame',
	'damn',
	'dams',
	'daub',
	'debt',
	'deem',
	'deep',
	'deme',
	'demo',
	'derm',
	'dibs',
	'dice',
	'dime',
	'dims',
	'dips',
	'disc',
	'dome',
	'doom',
	'dope',
	'dorm',
	'drab',
	'dram',
	'drip',
	'drop',
	'drum',
	'dubs',
	'duct',
	'dupe',
	'easy',
	'eave',
	'eely',
	'eery',
	'even',
	'ever',
	'eves',
	'evil',
	'ewer',
	'ewes',
	'eyes',
	'fail',
	'fain',
	'fair',
	'fall',
	'fans',
	'fare',
	'fast',
	'fate',
	'fats',
	'faun',
	'fear',
	'feat',
	'feel',
	'fees',
	'feet',
	'fell',
	'felt',
	'fens',
	'fern',
	'feta',
	'file',
	'fill',
	'fine',
	'fins',
	'fire',
	'firs',
	'fist',
	'fits',
	'flan',
	'flat',
	'flea',
	'flee',
	'flit',
	'floe',
	'flue',
	'foal',
	'foes',
	'foil',
	'font',
	'fool',
	'foot',
	'fora',
	'fore',
	'fort',
	'foul',
	'four',
	'free',
	'fret',
	'fuel',
	'full',
	'furs',
	'fuse',
	'fuss',
	'gabs',
	'game',
	'gape',
	'gaps',
	'garb',
	'gasp',
	'gems',
	'germ',
	'glib',
	'glob',
	'glum',
	'gobs',
	'goop',
	'grab',
	'gram',
	'grim',
	'grip',
	'grub',
	'gulp',
	'gums',
	'hail',
	'hair',
	'hall',
	'halo',
	'halt',
	'hare',
	'hate',
	'hats',
	'haul',
	'heal',
	'hear',
	'heat',
	'heel',
	'heir',
	'hell',
	'hens',
	'here',
	'hero',
	'hers',
	'hill',
	'hilt',
	'hint',
	'hire',
	'hiss',
	'hits',
	'hoar',
	'hoer',
	'hoes',
	'hole',
	'hone',
	'hoot',
	'horn',
	'hose',
	'host',
	'hots',
	'hour',
	'hues',
	'hula',
	'hull',
	'hunt',
	'hurl',
	'hurt',
	'huts',
	'iced',
	'keek',
	'kink',
	'kook',
	'lash',
	'lava',
	'lave',
	'lawn',
	'laws',
	'lays',
	'leaf',
	'left',
	'levs',
	'life',
	'lift',
	'lily',
	'live',
	'loaf',
	'loft',
	'love',
	'lows',
	'lush',
	'lyre',
	'made',
	'mage',
	'magi',
	'maid',
	'mead',
	'meld',
	'mend',
	'midi',
	'mild',
	'mind',
	'mode',
	'mods',
	'mold',
	'mood',
	'mugs',
	'nave',
	'nays',
	'nevi',
	'news',
	'newt',
	'nosy',
	'nova',
	'oafs',
	'oath',
	'oily',
	'only',
	'oohs',
	'oval',
	'oven',
	'over',
	'ower',
	'owes',
	'owls',
	'owns',
	'pads',
	'page',
	'paid',
	'pang',
	'pegs',
	'pend',
	'pied',
	'pigs',
	'ping',
	'pled',
	'plod',
	'plug',
	'pods',
	'pogo',
	'pond',
	'prod',
	'pugs',
	'raft',
	'rash',
	'rave',
	'raws',
	'rays',
	'reef',
	'refs',
	'rely',
	'resh',
	'revs',
	'rhos',
	'rife',
	'rift',
	'rily',
	'rive',
	'roof',
	'rosy',
	'rove',
	'rows',
	'rush',
	'safe',
	'sash',
	'save',
	'sawn',
	'saws',
	'says',
	'scud',
	'self',
	'serf',
	'sewn',
	'sews',
	'shin',
	'shoe',
	'shoo',
	'shot',
	'shun',
	'shut',
	'sift',
	'slaw',
	'slay',
	'slew',
	'slow',
	'smog',
	'smug',
	'snow',
	'sofa',
	'soft',
	'sown',
	'sows',
	'soya',
	'soys',
	'sped',
	'spud',
	'stay',
	'stew',
	'stow',
	'stye',
	'surf',
	'swan',
	'swat',
	'teth',
	'than',
	'that',
	'thee',
	'then',
	'thin',
	'this',
	'thou',
	'thru',
	'thus',
	'tiny',
	'tofu',
	'town',
	'tows',
	'toys',
	'tray',
	'troy',
	'tufa',
	'tuft',
	'turf',
	'twin',
	'twit',
	'twos',
	'tyro',
	'uvea',
	'vain',
	'vale',
	'vane',
	'vans',
	'vara',
	'vase',
	'vast',
	'vats',
	'vatu',
	'veal',
	'vear',
	'veer',
	'vees',
	'veil',
	'vein',
	'vela',
	'vent',
	'vest',
	'veto',
	'vets',
	'vial',
	'vies',
	'vile',
	'vine',
	'visa',
	'vise',
	'voes',
	'vole',
	'volt',
	'vote',
	'wail',
	'wait',
	'wall',
	'wane',
	'want',
	'ware',
	'warn',
	'wars',
	'wart',
	'watt',
	'waul',
	'wean',
	'wear',
	'ween',
	'weir',
	'well',
	'welt',
	'went',
	'were',
	'west',
	'wets',
	'wile',
	'will',
	'wilt',
	'wine',
	'wins',
	'wire',
	'wise',
	'wist',
	'wits',
	'woes',
	'wons',
	'wont',
	'wool',
	'woos',
	'wore',
	'worn',
	'wort',
	'wren',
	'writ',
	'yare',
	'yarn',
	'yean',
	'year',
	'yeas',
	'yell',
	'yens',
	'yeti',
	'yett',
	'yill',
	'yins',
	'yirr',
	'yoni',
	'yore',
	'your',
	'yuan',
	'yule',
	'yurt',
	'abet',
	'able',
	'abut',
	'aces',
	'acne',
	'acre',
	'acts',
	'adds',
	'aged',
	'agog',
	'aims',
	'albs',
	'alms',
	'alps',
	'alum',
	'amen',
	'aper',
	'apes',
	'arcs',
	'arms',
	'asps',
	'atom',
	'atop',
	'baas',
	'bail',
	'bait',
	'bale',
	'ball',
	'bane',
	'bans',
	'bare',
	'barn',
	'bars',
	'base',
	'bass',
	'bats',
	'bean',
	'bear',
	'beat',
	'beau',
	'been',
	'beer',
	'bees',
	'beet',
	'bell',
	'belt',
	'bent',
	'best',
	'beta',
	'bets',
	'bias',
	'bile',
	'bill',
	'bins',
	'bios',
	'birr',
	'bite',
	'bits',
	'bitt',
	'blat',
	'blot',
	'blue',
	'blur',
	'boar',
	'boas',
	'boat',
	'boil',
	'boll',
	'bolt',
	'bone',
	'boon',
	'boor',
	'boos',
	'boot',
	'bore',
	'born',
	'boss',
	'bots',
	'bout',
	'bran',
	'bras',
	'brat',
	'brie',
	'bris',
	'bull',
	'buns',
	'bunt',
	'burl',
	'burn',
	'burr',
	'burs',
	'bust',
	'buts',
	'butt',
	'call',
	'cane',
	'cans',
	'cant',
	'care',
	'cars',
	'cart',
	'case',
	'cast',
	'cats',
	'cees',
	'cell',
	'celt',
	'cent',
	'cite',
	'clan',
	'clot',
	'clue',
	'coal',
	'coat',
	'coil',
	'coin',
	'cola',
	'cole',
	'colt',
	'cone',
	'cons',
	'cool',
	'coos',
	'coot',
	'core',
	'corn',
	'cost',
	'cots',
	'cues',
	'cull',
	'cult',
	'cure',
	'curl',
	'curs',
	'curt',
	'cuss',
	'cute',
	'cuts',
	'dado',
	'dads',
	'dead',
	'deed',
	'died',
	'digs',
	'ding',
	'dodo',
	'doge',
	'dogs',
	'drag',
	'dreg',
	'drug',
	'dude',
	'duds',
	'dung',
	'ecru',
	'edge',
	'eggs',
	'elms',
	'emir',
	'emit',
	'emus',
	'gaga',
	'gage',
	'gags',
	'gang',
	'geld',
	'gigs',
	'gild',
	'gird',
	'glad',
	'glug',
	'goad',
	'gods',
	'gold',
	'gong',
	'good',
	'grid',
	'ibis',
	'icer',
	'ices',
	'icon',
	'isms',
	'item',
	'labs',
	'lace',
	'lame',
	'laps',
	'leap',
	'lice',
	'lime',
	'limn',
	'limo',
	'lips',
	'lisp',
	'loam',
	'lobe',
	'lobs',
	'loci',
	'loco',
	'loom',
	'loop',
	'lope',
	'lops',
	'lube',
	'mail',
	'main',
	'male',
	'mall',
	'malt',
	'mane',
	'mans',
	'mara',
	'mare',
	'marl',
	'mars',
	'mart',
	'mass',
	'mast',
	'mate',
	'mats',
	'matt',
	'maul',
	'meal',
	'mean',
	'meat',
	'meet',
	'melt',
	'mens',
	'menu',
	'mere',
	'mesa',
	'mess',
	'mile',
	'mill',
	'mils',
	'mine',
	'mini',
	'mint',
	'mire',
	'miss',
	'mist',
	'mite',
	'mitt',
	'moan',
	'moat',
	'mole',
	'molt',
	'moon',
	'moor',
	'moos',
	'moot',
	'more',
	'moss',
	'most',
	'mule',
	'mull',
	'muon',
	'muse',
	'must',
	'mute',
	'mutt',
	'nabs',
	'name',
	'nape',
	'naps',
	'neap',
	'nibs',
	'nice',
	'nips',
	'nobs',
	'nope',
	'norm',
	'oboe',
	'odds',
	'omen',
	'omit',
	'omni',
	'once',
	'oops',
	'opal',
	'open',
	'opts',
	'orbs',
	'orca',
	'pail',
	'pain',
	'pair',
	'pale',
	'pall',
	'pals',
	'pane',
	'pans',
	'pant',
	'pare',
	'pars',
	'part',
	'pass',
	'past',
	'pate',
	'pats',
	'peal',
	'pear',
	'peas',
	'peat',
	'peel',
	'peer',
	'pelt',
	'pens',
	'pent',
	'peon',
	'pert',
	'peso',
	'pest',
	'pets',
	'pier',
	'pies',
	'pile',
	'pili',
	'pill',
	'pine',
	'pins',
	'pint',
	'pita',
	'pits',
	'pius',
	'plan',
	'plea',
	'plot',
	'plus',
	'poet',
	'pole',
	'poll',
	'polo',
	'pool',
	'poor',
	'pore',
	'porn',
	'port',
	'pose',
	'post',
	'pots',
	'pour',
	'pout',
	'pros',
	'psis',
	'pull',
	'puns',
	'punt',
	'pure',
	'purr',
	'puts',
	'putt',
	'race',
	'rami',
	'rams',
	'rape',
	'raps',
	'rapt',
	'rasp',
	'ream',
	'reap',
	'repo',
	'ribs',
	'rice',
	'rime',
	'rims',
	'ripe',
	'rips',
	'roam',
	'robe',
	'robs',
	'room',
	'rope',
	'rubs',
	'rums',
	'sacs',
	'same',
	'saps',
	'scan',
	'scar',
	'scat',
	'scot',
	'seam',
	'sect',
	'seem',
	'seep',
	'sips',
	'slab',
	'slam',
	'slap',
	'slim',
	'slip',
	'slob',
	'slop',
	'slum',
	'smit',
	'smut',
	'snap',
	'snip',
	'snob',
	'snub',
	'soap',
	'sobs',
	'some',
	'soms',
	'sops',
	'soup',
	'span',
	'spar',
	'spas',
	'spat',
	'spin',
	'spit',
	'spot',
	'spun',
	'spur',
	'stab',
	'stem',
	'step',
	'stop',
	'stub',
	'subs',
	'sumo',
	'sums',
	'tabs',
	'taco',
	'tact',
	'talc',
	'tame',
	'tams',
	'tape',
	'taps',
	'tarp',
	'team',
	'teem',
	'term',
	'tics',
	'time',
	'tipi',
	'tips',
	'tome',
	'tops',
	'tram',
	'trap',
	'trim',
	'trip',
	'tuba',
	'tube',
	'tubs',
	'tums',
	'upon',
	'uric',
	'agar',
	'ages',
	'ague',
	'aide',
	'aids',
	'alga',
	'ands',
	'arid',
	'dare',
	'darn',
	'dart',
	'data',
	'date',
	'deal',
	'dean',
	'dear',
	'deer',
	'dees',
	'deil',
	'dele',
	'deli',
	'dell',
	'dene',
	'dens',
	'dent',
	'dere',
	'dial',
	'dies',
	'diet',
	'dill',
	'dine',
	'dins',
	'dire',
	'dirt',
	'doer',
	'does',
	'dole',
	'doll',
	'dolt',
	'done',
	'dons',
	'door',
	'dose',
	'dote',
	'dots',
	'dual',
	'duel',
	'dues',
	'duet',
	'dull',
	'dune',
	'duos',
	'dust',
	'edit',
	'egos',
	'ends',
	'ergo',
	'ergs',
	'gain',
	'gait',
	'gala',
	'gale',
	'gall',
	'gals',
	'gate',
	'gear',
	'gees',
	'gell',
	'gels',
	'gene',
	'gent',
	'gets',
	'gill',
	'gilt',
	'gins',
	'girl',
	'girn',
	'gist',
	'glee',
	'glen',
	'glia',
	'glue',
	'glut',
	'gnar',
	'gnat',
	'gnus',
	'goal',
	'goat',
	'goer',
	'goes',
	'gone',
	'goon',
	'goos',
	'gore',
	'gout',
	'grin',
	'grit',
	'gull',
	'guns',
	'guru',
	'gust',
	'guts',
	'idea',
	'ides',
	'idle',
	'idol',
	'ired',
	'lade',
	'lads',
	'lags',
	'laid',
	'land',
	'lard',
	'laud',
	'lead',
	'legs',
	'lend',
	'lids',
	'lied',
	'load',
	'lode',
	'logo',
	'logs',
	'long',
	'lord',
	'loud',
	'luge',
	'lugs',
	'lung',
	'nags',
	'need',
	'nerd',
	'node',
	'nods',
	'nude',
	'odes',
	'odor',
	'ogle',
	'ogre',
	'ooid',
	'rage',
	'rags',
	'raid',
	'rand',
	'rang',
	'read',
	'redo',
	'reds',
	'reed',
	'rend',
	'ride',
	'rids',
	'rigs',
	'rind',
	'ring',
	'road',
	'rode',
	'rods',
	'rood',
	'rude',
	'rued',
	'rugs',
	'rung',
	'saga',
	'sage',
	'sags',
	'said',
	'sand',
	'sang',
	'seed',
	'send',
	'side',
	'sign',
	'sing',
	'sled',
	'slid',
	'slog',
	'slug',
	'snag',
	'snog',
	'snug',
	'soda',
	'sods',
	'sold',
	'song',
	'stag',
	'stud',
	'suds',
	'sued',
	'sung',
	'tags',
	'teed',
	'tend',
	'tide',
	'tied',
	'ting',
	'toad',
	'toed',
	'toga',
	'told',
	'tong',
	'trod',
	'tugs',
	'undo',
	'urge',
	'used',
	'ails',
	'airs',
	'alas',
	'ales',
	'aloe',
	'also',
	'alto',
	'anal',
	'anon',
	'ante',
	'ants',
	'anus',
	'area',
	'ares',
	'aria',
	'aril',
	'arts',
	'aunt',
	'aura',
	'auto',
	'earl',
	'earn',
	'ears',
	'ease',
	'east',
	'eats',
	'eels',
	'ells',
	'else',
	'enol',
	'eons',
	'eras',
	'eros',
	'etas',
	'euro',
	'ilea',
	'ills',
	'inns',
	'into',
	'ions',
	'iota',
	'ires',
	'iris',
	'iron',
	'isle',
	'lain',
	'lair',
	'lane',
	'lari',
	'lass',
	'last',
	'late',
	'lean',
	'lear',
	'leas',
	'leer',
	'lees',
	'lens',
	'lent',
	'less',
	'lest',
	'lets',
	'leus',
	'liar',
	'lien',
	'lier',
	'lies',
	'lieu',
	'line',
	'lint',
	'lion',
	'lira',
	'lire',
	'list',
	'lite',
	'loan',
	'loin',
	'loll',
	'lone',
	'loon',
	'loos',
	'loot',
	'lore',
	'lose',
	'loss',
	'lost',
	'loti',
	'lots',
	'lout',
	'luau',
	'lull',
	'lure',
	'lust',
	'lute',
	'nail',
	'naut',
	'near',
	'neat',
	'neon',
	'nest',
	'nets',
	'nils',
	'nine',
	'nits',
	'noel',
	'none',
	'noon',
	'nose',
	'note',
	'noun',
	'null',
	'nuns',
	'nuts',
	'oars',
	'oats',
	'oils',
	'oleo',
	'ones',
	'onto',
	'onus',
	'oral',
	'ores',
	'ours',
	'oust',
	'outs',
	'rail',
	'rain',
	'rant',
	'rare',
	'rate',
	'rats',
	'real',
	'rear',
	'reel',
	'rein',
	'rent',
	'rest',
	'rial',
	'riel',
	'rile',
	'rill',
	'riot',
	'rise',
	'rite',
	'roan',
	'roar',
	'roes',
	'roil',
	'role',
	'roll',
	'root',
	'rose',
	'rote',
	'rots',
	'roue',
	'rout',
	'rues',
	'ruin',
	'rule',
	'rune',
	'runs',
	'runt',
	'ruse',
	'rust',
	'ruts',
	'sail',
	'sale',
	'salt',
	'sane',
	'sari',
	'sass',
	'sate',
	'seal',
	'sear',
	'seas',
	'seat',
	'seen',
	'seer',
	'sees',
	'sell',
	'sent',
	'sera',
	'sere',
	'seta',
	'sets',
	'sill',
	'silo',
	'silt',
	'sine',
	'sins',
	'sire',
	'sirs',
	'site',
	'sits',
	'slat',
	'slit',
	'sloe',
	'slot',
	'slur',
	'snit',
	'snot',
	'soar',
	'soil',
	'sole',
	'solo',
	'sons',
	'soon',
	'soot',
	'sore',
	'sort',
	'sots',
	'soul',
	'sour',
	'star',
	'stat',
	'stir',
	'stun',
	'suer',
	'sues',
	'suet',
	'suit',
	'suns',
	'sure',
	'tail',
	'tala',
	'tale',
	'tall',
	'tans',
	'tare',
	'tarn',
	'taro',
	'tars',
	'tart',
	'taus',
	'taut',
	'teal',
	'tear',
	'teas',
	'teen',
	'tees',
	'tell',
	'tens',
	'tent',
	'tern',
	'test',
	'tier',
	'ties',
	'tile',
	'till',
	'tilt',
	'tine',
	'tins',
	'tint',
	'tire',
	'toes',
	'toil',
	'toll',
	'tone',
	'tons',
	'tool',
	'toot',
	'tore',
	'torn',
	'toro',
	'tort',
	'toss',
	'tote',
	'tots',
	'tour',
	'tout',
	'tree',
	'trio',
	'trot',
	'true',
	'tsar',
	'tuna',
	'tune',
	'turn',
	'tutu',
	'ulna',
	'unit',
	'unto',
	'urea',
	'urns',
	'user',
	'uses'
];

module.exports = codes;
