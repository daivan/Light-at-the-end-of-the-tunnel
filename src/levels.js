import { Level } from "./Level";

export const levels = [
    new Level(
        1,
        64,
        [
            [
                [0, 5, 58, 10],
                [48, 5, 10, 54],
                [4, 49, 44, 10],
                [4, 18, 10, 31],
                [4, 18, 40, 10],
                [35, 18, 10, 28],
                [17, 36, 18, 10],
                [17, 31, 10, 10],
            ]
        ], [5, 10], [25, 38],
        20, [], []),
    new Level(
        2,
        128,
        [
            [
                [0, 59, 48, 10],
                [98, 59, 48, 10],
            ],
            [
                [80, 59, 48, 10],
                [38, 25, 10, 44],
                [10, 25, 29, 10],
                [10, 5, 10, 20],
                [10, 5, 80, 10],
                [80, 5, 10, 54],
            ],
            [
                [98, 59, 30, 10],
                [80, 5, 10, 54],
                [57, 49, 23, 10],
                [57, 49, 10, 74],
                [57, 113, 51, 10],
                [98, 69, 10, 44],
            ]
        ], [5, 64], [128, 64],
        13, [[38, 59], [80, 49],], []),
    new Level(
        3,
        256,
        [
            [
                [0, 231, 24, 10],
                [19, 16, 10, 225],
                [19, 16, 207, 10],
                [221, 16, 10, 218],
                [53, 229, 178, 10],
                [53, 46, 10, 193],
                [53, 46, 136, 10],
                [184, 46, 10, 153],
                [88, 194, 106, 10],
                [88, 77, 10, 127],
                [88, 77, 67, 10],
                [150, 77, 10, 86],
                [119, 158, 41, 10],
                [119, 106, 10, 62],
            ]
        ], [5, 236], [124, 111],
        12, [], [[125, 16], [125, 229], [184, 118],]
    ),
    new Level(
        4,
        128,
        [
            [
                [0, 6, 114, 10],
                [108, 6, 10, 33],
                [9, 32, 109, 10],
                [9, 38, 10, 30],
                [9, 58, 103, 10],
                [108, 58, 10, 32],
                [9, 84, 109, 10],
                [9, 91, 10, 26],
                [9, 110, 120, 10],
                [9, 21, 10, 24],
                [9, 19, 96, 10],
                [19, 45, 99, 10],
                [9, 71, 100, 10],
                [19, 97, 99, 10],
            ],
            [
                [0, 6, 114, 10],
                [108, 6, 10, 36],
                [108, 55, 10, 55],
                [9, 84, 96, 10],
                [9, 110, 120, 10],
                [9, 19, 10, 23],
                [62, 19, 31, 10],
                [9, 71, 96, 10],
                [19, 97, 86, 10],
                [95, 19, 10, 26],
                [95, 71, 10, 23],
                [95, 45, 23, 10],
                [9, 58, 10, 23],
                [19, 32, 15, 10],
                [29, 32, 10, 18],
                [29, 45, 26, 10],
                [50, 32, 10, 23],
                [50, 32, 24, 10],
                [69, 32, 10, 18],
                [19, 58, 71, 10],
                [80, 45, 10, 23],
                [69, 45, 21, 10],
                [18, 19, 46, 10],
                [83, 19, 10, 18],
                [83, 32, 12, 10],
            ]
        ], [5, 11], [127, 115],
        9, [[95, 19], [19, 84],], [[19, 84],])
]


