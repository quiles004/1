/*jugadores que tengan un porcentaje de tiros de campo por debajo del 48%*/
db.final.find({tiros_de_campo:{$lte:"48"}}).pretty();
/*jugadores cuya nacionalidad empiece por la letra E*/
db.final.find({nacionalidad:{$regex: /E/}}).pretty();
/*jugadores con altura igual o mayor a 200 cms y que su porventaje de tiros libres sea menor de 76*/
db.final.find({$and:[{tiros_libres:{$lt:"76"}},{altura:{$gte:200}}]}).pretty();
/*jugadores que su posicion en el campo de sea base*/
db.final.find({$and:[{posicion:{$ne:"base"}}]}).pretty();
/*jugadores que su nacionalidad no empiece por E y que no tengan una altura menor o igual de 202 cms*/
db.final.find({$and:[{nacionalidad:{$not:{$regex:/E/}},$nor:[{altura:{$lte:202}}]}]}).pretty();
/*jugadores que su nacionalidad no empiece por la latra "e", que tengan un premio de mvp, que midan mas de 205 cm y su porcentaje de tiros de campo sea mayor del 43%*/
db.final.find({$and:[{nacionalidad:{$not:{$regex:/E/}}},{mvp:true},{altura:{$gte:205}},{tiros_de_campo:{$gt:"43"}}]}).pretty();
/*jugadores que jueguen de alero o ala-pivot, que tengan un premio de mvp, y que su porcentaje de tiros de campo sea igual o superior al 52%*/
db.final.find({$and:[{posicion:{$all:["alero","ala-pivot"]}},{mvp:true},{tiros_de_campo:{$gte:"52"}}]}).pretty();
/*jugadores que jueguen de alero que no tengan un premio de mvp que nacieran antes del 1-1-1992 y ordenados por fecha*/
db.final.find({$and:[{posicion:{$eq:"alero"}},{mvp:false},{nacimiento:{$lt: new Date(1992,1,1)}}]}).sort({nacimiento:1}).pretty();
/*jugadores que puedan jugar en 3 posiciones diferentes que tengan un porcentaje de tiros libres mayor a el 70% y que hayan nacido antes del 1-1-1990, ordenados por el porcentaje de tiros libres*/
db.final.find({$and:[{posicion:{$size:3}},{tiros_libres:{$gte:"70"}},{nacimiento:{$lt: new Date(1990,1,1)}}]}).sort({tiros_libres:-1}).pretty();
