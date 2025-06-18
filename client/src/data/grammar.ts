export interface GrammarExample {
  correct: string;
  incorrect?: string;
  explanation: string;
}

export interface GrammarRule {
  id: string;
  title: string;
  description: string;
  explanation: string;
  examples: GrammarExample[];
  exercises?: string[];
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  tags: string[];
}

export interface GrammarTopic {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  rules: GrammarRule[];
}

export const grammarTopics: GrammarTopic[] = [
  {
    id: 'tenses',
    name: 'Tenses',
    description: 'Master all 12 English tenses with examples and usage patterns',
    icon: 'fas fa-clock',
    color: 'blue',
    rules: [
      {
        id: 'present-simple',
        title: 'Present Simple',
        description: 'Used for habits, facts, and general truths',
        difficulty: 'Beginner',
        tags: ['present', 'simple', 'habits', 'facts'],
        explanation: `The Present Simple tense is used to express:
- Habitual actions or routines
- General facts and truths  
- Permanent situations
- Scheduled events in the future

**Structure:**
- Positive: Subject + base verb (+ s/es for third person singular)
- Negative: Subject + do/does + not + base verb
- Question: Do/Does + subject + base verb?`,
        examples: [
          {
            correct: "I work in London.",
            explanation: "General fact about where I work"
          },
          {
            correct: "She plays tennis every Tuesday.",
            explanation: "Habitual action - note the 's' added to 'play' for third person singular"
          },
          {
            correct: "The sun rises in the east.",
            explanation: "General truth that never changes"
          },
          {
            correct: "The train leaves at 6 PM.",
            explanation: "Scheduled future event"
          },
          {
            correct: "I don't like coffee.",
            incorrect: "I don't likes coffee.",
            explanation: "Negative form - use base verb after 'don't'"
          },
          {
            correct: "Does he speak Spanish?",
            incorrect: "Does he speaks Spanish?",
            explanation: "Question form - use base verb after 'does'"
          }
        ],
        exercises: [
          "Complete: She _____ (go) to school every day.",
          "Make negative: He likes chocolate.",
          "Make question: They live in Paris."
        ]
      },
      {
        id: 'present-continuous',
        title: 'Present Continuous',
        description: 'Used for actions happening now or around now',
        difficulty: 'Beginner',
        tags: ['present', 'continuous', 'progressive', 'now'],
        explanation: `The Present Continuous tense is used to express:
- Actions happening right now
- Temporary situations
- Future arrangements
- Changing situations

**Structure:**
- Positive: Subject + am/is/are + verb + ing
- Negative: Subject + am/is/are + not + verb + ing
- Question: Am/Is/Are + subject + verb + ing?`,
        examples: [
          {
            correct: "I am studying English now.",
            explanation: "Action happening at the moment of speaking"
          },
          {
            correct: "She is working in Tokyo this month.",
            explanation: "Temporary situation"
          },
          {
            correct: "We are meeting them tomorrow.",
            explanation: "Future arrangement"
          },
          {
            correct: "The weather is getting warmer.",
            explanation: "Changing situation"
          },
          {
            correct: "I am not watching TV.",
            incorrect: "I am not watch TV.",
            explanation: "Negative form - use 'not' after am/is/are, keep -ing form"
          },
          {
            correct: "Are you listening to me?",
            explanation: "Question form - am/is/are comes before subject"
          }
        ],
        exercises: [
          "Complete: They _____ (play) football in the garden.",
          "Make negative: I am reading a book.",
          "Make question: She is cooking dinner."
        ]
      },
      {
        id: 'past-simple',
        title: 'Past Simple',
        description: 'Used for completed actions in the past',
        difficulty: 'Beginner',
        tags: ['past', 'simple', 'completed', 'finished'],
        explanation: `The Past Simple tense is used to express:
- Completed actions in the past
- Past habits or repeated actions
- Sequences of past events
- Past states or situations

**Structure:**
- Positive: Subject + past form of verb (regular: verb + ed, irregular: see list)
- Negative: Subject + did + not + base verb
- Question: Did + subject + base verb?`,
        examples: [
          {
            correct: "I visited my grandmother yesterday.",
            explanation: "Completed action in the past with specific time"
          },
          {
            correct: "She lived in France for five years.",
            explanation: "Past situation with duration"
          },
          {
            correct: "He went to the store and bought some milk.",
            explanation: "Sequence of past events - 'went' and 'bought' are irregular past forms"
          },
          {
            correct: "They didn't like the movie.",
            incorrect: "They didn't liked the movie.",
            explanation: "Negative form - use base verb after 'didn't'"
          },
          {
            correct: "Did you see the game last night?",
            incorrect: "Did you saw the game last night?",
            explanation: "Question form - use base verb after 'did'"
          },
          {
            correct: "We were happy.",
            explanation: "Past state using past form of 'be'"
          }
        ],
        exercises: [
          "Complete: She _____ (finish) her homework an hour ago.",
          "Make negative: He played tennis yesterday.",
          "Make question: They visited the museum."
        ]
      },
      {
        id: 'present-perfect',
        title: 'Present Perfect',
        description: 'Used for actions with connection to the present',
        difficulty: 'Intermediate',
        tags: ['present', 'perfect', 'experience', 'result'],
        explanation: `The Present Perfect tense is used to express:
- Life experiences (without specific time)
- Actions completed in the recent past with present relevance
- Actions that started in the past and continue to now
- Changes over time

**Structure:**
- Positive: Subject + have/has + past participle
- Negative: Subject + have/has + not + past participle
- Question: Have/Has + subject + past participle?

**Time expressions:** already, yet, just, ever, never, since, for, recently, lately`,
        examples: [
          {
            correct: "I have visited Paris three times.",
            explanation: "Life experience - we don't specify when exactly"
          },
          {
            correct: "She has just finished her work.",
            explanation: "Recent completion with present relevance"
          },
          {
            correct: "We have lived here for ten years.",
            explanation: "Action started in past, continues to present - use 'for' with duration"
          },
          {
            correct: "He has worked here since 2010.",
            explanation: "Action started in past, continues to present - use 'since' with starting point"
          },
          {
            correct: "Have you ever been to Japan?",
            explanation: "Life experience question using 'ever'"
          },
          {
            correct: "I haven't seen that movie yet.",
            incorrect: "I didn't see that movie yet.",
            explanation: "Use present perfect with 'yet' for incomplete expected actions"
          }
        ],
        exercises: [
          "Complete: They _____ (not finish) their project yet.",
          "Make question: She has traveled to many countries.",
          "Choose: I have lived here (since/for) five years."
        ]
      }
    ]
  },
  {
    id: 'parts-of-speech',
    name: 'Parts of Speech',
    description: 'The eight fundamental word categories in English',
    icon: 'fas fa-puzzle-piece',
    color: 'purple',
    rules: [
      {
        id: 'nouns',
        title: 'Nouns',
        description: 'Words that name people, places, things, or ideas',
        difficulty: 'Beginner',
        tags: ['noun', 'naming', 'countable', 'uncountable'],
        explanation: `Nouns are words that name people, places, things, or ideas. They are the foundation of sentences and can function as subjects, objects, or complements.

**Types of Nouns:**
1. **Common Nouns**: General names (book, city, dog)
2. **Proper Nouns**: Specific names (London, Shakespeare, Monday)
3. **Countable Nouns**: Can be counted (apple/apples, child/children)
4. **Uncountable Nouns**: Cannot be counted (water, information, love)
5. **Collective Nouns**: Groups (team, family, audience)
6. **Abstract Nouns**: Ideas/concepts (happiness, freedom, courage)
7. **Concrete Nouns**: Physical things (table, flower, mountain)`,
        examples: [
          {
            correct: "The students read books in the library.",
            explanation: "students (countable), books (countable), library (countable) - all common nouns"
          },
          {
            correct: "Shakespeare wrote beautiful poetry about love.",
            explanation: "Shakespeare (proper), poetry (uncountable), love (abstract/uncountable)"
          },
          {
            correct: "The team celebrated their victory with joy.",
            explanation: "team (collective), victory (abstract), joy (abstract/uncountable)"
          }
        ],
        exercises: [
          "Identify noun types: 'The happiness of children playing in Paris was wonderful.'",
          "Make plural: 'child, mouse, information, advice'",
          "Choose article: 'I need (a/an/the) information about hotels.'"
        ]
      },
      {
        id: 'pronouns',
        title: 'Pronouns',
        description: 'Words that replace nouns to avoid repetition',
        difficulty: 'Beginner',
        tags: ['pronoun', 'personal', 'possessive', 'reflexive'],
        explanation: `Pronouns replace nouns to avoid repetition and make speech more natural.

**Types of Pronouns:**
1. **Personal**: I, you, he, she, it, we, they (subject/object forms)
2. **Possessive**: mine, yours, his, hers, its, ours, theirs
3. **Reflexive**: myself, yourself, himself, herself, itself, ourselves, themselves
4. **Demonstrative**: this, that, these, those
5. **Relative**: who, whom, which, that, whose
6. **Interrogative**: who, what, which, whose, whom
7. **Indefinite**: someone, anybody, nothing, everyone, etc.`,
        examples: [
          {
            correct: "She gave him her book, and he thanked her.",
            explanation: "She (subject pronoun), him (object pronoun), her (possessive adjective), he (subject), her (object)"
          },
          {
            correct: "The students prepared themselves for the exam.",
            explanation: "themselves (reflexive pronoun) - action reflects back to subject"
          },
          {
            correct: "This is the house that we bought.",
            explanation: "This (demonstrative), that (relative pronoun connecting clauses)"
          }
        ],
        exercises: [
          "Replace with pronouns: 'Mary told John that Mary would help John.'",
          "Choose correct form: 'Between you and (I/me), this is difficult.'",
          "Use reflexive: 'The children enjoyed _____ at the party.'"
        ]
      },
      {
        id: 'verbs',
        title: 'Verbs',
        description: 'Action words and state-of-being words',
        difficulty: 'Beginner',
        tags: ['verb', 'action', 'linking', 'auxiliary'],
        explanation: `Verbs express actions, states, or occurrences. They are essential for forming complete sentences.

**Types of Verbs:**
1. **Action Verbs**: Express physical or mental actions (run, think, write)
2. **Linking Verbs**: Connect subject to complement (be, seem, become, appear)
3. **Auxiliary Verbs**: Help main verbs (do, have, be, will, can, must)
4. **Transitive**: Need direct object (She reads books)
5. **Intransitive**: Don't need object (Birds fly)

**Verb Forms:**
- Base form: walk, go, be
- Past form: walked, went, was/were
- Past participle: walked, gone, been
- Present participle: walking, going, being`,
        examples: [
          {
            correct: "She is reading a fascinating book about science.",
            explanation: "is (auxiliary/linking), reading (main action verb), fascinating (participle as adjective)"
          },
          {
            correct: "The flowers smell wonderful in the garden.",
            explanation: "smell (linking verb connecting subject 'flowers' to complement 'wonderful')"
          },
          {
            correct: "They have been studying English for three years.",
            explanation: "have been (auxiliary verbs), studying (main verb in continuous form)"
          }
        ],
        exercises: [
          "Identify verb types: 'The students are becoming more confident.'",
          "Choose correct form: 'She has (go/went/gone) to the store.'",
          "Make question: 'He can speak French fluently.'"
        ]
      },
      {
        id: 'adjectives',
        title: 'Adjectives',
        description: 'Words that describe or modify nouns and pronouns',
        difficulty: 'Beginner',
        tags: ['adjective', 'descriptive', 'comparative', 'superlative'],
        explanation: `Adjectives describe, identify, or quantify nouns and pronouns. They make writing more vivid and precise.

**Types of Adjectives:**
1. **Descriptive**: beautiful, tall, intelligent, red
2. **Quantitative**: many, few, several, some, all
3. **Demonstrative**: this, that, these, those
4. **Possessive**: my, your, his, her, its, our, their
5. **Interrogative**: which, what, whose

**Comparison:**
- **Positive**: tall, beautiful, good
- **Comparative**: taller, more beautiful, better
- **Superlative**: tallest, most beautiful, best

**Order of Adjectives:**
Opinion → Size → Age → Shape → Color → Origin → Material → Purpose`,
        examples: [
          {
            correct: "She bought a beautiful small antique round silver Italian jewelry box.",
            explanation: "Adjectives in correct order: opinion→size→age→shape→color→origin→material→purpose"
          },
          {
            correct: "This problem is more difficult than that one.",
            explanation: "Comparative form for adjectives with 2+ syllables using 'more'"
          },
          {
            correct: "She is the most intelligent student in the class.",
            explanation: "Superlative form with 'most' for longer adjectives"
          }
        ],
        exercises: [
          "Put in order: 'box wooden small old'",
          "Make comparative: 'This book is (interesting) than that one.'",
          "Choose correct: 'She is (good/better/best) at math than her sister.'"
        ]
      },
      {
        id: 'adverbs',
        title: 'Adverbs',
        description: 'Words that modify verbs, adjectives, or other adverbs',
        difficulty: 'Intermediate',
        tags: ['adverb', 'manner', 'time', 'place', 'frequency'],
        explanation: `Adverbs modify verbs, adjectives, other adverbs, or entire sentences. They provide information about how, when, where, or to what extent.

**Types of Adverbs:**
1. **Manner**: carefully, quickly, well, badly (how?)
2. **Time**: now, yesterday, soon, already (when?)
3. **Place**: here, there, everywhere, outside (where?)
4. **Frequency**: always, never, sometimes, often (how often?)
5. **Degree**: very, quite, extremely, rather (to what extent?)

**Formation**: Many adverbs are formed by adding -ly to adjectives (quick→quickly, careful→carefully)

**Position**: Adverbs can appear at the beginning, middle, or end of sentences, depending on type and emphasis.`,
        examples: [
          {
            correct: "She carefully examined the document thoroughly.",
            explanation: "carefully (manner, before verb), thoroughly (manner, after object)"
          },
          {
            correct: "Yesterday, we often visited the extremely beautiful park.",
            explanation: "Yesterday (time, sentence start), often (frequency, before main verb), extremely (degree, before adjective)"
          },
          {
            correct: "The students worked very hard and performed remarkably well.",
            explanation: "very (degree, modifying adverb 'hard'), remarkably (degree, modifying adverb 'well')"
          }
        ],
        exercises: [
          "Form adverbs: 'careful, easy, good, fast'",
          "Position correctly: 'always/She/her homework/does'",
          "Choose correct: 'He speaks English (good/well).'"
        ]
      }
    ]
  },
  {
    id: 'active-passive-voice',
    name: 'Active and Passive Voice',
    description: 'Understanding when and how to use active and passive constructions',
    icon: 'fas fa-exchange-alt',
    color: 'orange',
    rules: [
      {
        id: 'active-voice',
        title: 'Active Voice',
        description: 'When the subject performs the action',
        difficulty: 'Intermediate',
        tags: ['active', 'voice', 'subject', 'action'],
        explanation: `In active voice, the subject of the sentence performs the action expressed by the verb. Active voice makes writing more direct, clear, and engaging.

**Structure**: Subject + Verb + Object
**Characteristics:**
- Subject is the doer of the action
- More direct and concise
- Easier to understand
- Preferred in most writing

**When to use Active Voice:**
- When the doer is important or known
- For clear, direct communication
- In most everyday writing
- When you want to emphasize who did what`,
        examples: [
          {
            correct: "The chef prepared a delicious meal.",
            explanation: "Subject 'chef' actively performs the action 'prepared' on object 'meal'"
          },
          {
            correct: "Students completed their assignments on time.",
            explanation: "Clear identification of who did the action - students actively completed"
          },
          {
            correct: "The company will announce the results tomorrow.",
            explanation: "Future active voice - company is the clear subject performing the action"
          },
          {
            correct: "She has written three novels this year.",
            explanation: "Present perfect active - she is the active agent of writing"
          }
        ],
        exercises: [
          "Identify active voice: 'The teacher explained the lesson clearly.'",
          "Change to active: 'The book was read by millions of people.'",
          "Complete actively: 'The team _____ (win) the championship last year.'"
        ]
      },
      {
        id: 'passive-voice',
        title: 'Passive Voice',
        description: 'When the subject receives the action',
        difficulty: 'Intermediate',
        tags: ['passive', 'voice', 'object', 'be', 'past participle'],
        explanation: `In passive voice, the subject receives the action rather than performing it. The focus shifts from the doer to the action or its result.

**Structure**: Subject + be + past participle + (by + agent)
**Formation:** Object of active sentence becomes subject of passive sentence

**When to use Passive Voice:**
- When the doer is unknown or unimportant
- When you want to emphasize the action or result
- In formal/academic writing
- When the doer is obvious from context
- To avoid responsibility or blame`,
        examples: [
          {
            correct: "The meal was prepared by the chef.",
            explanation: "Focus on the meal (what was prepared) rather than who prepared it"
          },
          {
            correct: "English is spoken in many countries.",
            explanation: "Agent (speakers) is obvious and unimportant - focus on the fact"
          },
          {
            correct: "The results will be announced tomorrow.",
            explanation: "Who announces is less important than when announcement happens"
          },
          {
            correct: "Mistakes were made in the calculation.",
            explanation: "Passive used to avoid mentioning who made mistakes"
          }
        ],
        exercises: [
          "Change to passive: 'The storm destroyed many houses.'",
          "Complete passive: 'The letter _____ (deliver) yesterday.'",
          "Choose voice: 'The project (completed/was completed) on time.'"
        ]
      },
      {
        id: 'voice-transformation',
        title: 'Transforming Between Voices',
        description: 'Rules and practice for changing active to passive and vice versa',
        difficulty: 'Advanced',
        tags: ['transformation', 'active', 'passive', 'conversion'],
        explanation: `Converting between active and passive voice follows specific rules and patterns.

**Active to Passive Transformation:**
1. Object of active sentence → Subject of passive sentence
2. Subject of active sentence → Agent (by + subject) or omitted
3. Verb changes to: be + past participle
4. Tense of 'be' matches tense of original verb

**Passive to Active Transformation:**
1. Agent (after 'by') → Subject of active sentence
2. Subject of passive → Object of active sentence
3. Remove 'be' and change past participle to appropriate tense

**Verbs that cannot be passive:** Intransitive verbs (arrive, die, exist), linking verbs (seem, become), and some others (have, lack, resemble).`,
        examples: [
          {
            correct: "Active: The company hired fifty employees. → Passive: Fifty employees were hired (by the company).",
            explanation: "Object 'fifty employees' becomes subject, 'hired' becomes 'were hired'"
          },
          {
            correct: "Passive: The problem has been solved by the team. → Active: The team has solved the problem.",
            explanation: "Agent 'team' becomes subject, 'has been solved' becomes 'has solved'"
          },
          {
            correct: "Active: They are building a new bridge. → Passive: A new bridge is being built.",
            explanation: "Present continuous active to present continuous passive"
          }
        ],
        exercises: [
          "Transform: 'Scientists have discovered a new planet.'",
          "Make active: 'The song was written by a famous composer.'",
          "Identify impossible: 'The flowers smell beautiful.' (can this be passive?)"
        ]
      }
    ]
  },
  {
    id: 'direct-indirect-speech',
    name: 'Direct and Indirect Speech',
    description: 'Reporting what someone said or thought',
    icon: 'fas fa-quote-left',
    color: 'teal',
    rules: [
      {
        id: 'direct-speech',
        title: 'Direct Speech',
        description: 'Quoting exact words spoken',
        difficulty: 'Beginner',
        tags: ['direct', 'speech', 'quotation', 'marks'],
        explanation: `Direct speech repeats the exact words someone spoke, using quotation marks.

**Structure:** Reporting verb + "exact words"
**Punctuation:**
- Use quotation marks around spoken words
- Comma before opening quote (usually)
- Punctuation inside closing quote
- Capital letter at start of quote

**Common reporting verbs:** said, told, asked, replied, shouted, whispered, explained, announced`,
        examples: [
          {
            correct: 'She said, "I am going to the store."',
            explanation: "Exact words in quotes, comma before quote, capital 'I' inside quote"
          },
          {
            correct: '"What time is it?" he asked.',
            explanation: "Question in quotes, question mark inside quotes, lowercase reporting verb"
          },
          {
            correct: 'The teacher announced, "The test is postponed until Friday."',
            explanation: "Complete statement in quotes with period inside"
          },
          {
            correct: '"Please help me," she whispered.',
            explanation: "Imperative (command/request) in direct speech"
          }
        ],
        exercises: [
          'Punctuate: The student said I dont understand this problem',
          'Add quotes: My mother told me to clean my room',
          'Correct: "where are you going? she asked.'
        ]
      },
      {
        id: 'indirect-speech',
        title: 'Indirect Speech (Reported Speech)',
        description: 'Reporting what someone said without using exact words',
        difficulty: 'Intermediate',
        tags: ['indirect', 'reported', 'speech', 'tense', 'changes'],
        explanation: `Indirect speech reports what someone said without using their exact words. It requires several grammatical changes.

**Structure:** Reporting verb + that + reported clause

**Key Changes:**
1. **Tense shifts** (backshift): Present → Past, Past → Past Perfect
2. **Pronoun changes**: I → he/she, you → I/we, etc.
3. **Time/place references**: today → that day, here → there
4. **Modal verb changes**: can → could, will → would, may → might

**No quotation marks needed**`,
        examples: [
          {
            correct: 'Direct: "I am studying English." → Indirect: She said (that) she was studying English.',
            explanation: "Present continuous → Past continuous, I → she"
          },
          {
            correct: 'Direct: "I will call you tomorrow." → Indirect: He said he would call me the next day.',
            explanation: "will → would, you → me, tomorrow → the next day"
          },
          {
            correct: 'Direct: "Where do you live?" → Indirect: She asked where I lived.',
            explanation: "Question word order changes, do you live → I lived"
          },
          {
            correct: 'Direct: "Please sit down." → Indirect: The teacher told us to sit down.',
            explanation: "Imperative becomes infinitive with 'to'"
          }
        ],
        exercises: [
          'Report: "I have finished my homework."',
          'Change: "Can you help me?" she asked.',
          'Report command: "Open your books," the teacher said.'
        ]
      }
    ]
  },
  {
    id: 'articles',
    name: 'Articles (A, An, The)',
    description: 'Definite and indefinite articles usage rules',
    icon: 'fas fa-font',
    color: 'red',
    rules: [
      {
        id: 'indefinite-articles',
        title: 'Indefinite Articles (A/An)',
        description: 'Using a and an with singular countable nouns',
        difficulty: 'Beginner',
        tags: ['articles', 'indefinite', 'a', 'an', 'countable'],
        explanation: `Indefinite articles 'a' and 'an' are used with singular countable nouns when referring to something for the first time or something general.

**Rules:**
- Use 'a' before consonant sounds: a book, a university, a European
- Use 'an' before vowel sounds: an apple, an hour, an honest person
- Based on SOUND, not spelling

**When to use A/An:**
1. First mention of something
2. General statements about a class
3. With jobs/professions
4. In expressions of frequency
5. Meaning "one" or "any"`,
        examples: [
          {
            correct: "I saw a movie last night. An elephant escaped from the zoo.",
            explanation: "First mention - 'a' before consonant sound 'm', 'an' before vowel sound 'e'"
          },
          {
            correct: "She is a teacher. He wants to become an engineer.",
            explanation: "Jobs/professions use indefinite articles"
          },
          {
            correct: "A dog is a faithful animal.",
            explanation: "General statement about all dogs as a class"
          },
          {
            correct: "I exercise twice a week.",
            explanation: "Expression of frequency - 'a' meaning 'per'"
          }
        ],
        exercises: [
          "Choose: I need (a/an) umbrella for (a/an) hour.",
          "Complete: She is ___ honest person and ___ university student.",
          "Correct: I bought a orange and a apple."
        ]
      },
      {
        id: 'definite-article',
        title: 'Definite Article (The)',
        description: 'Using the for specific, known things',
        difficulty: 'Intermediate',
        tags: ['articles', 'definite', 'the', 'specific'],
        explanation: `The definite article 'the' is used when both speaker and listener know which specific thing is being discussed.

**When to use THE:**
1. Second mention (already introduced)
2. Unique things (the sun, the moon, the President)
3. Superlatives (the best, the largest)
4. Specific groups (the rich, the elderly)
5. Geographic features (the Pacific, the Alps)
6. Musical instruments (play the piano)
7. Ordinal numbers (the first, the second)

**When NOT to use THE:**
- General plural nouns (Dogs are loyal)
- Abstract nouns (Love is important)
- Languages (I speak English)
- Sports (play football)
- Meals (have breakfast)`,
        examples: [
          {
            correct: "I bought a car yesterday. The car is red.",
            explanation: "First mention uses 'a', second mention uses 'the'"
          },
          {
            correct: "The sun rises in the east.",
            explanation: "Unique things everyone knows about"
          },
          {
            correct: "She is the best student in the class.",
            explanation: "Superlative form requires 'the'"
          },
          {
            correct: "I love music, but I can't play the guitar.",
            explanation: "General 'music' (no article), specific instrument 'the guitar'"
          }
        ],
        exercises: [
          "Add articles: ___ life is beautiful. ___ life of ___ artist is difficult.",
          "Choose: I play (the) tennis and (the) piano.",
          "Complete: ___ Pacific Ocean is ___ largest ocean on ___ Earth."
        ]
      }
    ]
  },
  {
    id: 'prepositions',
    name: 'Prepositions',
    description: 'Words showing relationships of time, place, and direction',
    icon: 'fas fa-map-signs',
    color: 'cyan',
    rules: [
      {
        id: 'prepositions-time',
        title: 'Prepositions of Time',
        description: 'At, on, in, during, for, since, by, etc.',
        difficulty: 'Intermediate',
        tags: ['prepositions', 'time', 'at', 'on', 'in'],
        explanation: `Prepositions of time show when something happens.

**AT:** Specific times
- at 3 o'clock, at midnight, at noon, at the weekend, at Christmas

**ON:** Days and dates
- on Monday, on July 4th, on my birthday, on weekdays

**IN:** Months, years, periods
- in January, in 2023, in the morning, in summer, in the future

**Other time prepositions:**
- FOR: duration (for 2 hours, for a week)
- SINCE: starting point (since Monday, since 2020)
- DURING: throughout a period (during the meeting, during winter)
- BY: deadline (by Friday, by 5 PM)
- UNTIL/TILL: up to a point (until tomorrow, till midnight)`,
        examples: [
          {
            correct: "The meeting is at 2 PM on Friday in December.",
            explanation: "at (specific time), on (day), in (month)"
          },
          {
            correct: "I have lived here for five years since 2019.",
            explanation: "for (duration), since (starting point)"
          },
          {
            correct: "Please finish this by tomorrow during your free time.",
            explanation: "by (deadline), during (throughout period)"
          },
          {
            correct: "We work from 9 AM until 5 PM on weekdays.",
            explanation: "from...until (time span), on (days)"
          }
        ],
        exercises: [
          "Complete: The party is ___ Saturday ___ 7 PM ___ the evening.",
          "Choose: I've been waiting (for/since) an hour (for/since) 2 PM.",
          "Correct: She was born in Monday in 1995 at the morning."
        ]
      },
      {
        id: 'prepositions-place',
        title: 'Prepositions of Place',
        description: 'At, on, in, under, over, between, etc.',
        difficulty: 'Intermediate',
        tags: ['prepositions', 'place', 'location', 'position'],
        explanation: `Prepositions of place show where something is located.

**AT:** Specific points/addresses
- at home, at school, at 123 Main Street, at the corner

**ON:** Surfaces/lines
- on the table, on the wall, on the street, on page 5

**IN:** Enclosed spaces/areas
- in the room, in the box, in London, in the car

**Other place prepositions:**
- UNDER/BELOW: beneath (under the table, below sea level)
- OVER/ABOVE: higher than (over the bridge, above the clouds)
- BETWEEN: in the middle of two (between the chairs)
- AMONG: in the middle of more than two (among the trees)
- BEHIND: at the back of (behind the house)
- IN FRONT OF: at the front of (in front of the building)`,
        examples: [
          {
            correct: "The book is on the shelf in the library at the university.",
            explanation: "on (surface), in (enclosed space), at (specific location)"
          },
          {
            correct: "The cat is under the table between the two chairs.",
            explanation: "under (beneath), between (middle of two items)"
          },
          {
            correct: "She lives in Paris on Baker Street at number 10.",
            explanation: "in (city), on (street), at (specific address)"
          },
          {
            correct: "The plane flew over the mountains above the clouds.",
            explanation: "over (across), above (higher than)"
          }
        ],
        exercises: [
          "Complete: The picture is ___ the wall ___ the living room ___ our house.",
          "Choose: Meet me (at/on/in) the corner (at/on/in) 5th Avenue.",
          "Correct: The bird is flying over the trees between the sky."
        ]
      }
    ]
  },
  {
    id: 'clauses-sentences',
    name: 'Clauses and Sentence Types',
    description: 'Understanding different types of clauses and sentences',
    icon: 'fas fa-sitemap',
    color: 'indigo',
    rules: [
      {
        id: 'independent-dependent-clauses',
        title: 'Independent and Dependent Clauses',
        description: 'Understanding the building blocks of complex sentences',
        difficulty: 'Advanced',
        tags: ['clauses', 'independent', 'dependent', 'subordinate'],
        explanation: `Clauses are groups of words containing a subject and verb.

**Independent Clauses:**
- Complete thought, can stand alone
- Forms a complete sentence
- Example: "I went to the store."

**Dependent Clauses (Subordinate):**
- Incomplete thought, cannot stand alone
- Begins with subordinating conjunction (because, when, if, although, etc.)
- Needs independent clause to complete meaning

**Types of Dependent Clauses:**
1. **Adverb clauses**: Answer when, where, why, how (When it rains, we stay inside)
2. **Adjective clauses**: Describe nouns (The book that I read was interesting)
3. **Noun clauses**: Function as nouns (What he said was true)`,
        examples: [
          {
            correct: "I stayed home because it was raining.",
            explanation: "Independent clause + dependent adverb clause (reason)"
          },
          {
            correct: "The movie that we watched last night was excellent.",
            explanation: "Independent clause with embedded adjective clause describing 'movie'"
          },
          {
            correct: "What you need is more practice.",
            explanation: "Noun clause as subject + independent clause"
          },
          {
            correct: "Although she studied hard, she didn't pass the exam.",
            explanation: "Dependent clause + independent clause (concession)"
          }
        ],
        exercises: [
          "Identify clauses: 'When the bell rings, students go to class because it's time.'",
          "Combine: 'The man is my teacher. He is wearing a blue shirt.'",
          "Complete: 'I don't know _____ he will arrive.'"
        ]
      },
      {
        id: 'sentence-types',
        title: 'Types of Sentences',
        description: 'Simple, compound, complex, and compound-complex sentences',
        difficulty: 'Advanced',
        tags: ['sentences', 'simple', 'compound', 'complex'],
        explanation: `Sentences are classified by their structure and clause combinations.

**Simple Sentences:**
- One independent clause only
- May have compound subjects/verbs
- Example: "Dogs bark." or "Dogs and cats are pets."

**Compound Sentences:**
- Two or more independent clauses
- Connected by coordinating conjunctions (and, but, or, nor, for, so, yet)
- Example: "I studied hard, but the test was difficult."

**Complex Sentences:**
- One independent + one or more dependent clauses
- Example: "When it rains, I stay inside."

**Compound-Complex Sentences:**
- Two or more independent clauses + one or more dependent clauses
- Example: "I studied hard because the test was important, but I still found it difficult."`,
        examples: [
          {
            correct: "The students studied diligently.",
            explanation: "Simple sentence - one independent clause"
          },
          {
            correct: "I wanted to go, but it was raining heavily.",
            explanation: "Compound sentence - two independent clauses joined by 'but'"
          },
          {
            correct: "Although it was late, we continued working.",
            explanation: "Complex sentence - dependent clause + independent clause"
          },
          {
            correct: "When the alarm rang, I woke up quickly, and I got dressed.",
            explanation: "Compound-complex - dependent + independent + independent clauses"
          }
        ],
        exercises: [
          "Classify: 'The book that I borrowed from the library was fascinating.'",
          "Make compound: 'It was cold. We went swimming anyway.'",
          "Add dependent clause: 'She passed the exam _____ she studied hard.'"
        ]
      }
    ]
  },
  {
    id: 'punctuation',
    name: 'Punctuation',
    description: 'Proper use of punctuation marks',
    icon: 'fas fa-exclamation',
    color: 'pink',
    rules: [
      {
        id: 'periods-questions-exclamations',
        title: 'Periods, Question Marks, and Exclamation Points',
        description: 'Basic sentence-ending punctuation',
        difficulty: 'Beginner',
        tags: ['punctuation', 'period', 'question', 'exclamation'],
        explanation: `These punctuation marks end sentences and indicate their purpose.

**Period (.):**
- Ends declarative statements
- Ends mild commands
- Used in abbreviations (Dr., etc., U.S.A.)

**Question Mark (?):**
- Ends direct questions
- Not used with indirect questions
- Can be used to show uncertainty

**Exclamation Point (!):**
- Shows strong emotion, surprise, or emphasis
- Ends exclamatory sentences
- Use sparingly in formal writing
- Can follow interjections`,
        examples: [
          {
            correct: "She completed her homework. Did you finish yours? What an amazing performance!",
            explanation: "Statement (period), question (question mark), exclamation (exclamation point)"
          },
          {
            correct: "Please sit down. I wonder if he will come.",
            explanation: "Mild command (period), indirect question (period, not question mark)"
          },
          {
            correct: "Dr. Smith works at St. Mary's Hospital.",
            explanation: "Periods in abbreviations"
          },
          {
            correct: "Wow! That was incredible!",
            explanation: "Interjection and exclamatory sentence"
          }
        ],
        exercises: [
          "Punctuate: 'What time is it I think its three oclock'",
          "Choose: 'I asked if she was coming(./?)' (direct or indirect question?)",
          "Correct: 'Help. Fire? Someone call 911.'"
        ]
      },
      {
        id: 'commas-semicolons',
        title: 'Commas and Semicolons',
        description: 'Using commas and semicolons correctly',
        difficulty: 'Intermediate',
        tags: ['punctuation', 'comma', 'semicolon', 'lists'],
        explanation: `Commas and semicolons organize information within sentences.

**Comma Uses:**
1. Lists: apples, oranges, and bananas
2. Before conjunctions in compound sentences
3. After dependent clauses at sentence start
4. Around non-essential information
5. In dates and addresses
6. Direct address and dialogue

**Semicolon Uses:**
1. Connect closely related independent clauses
2. Separate complex list items
3. Before conjunctive adverbs (however, therefore, etc.)

**Remember:** Semicolons are stronger than commas but weaker than periods.`,
        examples: [
          {
            correct: "I bought apples, oranges, and bananas at the store.",
            explanation: "Oxford comma in list (optional but recommended)"
          },
          {
            correct: "When it rains, we stay inside, but when it's sunny, we go out.",
            explanation: "Comma after dependent clause, comma before conjunction"
          },
          {
            correct: "She studied hard; therefore, she passed the exam.",
            explanation: "Semicolon before conjunctive adverb"
          },
          {
            correct: "My teacher, who is very kind, helped me understand.",
            explanation: "Commas around non-essential relative clause"
          }
        ],
        exercises: [
          "Add commas: 'After the meeting we went to lunch and then returned to work.'",
          "Choose comma or semicolon: 'She loves reading( , ; )she reads every day.'",
          "Punctuate list: 'I visited Paris France Rome Italy and Madrid Spain.'"
        ]
      }
    ]
  },
  {
    id: 'modal-verbs',
    name: 'Modal Verbs',
    description: 'Understanding modal verbs and their various uses',
    icon: 'fas fa-key',
    color: 'green',
    rules: [
      {
        id: 'can-could-ability',
        title: 'Can and Could - Ability and Permission',
        description: 'Expressing ability, possibility, and permission',
        difficulty: 'Beginner',
        tags: ['modal', 'can', 'could', 'ability', 'permission'],
        explanation: `Can and Could are modal verbs used to express ability, possibility, and permission.

**CAN:**
- Present ability: "I can swim."
- Permission (informal): "Can I go now?"
- General possibility: "It can be cold in winter."

**COULD:**
- Past ability: "When I was young, I could run fast."
- Polite requests: "Could you help me?"
- Suggestions: "We could go to the movies."
- Possibility: "It could rain later."

**Structure:** Subject + can/could + base verb`,
        examples: [
          {
            correct: "She can speak three languages fluently.",
            explanation: "Present ability - what she is able to do now"
          },
          {
            correct: "Could you please open the window?",
            explanation: "Polite request using 'could' for politeness"
          },
          {
            correct: "When he was younger, he could lift heavy weights.",
            explanation: "Past ability - what he was able to do before"
          },
          {
            correct: "We could visit the museum if you want.",
            explanation: "Suggestion or possibility for future action"
          }
        ],
        exercises: [
          "Complete: When I was a child, I _____ (climb) trees easily.",
          "Make polite: 'Give me your pen.' → '_____ you _____ me your pen?'",
          "Express ability: 'She _____ play the piano very well.'"
        ]
      },
      {
        id: 'must-have-to',
        title: 'Must and Have To - Obligation',
        description: 'Expressing necessity and obligation',
        difficulty: 'Intermediate',
        tags: ['modal', 'must', 'have to', 'obligation', 'necessity'],
        explanation: `Must and Have To express obligation and necessity.

**MUST:**
- Strong obligation/necessity: "You must study for the exam."
- Personal conviction: "This must be the right answer."
- Prohibition (must not): "You must not smoke here."

**HAVE TO:**
- External obligation: "I have to work tomorrow."
- Past obligation: "Yesterday, I had to wake up early."
- Questions about obligation: "Do you have to go now?"

**Key Difference:**
- Must = internal/personal feeling of obligation
- Have to = external rule or requirement`,
        examples: [
          {
            correct: "Students must complete their assignments on time.",
            explanation: "Strong obligation/rule from authority"
          },
          {
            correct: "I have to catch the 8 AM train to get to work.",
            explanation: "External requirement/necessity"
          },
          {
            correct: "You must not use your phone during the exam.",
            explanation: "Prohibition - 'must not' means it's forbidden"
          },
          {
            correct: "Do you have to work on weekends?",
            explanation: "Question about external obligation"
          }
        ],
        exercises: [
          "Choose: 'I (must/have to) visit my grandmother. She's expecting me.'",
          "Make negative: 'You must tell anyone about this.' (prohibition)",
          "Past obligation: 'Yesterday, she _____ stay late at the office.'"
        ]
      },
      {
        id: 'will-would-future',
        title: 'Will and Would - Future and Hypothetical',
        description: 'Expressing future, willingness, and hypothetical situations',
        difficulty: 'Intermediate',
        tags: ['modal', 'will', 'would', 'future', 'hypothetical'],
        explanation: `Will and Would express future actions, willingness, and hypothetical situations.

**WILL:**
- Future predictions: "It will rain tomorrow."
- Spontaneous decisions: "I'll help you with that."
- Promises: "I will call you later."
- Offers: "Will you have some tea?"

**WOULD:**
- Hypothetical situations: "If I were rich, I would travel."
- Polite requests: "Would you mind closing the door?"
- Past habits: "When I was young, I would play outside."
- Conditional: "I would go if I had time."

**Contractions:** will = 'll, would = 'd`,
        examples: [
          {
            correct: "I think it will be sunny tomorrow.",
            explanation: "Future prediction based on opinion"
          },
          {
            correct: "Would you like to join us for dinner?",
            explanation: "Polite invitation using 'would'"
          },
          {
            correct: "If I won the lottery, I would buy a house.",
            explanation: "Hypothetical situation (second conditional)"
          },
          {
            correct: "Every summer, we would visit our grandparents.",
            explanation: "Past habit - repeated action in the past"
          }
        ],
        exercises: [
          "Future: 'The meeting _____ start at 3 PM.'",
          "Hypothetical: 'If you studied harder, you _____ pass the exam.'",
          "Polite request: '_____ you mind helping me?'"
        ]
      }
    ]
  },
  {
    id: 'determiners',
    name: 'Determiners',
    description: 'Words that introduce and modify nouns',
    icon: 'fas fa-hand-point-right',
    color: 'yellow',
    rules: [
      {
        id: 'quantifiers',
        title: 'Quantifiers (Some, Any, Much, Many)',
        description: 'Words that indicate quantity or amount',
        difficulty: 'Intermediate',
        tags: ['determiners', 'quantifiers', 'some', 'any', 'much', 'many'],
        explanation: `Quantifiers express quantity or amount and are used with different types of nouns.

**With Countable Nouns:**
- Many: "many books" (large quantity)
- Few/A few: "few problems" (small quantity)
- Several: "several students"
- A number of: "a number of issues"

**With Uncountable Nouns:**
- Much: "much water" (large amount)
- Little/A little: "little time" (small amount)
- A great deal of: "a great deal of work"

**With Both:**
- Some: positive statements and offers
- Any: negative statements and questions
- A lot of/Lots of: informal, large quantity`,
        examples: [
          {
            correct: "There are many students but little time for questions.",
            explanation: "many (countable), little (uncountable)"
          },
          {
            correct: "Would you like some coffee? I don't have any sugar.",
            explanation: "some (offer), any (negative statement)"
          },
          {
            correct: "A few people came to the party, but not much food was eaten.",
            explanation: "a few (countable), much (uncountable in negative context)"
          },
          {
            correct: "Do you have any questions about this information?",
            explanation: "any (question), information (uncountable)"
          }
        ],
        exercises: [
          "Choose: 'How (much/many) money do you need?'",
          "Complete: 'There isn't _____ milk left. We need to buy _____.'",
          "Correct: 'She has much friends but little free time.'"
        ]
      }
    ]
  }
];
