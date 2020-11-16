/*jugadores que tengan un porcentaje de tiros de campo por debajo del 48%*/
db.final.find({tiros_de_campo:{$lte:"48"}}).pretty();
/*jugadores cuya nacionalidad empiece por la letra E*/
db.final.find({nacionalidad:{$regex: /E/}}).pretty();
/*jugadores con altura igual o mayor a 200 cms y que su porventaje de tiros libres sea menor de 76*/
db.final.find({$and:[{tiros_libres:{$lt:"76"}},{altura:{$gte:200}}]}).pretty();
/*jugadores que su posicion en el campo de sea base*/
db.final.find({$and:[{posicion:{$ne:"base"}}]}).pretty();
/*jugadores que su nacionalidad no empiece por E y que no tengan una altura menor o igual de 202 cms*/
db.final.find({$and:[{nacionalidad:{$not:{$regex:/E/}},
                      $nor:[{altura:{$lte:202}}]}]}).pretty();

/*{
        "_id" : ObjectId("5fb231c05b9e3f31c5331b46"),
        "jugador" : "Giannis Antetokounmpo",
        "nacionalidad" : "Greco",
        "posicion" : [
                "base",
                "alero",
                "ala-pivot"
        ],
        "tiros_de_campo" : "55,3",
        "altura" : 211,
        "tiros_libres" : "72,2",
        "mvp" : true,
        "nacimiento" : ISODate("1995-01-05T23:00:00Z")
}
{
        "_id" : ObjectId("5fb231c05b9e3f31c5331b48"),
        "jugador" : "Rudy Gobert",
        "nacionalidad" : "Frances",
        "posicion" : "pivot",
        "tiros_de_campo" : "69,3",
        "altura" : 216,
        "tiros_libres" : "63,1",
        "mvp" : false,
        "nacimiento" : ISODate("1992-07-25T22:00:00Z")
}
{
        "_id" : ObjectId("5fb231c05b9e3f31c5331b53"),
        "jugador" : "Joel Embiid",
        "nacionalidad" : "Camerunes",
        "posicion" : "pivot",
        "tiros_de_campo" : "47,7",
        "altura" : 213,
        "tiros_libres" : "79,3",
        "mvp" : false,
        "nacimiento" : ISODate("1994-04-15T22:00:00Z")
}
{
        "_id" : ObjectId("5fb231c05b9e3f31c5331b54"),
        "jugador" : "Ben Simmons",
        "nacionalidad" : "Australiano",
        "posicion" : [
                "base",
                "alero",
                "ala-pivot"
        ],
        "tiros_de_campo" : "58",
        "altura" : 208,
        "tiros_libres" : "59,3",
        "mvp" : false,
        "nacimiento" : ISODate("1996-08-19T22:00:00Z")
}*/
/*jugadores que su nacionalidad no empiece por la latra "e", que tengan un premio de mvp, que midan mas de 205 cm y su porcentaje de tiros de campo sea mayor del 43%*/
db.final.find({$and:[{nacionalidad:{$not:{$regex:/E/}}},
                     {mvp:true},
                     {altura:{$gte:205}},
                     {tiros_de_campo:{$gt:"43"}}]}).pretty();

/*{
        "_id" : ObjectId("5fb231c05b9e3f31c5331b46"),
        "jugador" : "Giannis Antetokounmpo",
        "nacionalidad" : "Greco",
        "posicion" : [
                "base",
                "alero",
                "ala-pivot"
        ],
        "tiros_de_campo" : "55,3",
        "altura" : 211,
        "tiros_libres" : "72,2",
        "mvp" : true,
        "nacimiento" : ISODate("1995-01-05T23:00:00Z")
}*/
/*jugadores que jueguen de alero o ala-pivot, que tengan un premio de mvp, y que su porcentaje de tiros de campo sea igual o superior al 52%*/
db.final.find({$and:[{posicion:{$all:["alero","ala-pivot"]}},
                     {mvp:true},
                     {tiros_de_campo:{$gte:"52"}}]}).pretty();

/*{
        "_id" : ObjectId("5fb231c05b9e3f31c5331b45"),
        "jugador" : "Kevin Durant",
        "nacionalidad" : "Estadounidense",
        "posicion" : [
                "escolta",
                "alero",
                "ala-pivot"
        ],
        "tiros_de_campo" : "52,1",
        "altura" : 208,
        "tiros_libres" : "88,3",
        "mvp" : true,
        "nacimiento" : ISODate("1988-10-28T22:00:00Z")
}
{
        "_id" : ObjectId("5fb231c05b9e3f31c5331b46"),
        "jugador" : "Giannis Antetokounmpo",
        "nacionalidad" : "Greco",
        "posicion" : [
                "base",
                "alero",
                "ala-pivot"
        ],
        "tiros_de_campo" : "55,3",
        "altura" : 211,
        "tiros_libres" : "72,2",
        "mvp" : true,
        "nacimiento" : ISODate("1995-01-05T23:00:00Z")
}*/
/*jugadores que jueguen de alero que no tengan un premio de mvp que nacieran antes del 1-1-1992 y ordenados por fecha*/
db.final.find({$and:[{posicion:{$eq:"alero"}},
                     {mvp:false},
                     {nacimiento:{$lt: new Date(1992,1,1)}}]}).sort({nacimiento:1}).pretty();

/*{
        "_id" : ObjectId("5fb231c05b9e3f31c5331b50"),
        "jugador" : "Paul George",
        "nacionalidad" : "Estadounidense",
        "posicion" : [
                "escolta",
                "alero"
        ],
        "tiros_de_campo" : "43,9",
        "altura" : 203,
        "tiros_libres" : "84,6",
        "mvp" : false,
        "nacimiento" : ISODate("1990-06-01T22:00:00Z")
}
{
        "_id" : ObjectId("5fb231c05b9e3f31c5331b4f"),
        "jugador" : "Kawhi Leonard",
        "nacionalidad" : "Estadounidense",
        "posicion" : [
                "alero",
                "ala-pivot"
        ],
        "tiros_de_campo" : "47",
        "altura" : 201,
        "tiros_libres" : "85,5",
        "mvp" : false,
        "nacimiento" : ISODate("1991-07-28T22:00:00Z")
}*/
/*jugadores que puedan jugar en 3 posiciones diferentes que tengan un porcentaje de tiros libres mayor a el 70% y que hayan nacido antes del 1-1-1990, ordenados por el porcentaje de tiros libres*/
db.final.find({$and:[{posicion:{$size:3}},
                     {tiros_libres:{$gte:"70"}},
                     {nacimiento:{$lt: new Date(1990,1,1)}}]}).sort({tiros_libres:-1}).pretty();

/*{
        "_id" : ObjectId("5fb231c05b9e3f31c5331b45"),
        "jugador" : "Kevin Durant",
        "nacionalidad" : "Estadounidense",
        "posicion" : [
                "escolta",
                "alero",
                "ala-pivot"
        ],
        "tiros_de_campo" : "52,1",
        "altura" : 208,
        "tiros_libres" : "88,3",
        "mvp" : true,
        "nacimiento" : ISODate("1988-10-28T22:00:00Z")
}
{
        "_id" : ObjectId("5fb231c05b9e3f31c5331b43"),
        "jugador" : "Lebron James",
        "nacionalidad" : "Estadounidense",
        "posicion" : [
                "alero",
                "base",
                "ala-pivot"
        ],
        "tiros_de_campo" : "50,5",
        "altura" : 206,
        "tiros_libres" : "73,4",
        "mvp" : true,
        "nacimiento" : ISODate("1984-12-29T23:00:00Z")
}*/
