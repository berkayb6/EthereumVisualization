/**
 *  @fileoverview Pearson correlation score algorithm.
 *  @author matt.west@kojilabs.com (Matt West)
 *  @license Copyright 2013 Matt West.
 *  Licensed under MIT (http://opensource.org/licenses/MIT).
 */


/**
 *  Calculate the person correlation score between two items in a dataset.
 *
 *                    are being compared.
 *  @param Value
 *  @param  {string}  p1 Item one for comparison.
 *  @param  {string}  p2 Item two for comparison.
 *  @return {float}  The pearson correlation score.
 */
function pearsonCorrelation(Value, p1, p2,nodeAnzahl) {


    var j;
    var prefs = [];
    var l;
    var variable= [];
    var variable2= [];

    if (nodeAnzahl==="1"){
        for (j = 0; j < Value.length; j++) {
            variable[variable.length] = j;
            //x[x.length] = Value[j][0];
            variable2[variable2.length] = Value[j][1];


        }

        prefs[prefs.length]=variable;
        prefs[prefs.length]=variable2;


    }else if(nodeAnzahl==="2"){

        for (j = 0; j < Value.length; j++) {





            if(j===0){


                for(l=0; l<Value[0].length; l++){
                    variable[variable.length] = Value[0][l][1];

                }

                prefs[prefs.length]=variable;

            }else if (j===1){

                for(l=0; l<Value[1].length; l++){
                    variable2[variable2.length] = Value[1][l][1];

                }
                prefs[prefs.length]=variable2;
            }

        }
    }









    var si = [];

    for (var key in prefs[p1]) {
        if (prefs[p2][key]) si.push(key);
    }

    var n = si.length;

    if (n == 0) return 0;

    var sum1 = 0;
    for (var i = 0; i < si.length; i++) sum1 += prefs[p1][si[i]];

    var sum2 = 0;
    for (var i = 0; i < si.length; i++) sum2 += prefs[p2][si[i]];

    var sum1Sq = 0;
    for (var i = 0; i < si.length; i++) {
        sum1Sq += Math.pow(prefs[p1][si[i]], 2);
    }

    var sum2Sq = 0;
    for (var i = 0; i < si.length; i++) {
        sum2Sq += Math.pow(prefs[p2][si[i]], 2);
    }

    var pSum = 0;
    for (var i = 0; i < si.length; i++) {
        pSum += prefs[p1][si[i]] * prefs[p2][si[i]];
    }

    var num = pSum - (sum1 * sum2 / n);
    var den = Math.sqrt((sum1Sq - Math.pow(sum1, 2) / n) *
        (sum2Sq - Math.pow(sum2, 2) / n));

    if (den == 0) return 0;



    return num / den;
}


