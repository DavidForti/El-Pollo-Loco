const level1 = new Level(
    [
        new Chicken(),
        new Chicken(),
        new Chicken(),
    ],

    [
        new Cloud()
    ],

    [
        new Background ('img/5_background/layers/air.png',-729),
        new Background('img/5_background/layers/3_third_layer/2.png', -729.5),
        new Background ('img/5_background/layers/2_second_layer/2.png',-729),
        new Background ('img/5_background/layers/1_first_layer/2.png',-729),

        new Background ('img/5_background/layers/air.png',0),
        new Background('img/5_background/layers/3_third_layer/1.png', 0),
        new Background ('img/5_background/layers/2_second_layer/1.png',0),
        new Background ('img/5_background/layers/1_first_layer/1.png',0),
        new Background ('img/5_background/layers/air.png',729),
        new Background('img/5_background/layers/3_third_layer/2.png', 729.5),
        new Background ('img/5_background/layers/2_second_layer/2.png',729),
        new Background ('img/5_background/layers/1_first_layer/2.png',729),

        new Background ('img/5_background/layers/air.png',729*2),
        new Background('img/5_background/layers/3_third_layer/1.png',740*2),
        new Background ('img/5_background/layers/2_second_layer/1.png',729*2),
        new Background ('img/5_background/layers/1_first_layer/1.png',729*2),
        new Background ('img/5_background/layers/air.png',729*3),
        new Background('img/5_background/layers/3_third_layer/2.png', 729*3),
        new Background ('img/5_background/layers/2_second_layer/2.png',729*3),
        new Background ('img/5_background/layers/1_first_layer/2.png',729*3),    
    ]
);