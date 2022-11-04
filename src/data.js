import vegbedding from './images/book-img/veg-bedding.jpg';
import dimension from './images/book-img/3-dimension.jpg';
import billionaire from './images/book-img/billionaire2.jpg';
import fanfiction from './images/book-img/fanfiction.jpg';
import magic from './images/book-img/Magic.png';
import romance from './images/book-img/romance2.jpg';
import horror from './images/book-img/horror.png';
import lgbtq from './images/book-img/lgbtq.png';
import editor from "./images/book-img/editor's pick 2.png";
import werewolf from './images/book-img/werewolf.jpg'
import vampire from './images/book-img/vampire.jpg';
import historical from './images/book-img/historical.jpg';
import member1 from './images/member-1.png'
import member2 from './images/member-2.png'
import member3 from './images/member-3.png'
import member4 from './images/member-4.png'
import member5 from './images/member-5.png'

export const categoryData = [
    {
        id: 1,
        catName: `editorspick`,
        img: editor,
    },
    {
        id: 2,
        catName: 'horror',
        img: horror,
    },
    {
        id: 11,
        catName: 'werewolf',
        img: werewolf,
    },
    {
        id: 3,
        catName: 'magic',
        img: magic
    },
    {
        id: 4,
        catName: 'fanfiction',
        img: fanfiction
    },
    {
        id: 5,
        catName: 'romance',
        img: romance
    },
    {
        id: 6,
        catName: 'lgbtq',
        img: lgbtq
    },
    {
        id: 7,
        catName: 'billionaire',
        img: billionaire
    },
    {
        id: 8,
        catName: 'historical',
        img: historical
    },
    {
        id: 9,
        catName: 'contemporary',
        img: dimension
    },
    {
        id: 10,
        catName: 'vampire',
        img: vampire
    },
]

export const getAllUsers = async () => {
    const users = [
        {
            _id: 433434353,
            username: 'PearlHeart',
            email: 'concord_chucs',
            password: "4343431",
            profilepic: member1,
        },
        {
            _id: 43343445353,
            username: 'Lorenzo Amani',
            email: 'concord_chucs',
            password: "4343431",
            profilepic: member2,
        },
        {
            _id: 433434453567,
            username: 'Ez amalu',
            email: 'concord_chucs',
            password: "4343431",
            profilepic: member3,
        },
        {
            _id: 433434453898,
            username: 'Eldorad0',
            email: 'concord_chucs',
            password: "4343431",
            profilepic: member4,
        },
        {
            _id: 43343434907,
            username: 'Fisherbook',
            email: 'concord_chucs',
            password: "4343431",
            profilepic: member5,
        },
    ]
    return users
}

export const stories = [
    {
        _id: 423244542,
        userId: '6317e66ab4941ecaaa3ffbe3',
        username: 'Momo',
        title: 'The reign of the foreign king',
        image: werewolf,
        tags: ['romance', 'fanfiction', 'weak male', 'prince'],
        catName: ['Werewolf', `Editor's pick`],
        blurb: ['Mna  gdgd has been known to gn s i kkn k', 'eerwerrwerrr ef wref wr rwr wrf wrf'],
        storybody: [
            {
                chapterDesc: 'Chapter One',
                chapterContent: [
                    {
                        parag: `The king returned with his eyes deep in his forehead. He looked hungry, carrying with him
                        the air of a starved man. He had just travelled across the world on a horse
                        and his beards are dirty`,
                        parageComment: [
                            {
                                readerId: 43433,
                                readerComment: 'sssffff',
                                reply: [
                                    {
                                        userId: 4224445,
                                        comment: 'blahblah'
                                    }
                                ]
                            },
                            {
                                readerId: 43433,
                                readerComment: 'sssffff',
                                reply: [
                                    {
                                        userId: 4224445,
                                        comment: 'blahblah'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        parag: `His citizens stood staring at him. It's beee three years since they last saw him. None of them can tell with a hundred percent certainty that
                        he's the one. Not that the man has lost much in terms of weight, but it looked as if a 
                        stranger had stolen the king's body and mounted their head on it.`,
                        parageComment: [
                            {
                                readerId: 43433,
                                readerComment: 'sssffff',
                                reply: [
                                    {
                                        userId: 4224445,
                                        comment: 'blahblah'
                                    }
                                ]
                            },
                            {
                                readerId: 43433,
                                readerComment: 'sssffff',
                                reply: [
                                    {
                                        userId: 4224445,
                                        comment: 'blahblah'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        parag: `The king took a deep breath`,
                        parageComment: [
                            {
                                readerId: 43433,
                                readerComment: 'sssffff',
                                reply: [
                                    {
                                        userId: 4224445,
                                        comment: 'blahblah'
                                    }
                                ]
                            },
                            {
                                readerId: 43433,
                                readerComment: 'sssffff',
                                reply: [
                                    {
                                        userId: 4224445,
                                        comment: 'blahblah'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        parag: `He walked closely to them, the city falling silence until someone screamed from nowhere, 'Long live the king!!!".
                        The scream burst everyone out of their trance. Sudden realization dawned on them and they concurrently bowed, like a
                        large piece of cloth spread over the city get lowered on all corners at the same time,
                        The problem with the king's long absence is that his deputy has being on the throne.
                        Now his deputy has lifted the country out of poverty, put the territory's name on the map in gold.
                        So the pervaded thought that swept through the bowed crowd remained this, "How do we tell thia man we no longer want him?"
                        `,
                        parageComment: [
                            {
                                readerId: 43433,
                                readerComment: 'sssffff',
                                reply: [
                                    {
                                        userId: 4224445,
                                        comment: 'blahblah'
                                    }
                                ]
                            },
                            {
                                readerId: 43433,
                                readerComment: 'sssffff',
                                reply: [
                                    {
                                        userId: 4224445,
                                        comment: 'blahblah'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        parag: `He walked closely to them, the city falling silence until someone screamed from nowhere, 'Long live the king!!!".
                        The scream burst everyone out of their trance. Sudden realization dawned on them and they concurrently bowed, like a
                        large piece of cloth spread over the city get lowered on all corners at the same time,
                        The problem with the king's long absence is that his deputy has being on the throne.
                        Now his deputy has lifted the country out of poverty, put the territory's name on the map in gold.
                        So the pervaded thought that swept through the bowed crowd remained this, "How do we tell thia man we no longer want him?"
                        `,
                        parageComment: [
                            {
                                readerId: 43433,
                                readerComment: 'sssffff',
                                reply: [
                                    {
                                        userId: 4224445,
                                        comment: 'blahblah'
                                    }
                                ]
                            },
                            {
                                readerId: 43433,
                                readerComment: 'sssffff',
                                reply: [
                                    {
                                        userId: 4224445,
                                        comment: 'blahblah'
                                    }
                                ]
                            }
                        ]
                    },
                ],
                chapterComment: [
                    {
                        _id: 234,
                        text: 'This is a really great book',
                        commenterId: 43343445353,
                        commenterProfilePic: member2,
                        commenterName: 'Lorenzo Amani',
                        parentId: null,
                    },
                    {
                        _id: 23344,
                        text: `Amazing first chapter. Imagine what the rest of the book would be. I'm spending all of my coins here`,
                        commenterId: 43343434907,
                        commenterProfilePic: member5,
                        commenterName: 'Fisherbook',
                        parentId: null,
                    },
                    {
                        _id: 23344,
                        text: `Amazing first chapter. Imagine what the rest of the book would be. I'm spending all of my coins here`,
                        commenterId: 43343434907,
                        commenterProfilePic: member5,
                        commenterName: 'Fisherbook',
                        parentId: null,
                    },
                ],
            },
        ],
        comments: [
            {
                _id: 234,
                text: 'This is a really great book',
                commenterId: 43343445353,
                commenterProfilePic: member2,
                commenterName: 'Lorenzo Amani',
                parentId: null,
            },
            {
                _id: 23344,
                text: `Amazing first chapter. Imagine what the rest of the book would be. I'm spending all of my coins here`,
                commenterId: 43343434907,
                commenterProfilePic: member5,
                commenterName: 'Fisherbook',
                parentId: null,
            },
            {
                _id: 23434,
                text: 'This is a really great book',
                commenterId: 43343445353,
                commenterProfilePic: member1,
                commenterName: 'Lorenzo Amani',
                parentId: null,
            },
            {
                _id: 2334894,
                text: `Amazing first chapter. Imagine what the rest of the book would be. I'm spending all of my coins here`,
                commenterId: 43343434907,
                commenterProfilePic: member3,
                commenterName: 'Fisherbook',
                parentId: null,
            },
        ],
        rating: 0,
        reads: 0,
        followers: [423423432, 23423423, 34343423, 23423423]
    },
    {
        _id: 42324344532,
        userId: '63155d0816aad623556b28b7',
        username: 'Lorenzo Amani',
        title: 'The Prince of WereLock',
        image: vampire,
        tags: ['love', 'cute', 'strong female', 'prince'],
        catName: ['Werewolf'],
        blurb: ['Obsfucation is the name of the lame game', 'eerwerrwerrr ef wref wr rwr wrf wrf'],
        storybody: [
            {
                chapterDesc: 'Chapter One',
                chapterContent: [
                    {
                        parag: `He had the general tendency to laugh. Mundane things
                        like the squeeze of a man's face was humourous to him. What makes the mouth move?
                        Why does the mouth even move? Why aren't our eyes mouths? And why aren't our nose necks? And all such things`,
                        parageComment: [
                            {
                                readerId: 43433,
                                readerComment: 'sssffff',
                                reply: [
                                    {
                                        userId: 4224445,
                                        comment: 'blahblah'
                                    }
                                ]
                            },
                            {
                                readerId: 43433,
                                readerComment: 'sssffff',
                                reply: [
                                    {
                                        userId: 4224445,
                                        comment: 'blahblah'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        parag: `fdasd dffsfs sdf
                                return with the very essence of what defined
                                and described the man. Now it got so bad the fultitude
                                to hold the pain wasn't there anymore.`,
                        parageComment: [
                            {
                                readerId: 43433,
                                readerComment: 'sssffff',
                                reply: [
                                    {
                                        userId: 4224445,
                                        comment: 'blahblah'
                                    }
                                ]
                            },
                            {
                                readerId: 43433,
                                readerComment: 'sssffff',
                                reply: [
                                    {
                                        userId: 4224445,
                                        comment: 'blahblah'
                                    }
                                ]
                            }
                        ]
                    },
                ]
            },
            {
                chapterDesc: 'Chapter Two',
                chapterContent: [
                    {
                        parag: `He walked closely to them, the city falling silence until someone screamed from nowhere, 'Long live the king!!!".
                        The scream burst everyone out of their trance. Sudden realization dawned on them and they concurrently bowed, like a
                        large piece of cloth spread over the city get lowered on all corners at the same time,
                        The problem with the king's long absence is that his deputy has being on the throne.
                        Now his deputy has lifted the country out of poverty, put the territory's name on the map in gold.
                        So the pervaded thought that swept through the bowed crowd remained this, "How do we tell thia man we no longer want him?"
                        `,
                        parageComment: [
                            {
                                readerId: 43433,
                                readerComment: 'sssffff',
                                reply: [
                                    {
                                        userId: 4224445,
                                        comment: 'blahblah'
                                    }
                                ]
                            },
                            {
                                readerId: 43433,
                                readerComment: 'sssffff',
                                reply: [
                                    {
                                        userId: 4224445,
                                        comment: 'blahblah'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        parag: `He walked closely to them, the city falling silence until someone screamed from nowhere, 'Long live the king!!!".
                        The scream burst everyone out of their trance. Sudden realization dawned on them and they concurrently bowed, like a
                        large piece of cloth spread over the city get lowered on all corners at the same time,
                        The problem with the king's long absence is that his deputy has being on the throne.
                        Now his deputy has lifted the country out of poverty, put the territory's name on the map in gold.
                        So the pervaded thought that swept through the bowed crowd remained this, "How do we tell thia man we no longer want him?"
                        `,
                        parageComment: [
                            {
                                readerId: 43433,
                                readerComment: 'sssffff',
                                reply: [
                                    {
                                        userId: 4224445,
                                        comment: 'blahblah'
                                    }
                                ]
                            },
                            {
                                readerId: 43433,
                                readerComment: 'sssffff',
                                reply: [
                                    {
                                        userId: 4224445,
                                        comment: 'blahblah'
                                    }
                                ]
                            }
                        ]
                    },
                ],
                chapterComment: [
                    {
                        _id: 234,
                        text: 'This is a really great book',
                        commenterId: 43343445353,
                        commenterProfilePic: member2,
                        commenterName: 'Lorenzo Amani',
                        parentId: null,
                    },
                    {
                        _id: 23344,
                        text: `Amazing first chapter. Imagine what the rest of the book would be. I'm spending all of my coins here`,
                        commenterId: 43343434907,
                        commenterProfilePic: member5,
                        commenterName: 'Fisherbook',
                        parentId: null,
                    },
                ],
            },
        ],
        comments: [],
        rating: 0,
        reads: 0,
        followers: [4324234234, 34343423, 23423423]
    },
    {
        _id: 3433245452,
        userId: '63155d0816aad623556b26b7',
        username: 'Ez amalu',
        title: 'Prince Azgard',
        image: romance,
        tags: ['love', 'romance', 'fanfiction', 'cute', 'strong female', 'weak male', 'prince'],
        catName: ['Werewolf'],
        blurb: ['Mna  gdgd has been known to gn s i kkn k', 'eerwerrwerrr ef wref wr rwr wrf wrf'],
        storybody: [
            {
                chapterDesc: 'Chapter One',
                chapterContent: [
                    {
                        parag: `He walked closely to them, the city falling silence until someone screamed from nowhere, 'Long live the king!!!".
                        The scream burst everyone out of their trance. Sudden realization dawned on them and they concurrently bowed, like a
                        large piece of cloth spread over the city get lowered on all corners at the same time,
                        The problem with the king's long absence is that his deputy has being on the throne.
                        Now his deputy has lifted the country out of poverty, put the territory's name on the map in gold.
                        So the pervaded thought that swept through the bowed crowd remained this, "How do we tell thia man we no longer want him?"
                        He walked closely to them, the city falling silence until someone screamed from nowhere, 'Long live the king!!!".
                        The scream burst everyone out of their trance. Sudden realization dawned on them and they concurrently bowed, like a
                        large piece of cloth spread over the city get lowered on all corners at the same time,
                        The problem with the king's long absence is that his deputy has being on the throne.
                        Now his deputy has lifted the country out of poverty, put the territory's name on the map in gold.
                        So the pervaded thought that swept through the bowed crowd remained this, "How do we tell thia man we no longer want him?"
                        He walked closely to them, the city falling silence until someone screamed from nowhere, 'Long live the king!!!".
                        The scream burst everyone out of their trance. Sudden realization dawned on them and they concurrently bowed, like a
                        large piece of cloth spread over the city get lowered on all corners at the same time,
                        The problem with the king's long absence is that his deputy has being on the throne.
                        Now his deputy has lifted the country out of poverty, put the territory's name on the map in gold.
                        So the pervaded thought that swept through the bowed crowd remained this, "How do we tell thia man we no longer want him?"
                        `,
                        parageComment: [
                            {
                                readerId: 43433,
                                readerComment: 'sssffff',
                                reply: [
                                    {
                                        userId: 4224445,
                                        comment: 'blahblah'
                                    }
                                ]
                            },
                            {
                                readerId: 43433,
                                readerComment: 'sssffff',
                                reply: [
                                    {
                                        userId: 4224445,
                                        comment: 'blahblah'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        parag: 'fdasd dffsfs sdf',
                        parageComment: [
                            {
                                readerId: 43433,
                                readerComment: 'sssffff',
                                reply: [
                                    {
                                        userId: 4224445,
                                        comment: 'blahblah'
                                    }
                                ]
                            },
                            {
                                readerId: 43433,
                                readerComment: 'sssffff',
                                reply: [
                                    {
                                        userId: 4224445,
                                        comment: 'blahblah'
                                    }
                                ]
                            }
                        ]
                    },
                ],
                chapterComment: [
                    {
                        _id: 234,
                        text: 'This is a really great book',
                        commenterId: 43343445353,
                        commenterProfilePic: member2,
                        commenterName: 'Lorenzo Amani',
                        parentId: null,
                    },
                    {
                        _id: 23344,
                        text: `Amazing first chapter. Imagine what the rest of the book would be. I'm spending all of my coins here`,
                        commenterId: 43343434907,
                        commenterProfilePic: member5,
                        commenterName: 'Fisherbook',
                        parentId: null,
                    },
                ],
            },
        ],
        comments: [],
        rating: 0,
        reads: 0,
        followers: [423423432, 23423423, 4324234234, 34343423, 23423423]
    },
    {
        _id: 423454242,
        userId: 433434453898,
        username: 'Eldorad0',
        title: 'The Haunted House',
        image: horror,
        tags: ['love', 'violence', 'romance', 'cute', 'prince'],
        catName: ['Horror'],
        blurb: ['Lorri has a house where no one but she and mirror lives', 'eerwerrwerrr ef wref wr rwr wrf wrf'],
        storybody: [
            {
                chapterDesc: 'Chapter One',
                chapterContent: [
                    {
                        parag: 'Lorem jfsjdfn uudkinju sdfndsf ino oinnosdi ionoinjos oidoi oij',
                        parageComment: [
                            {
                                readerId: 43433,
                                readerComment: 'sssffff',
                                reply: [
                                    {
                                        userId: 4224445,
                                        comment: 'blahblah'
                                    }
                                ]
                            },
                            {
                                readerId: 43433,
                                readerComment: 'sssffff',
                                reply: [
                                    {
                                        userId: 4224445,
                                        comment: 'blahblah'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        parag: 'fdasd dffsfs sdf',
                        parageComment: [
                            {
                                readerId: 43433,
                                readerComment: 'sssffff',
                                reply: [
                                    {
                                        userId: 4224445,
                                        comment: 'blahblah'
                                    }
                                ]
                            },
                            {
                                readerId: 43433,
                                readerComment: 'sssffff',
                                reply: [
                                    {
                                        userId: 4224445,
                                        comment: 'blahblah'
                                    }
                                ]
                            }
                        ]
                    },
                ],
                chapterComment: [
                    {
                        _id: 234,
                        text: 'This is a really great book',
                        commenterId: 43343445353,
                        commenterProfilePic: member2,
                        commenterName: 'Lorenzo Amani',
                        parentId: null,
                    },
                    {
                        _id: 23344,
                        text: `Amazing first chapter. Imagine what the rest of the book would be. I'm spending all of my coins here`,
                        commenterId: 43343434907,
                        commenterProfilePic: member5,
                        commenterName: 'Fisherbook',
                        parentId: null,
                    },
                ],
            },
        ],
        comments: [],
        rating: 0,
        reads: 0,
        followers: [423423432, 23423423, 4324234234, 34343423, 23423423]
    },
    {
        _id: 42345424322,
        userId: 433434453898,
        username: 'Eldorad0',
        title: 'Prince of WasteVille',
        image: vegbedding,
        tags: ['love', 'manipulation', 'gore', 'cute', 'prince'],
        catName: ['Horror'],
        blurb: ['Lorri has a house where no one but she and mirror lives', 'eerwerrwerrr ef wref wr rwr wrf wrf'],
        storybody: [
            {
                chapterDesc: 'Chapter One',
                chapterContent: [
                    {
                        parag: 'Lorem jfsjdfn uudkinju sdfndsf ino oinnosdi ionoinjos oidoi oij',
                        parageComment: [
                            {
                                readerId: 43433,
                                readerComment: 'sssffff',
                                reply: [
                                    {
                                        userId: 4224445,
                                        comment: 'blahblah'
                                    }
                                ]
                            },
                            {
                                readerId: 43433,
                                readerComment: 'sssffff',
                                reply: [
                                    {
                                        userId: 4224445,
                                        comment: 'blahblah'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        parag: 'fdasd dffsfs sdf',
                        parageComment: [
                            {
                                readerId: 43433,
                                readerComment: 'sssffff',
                                reply: [
                                    {
                                        userId: 4224445,
                                        comment: 'blahblah'
                                    }
                                ]
                            },
                            {
                                readerId: 43433,
                                readerComment: 'sssffff',
                                reply: [
                                    {
                                        userId: 4224445,
                                        comment: 'blahblah'
                                    }
                                ]
                            }
                        ]
                    },
                ],
                chapterComment: [
                    {
                        _id: 234,
                        text: 'This is a really great book',
                        commenterId: 43343445353,
                        commenterProfilePic: member2,
                        commenterName: 'Lorenzo Amani',
                        parentId: null,
                    },
                    {
                        _id: 23344,
                        text: `Amazing first chapter. Imagine what the rest of the book would be. I'm spending all of my coins here`,
                        commenterId: 43343434907,
                        commenterProfilePic: member5,
                        commenterName: 'Fisherbook',
                        parentId: null,
                    },
                ],
            },
        ],
        comments: [],
        rating: 0,
        reads: 0,
        followers: [423423432, 23423423, 4324234234, 34343423, 23423423]
    },
]

export const createComment = async (req) => {

    const { bookId, text, commenterId, parentId } = req;
    const bookToEdit = stories.find((story) => {
        return story._id === bookId;
    })

    try {
        const commenterInfo = (await getAllUsers()).find((user) => {
            return user._id === commenterId;
        })
        bookToEdit.comments.push({
            _id: Math.random().toString(36).substr(2, 9),
            text,
            commenterId,
            commenterProfilePic: commenterInfo.profilepic,
            commenterName: commenterInfo.username,
            parentId,
        })
        return bookToEdit.comments;

    } catch (err) {
        return 'Operation was unsuccessful'
    }
}

export const getComments = async (req) => {
    try {
        const { bookId } = req;
        const bookToRender = stories.find((story) => {
            return story._id === bookId;
        });

        return bookToRender.comments
    } catch (err) {
        return 'request failed';
    }
}

export const tagsBackground = [
    {
        id: '1',
        tag: "contemporary"
    },
    {
        id: '2',
        tag: "historical"
    },
    {
        id: '3',
        tag: "medieval"
    },
    {
        id: '4',
        tag: "urban"
    },
    {
        id: '5',
        tag: "rural"
    },
    {
        id: '6',
        tag: "supernatural"
    },
    {
        id: '7',
        tag: "realistic"
    },
    {
        id: '8',
        tag: "campus"
    },
    {
        id: '9',
        tag: "office"
    },
    {
        id: '10',
        tag: "system"
    },
    {
        id: '11',
        tag: "war"
    },
    {
        id: '12',
        tag: "doomsday"
    },
    {
        id: '13',
        tag: "politics"
    },
    {
        id: '14',
        tag: "deserted island"
    },
    {
        id: '15',
        tag: "game"
    },
    {
        id: '16',
        tag: "prison"
    },
];

export const tagsPlotSetting = [
    {
        id: '1',
        tag: "love after marriage"
    },
    {
        id: '2',
        tag: "forbidden love"
    },
    {
        id: '3',
        tag: "friends to lovers"
    },
    {
        id: '4',
        tag: "love triangle"
    },
    {
        id: '5',
        tag: "contract marriage"
    },
    {
        id: '6',
        tag: "second chance"
    },
    {
        id: '7',
        tag: "time/space travel"
    },
    {
        id: '8',
        tag: "reincarnation"
    },
    {
        id: '9',
        tag: "revenge"
    },
    {
        id: '10',
        tag: "betrayal"
    },
    {
        id: '11',
        tag: "tragedy"
    },
    {
        id: '12',
        tag: "happy ending"
    },
    {
        id: '13',
        tag: "sad ending"
    },
    {
        id: '14',
        tag: "bad ending"
    },
    {
        id: '15',
        tag: "plot twist"
    },
    {
        id: '16',
        tag: "enemies to lover"
    },
    {
        id: '17',
        tag: "pregnancy"
    },
    {
        id: '18',
        tag: "weak to strong"
    },
    {
        id: '19',
        tag: "horror"
    },
]
export const tagsIdentity = [
    {
        id: '1',
        tag: "billionaire"
    },
    {
        id: '2',
        tag: "werewolf"
    },
    {
        id: '3',
        tag: "alpha"
    },
    {
        id: '4',
        tag: "king/queen"
    },
    {
        id: '5',
        tag: "royalty"
    },
    {
        id: '6',
        tag: "prince/princess"
    },
    {
        id: '7',
        tag: "playboy"
    },
    {
        id: '8',
        tag: "vampire"
    },
    {
        id: '9',
        tag: "witch"
    },
    {
        id: '10',
        tag: "concubine"
    },
    {
        id: '11',
        tag: "demons"
    },
    {
        id: '12',
        tag: "Luna"
    },
    {
        id: '13',
        tag: "cute baby"
    },
    {
        id: '14',
        tag: "mafia"
    },
    {
        id: '15',
        tag: "detective"
    },
    {
        id: '16',
        tag: "greeekgod"
    },
    {
        id: '17',
        tag: "maid"
    },
    {
        id: '18',
        tag: "bully"
    },
    {
        id: '19',
        tag: "cheerleader"
    },
    {
        id: '20',
        tag: "loser"
    },
]
export const tagsCharacter = [
    {
        id: '1',
        tag: "arrogant"
    },
    {
        id: '2',
        tag: "possessive"
    },
    {
        id: '3',
        tag: "dominant"
    },
    {
        id: '4',
        tag: "badgirl"
    },
    {
        id: '5',
        tag: "goodgirl"
    },
    {
        id: '6',
        tag: "badboy"
    },
    {
        id: '7',
        tag: "kickass heroine"
    },
    {
        id: '8',
        tag: "kickass hero"
    },
    {
        id: '9',
        tag: "gentleman"
    },
    {
        id: '10',
        tag: "innocent/sweet"
    },
    {
        id: '11',
        tag: "multi-personality"
    },
    {
        id: '12',
        tag: "scheming"
    },
    {
        id: '13',
        tag: "optimistic"
    },
    {
        id: '14',
        tag: "wicked"
    },
    {
        id: '15',
        tag: "funny/humourous"
    },
    {
        id: '16',
        tag: "independent"
    },
    {
        id: '17',
        tag: "rational"
    },
    {
        id: '18',
        tag: "gentle"
    },
]

 // const input = document.querySelector('.story-read-parag')
        // if (window.getSelection().baseNode.className !== 'story-read-parg') return;
        // const texthighlight = window.getSelection().toString();
        // const newtext = texthighlight.replace(texthighlight, `*${texthighlight}*`)
        // setParag(parag.replace(texthighlight, newtext))
        // console.log(newtext)

        // let ranges = [];
        // let sel = window.getSelection()
        // for (let i = 0; i < sel.rangeCount; i++) {
        //     ranges[i] = sel.getRangeAt(i);
        //     console.log(ranges[i].startOffset);
        // }

        // const selection = window.getSelection()
        // // .toString()
        // var selectionText = selection.toString();
        // var surroundingText = selection.anchorNode.data;
        // var index = selection.anchorOffset;
        // var leftNeighbor = surroundingText[index - 1];
        // var rightNeighbor = surroundingText[index + selectionText.length];
        // console.log(leftNeighbor, rightNeighbor);
        // console.log(window.getSelection().getRangeAt(0).startContainer);