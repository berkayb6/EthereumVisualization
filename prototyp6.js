//import * as regression from "regression";

//  "http://127.0.0.1:8081"



//var web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8081"));
var web3= null;
var dataName =null;

google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawCurveTypes);



function setBlockchainHost(host){

    web3= new Web3(new Web3.providers.HttpProvider(host));

}



function drawCurveTypes() {




    var grafikDropdown= [];

    grafikDropdown[0]= document.getElementById("item1");
    grafikDropdown[1]= document.getElementById("item2");
    grafikDropdown[2]= document.getElementById("item3");
    grafikDropdown[3]= document.getElementById("item4");


    //WEEK//

    var weeklyRegressionButton= document.getElementById("weeklyRegression");
    var weekRegressionDropdown= [];

    weekRegressionDropdown[0]= document.getElementById("elem1");
    weekRegressionDropdown[1]= document.getElementById("elem2");
    weekRegressionDropdown[2]= document.getElementById("elem3");
    weekRegressionDropdown[3]= document.getElementById("elem4");
    weekRegressionDropdown[4]= document.getElementById("elem5");
    weekRegressionDropdown[5]= document.getElementById("elem6");
    weekRegressionDropdown[6]= document.getElementById("elem7");


    // MONTH//

    var monthlyRegressionButton= document.getElementById("monthlyRegression");
    var monthRegressionDropdown= [];

    monthRegressionDropdown[0]= document.getElementById("var1");
    monthRegressionDropdown[1]= document.getElementById("var2");
    monthRegressionDropdown[2]= document.getElementById("var3");
    monthRegressionDropdown[3]= document.getElementById("var4");
    monthRegressionDropdown[4]= document.getElementById("var5");
    monthRegressionDropdown[5]= document.getElementById("var6");
    monthRegressionDropdown[6]= document.getElementById("var7");
    monthRegressionDropdown[7]= document.getElementById("var8");
    monthRegressionDropdown[8]= document.getElementById("var9");
    monthRegressionDropdown[9]= document.getElementById("var10");
    monthRegressionDropdown[10]= document.getElementById("var11");
    monthRegressionDropdown[11]= document.getElementById("var12");


    var regressionButton= document.getElementById("myBtn");
    //button.style.visibility="hidden";

    var intervall;




    grafikDropdown[0].addEventListener("click", function () {



        intervall= "day";

        var giantArray= []; // 2 tane large array tutuyor.
        var nameArray= [];

        for (var node in nodeList){

            giantArray[giantArray.length]=pullValueFromBlockchain(intervall, nodeList[node]);
            nameArray[nameArray.length]= getDataName(nodeList[node]);


        }


        callDailyChart(giantArray,nameArray);


    });

    grafikDropdown[1].addEventListener("click", function () {

        intervall= "week";

        var giantArray= []; // 2 tane large array tutuyor.
        var nameArray= [];

        for (var node in nodeList){

            giantArray[giantArray.length]=pullValueFromBlockchain(intervall, nodeList[node]);
            nameArray[nameArray.length]= getDataName(nodeList[node]);


        }


        //var largeArray= pullValueFromBlockchain(intervall);




        callWeeklyChart(giantArray, nameArray);

        monthlyRegressionButton.style.visibility="hidden";
        regressionButton.style.visibility="hidden";
        weeklyRegressionButton.style.visibility="visible";


        weekRegressionDropdown[0].addEventListener("click",function () {

            var regressionArray=[];
            var largeRegressionArray= [];

            var nodeAnzahl="1";

            var largeArrayIndex;
            var giantArrayIndex;

            if (giantArray.length===1){

                for(largeArrayIndex=0;largeArrayIndex<giantArray[0].length;largeArrayIndex++){

                    if(giantArray[0][largeArrayIndex][0]===0){
                        regressionArray[regressionArray.length]=giantArray[0][largeArrayIndex];
                    }


                }
                Regression(regressionArray,nodeAnzahl);
                document.getElementById("korrelation").innerHTML = "Korrelationskoeffizent: " + pearsonCorrelation(regressionArray,0,1, nodeAnzahl);



            } else if (giantArray.length===2){

                nodeAnzahl="2";

                for (giantArrayIndex=0; giantArrayIndex<giantArray.length; giantArrayIndex++){

                    regressionArray=[];

                    for(largeArrayIndex=0;largeArrayIndex<giantArray[giantArrayIndex].length;largeArrayIndex++){



                        if(giantArray[giantArrayIndex][largeArrayIndex][0]===0){
                            regressionArray[regressionArray.length]=giantArray[giantArrayIndex][largeArrayIndex];
                        }


                    }
                    largeRegressionArray[largeRegressionArray.length]=regressionArray;

                }



                Regression(largeRegressionArray,nodeAnzahl);
                document.getElementById("korrelation").innerHTML = "Korrelationskoeffizent: " + pearsonCorrelation(largeRegressionArray,0,1, nodeAnzahl);


            }










        });
        weekRegressionDropdown[1].addEventListener("click",function () {

            var regressionArray=[];
            var largeRegressionArray= [];

            var nodeAnzahl="1";

            var largeArrayIndex;
            var giantArrayIndex;

            if (giantArray.length===1){

                for(largeArrayIndex=0;largeArrayIndex<giantArray[0].length;largeArrayIndex++){

                    if(giantArray[0][largeArrayIndex][0]===1){
                        regressionArray[regressionArray.length]=giantArray[0][largeArrayIndex];
                    }


                }
                Regression(regressionArray,nodeAnzahl);
                document.getElementById("korrelation").innerHTML = "Korrelationskoeffizent: " + pearsonCorrelation(regressionArray,0,1, nodeAnzahl);



            } else if (giantArray.length===2){

                nodeAnzahl="2";

                for (giantArrayIndex=0; giantArrayIndex<giantArray.length; giantArrayIndex++){

                    regressionArray=[];

                    for(largeArrayIndex=0;largeArrayIndex<giantArray[giantArrayIndex].length;largeArrayIndex++){



                        if(giantArray[giantArrayIndex][largeArrayIndex][0]===1){
                            regressionArray[regressionArray.length]=giantArray[giantArrayIndex][largeArrayIndex];
                        }


                    }
                    largeRegressionArray[largeRegressionArray.length]=regressionArray;

                }



                Regression(largeRegressionArray,nodeAnzahl);
                document.getElementById("korrelation").innerHTML = "Korrelationskoeffizent: " + pearsonCorrelation(largeRegressionArray,0,1, nodeAnzahl);

            }


        });
        weekRegressionDropdown[2].addEventListener("click",function () {

            var regressionArray=[];
            var largeRegressionArray= [];

            var nodeAnzahl="1";

            var largeArrayIndex;
            var giantArrayIndex;

            if (giantArray.length===1){

                for(largeArrayIndex=0;largeArrayIndex<giantArray[0].length;largeArrayIndex++){

                    if(giantArray[0][largeArrayIndex][0]===2){
                        regressionArray[regressionArray.length]=giantArray[0][largeArrayIndex];
                    }


                }
                Regression(regressionArray,nodeAnzahl);
                document.getElementById("korrelation").innerHTML = "Korrelationskoeffizent: " + pearsonCorrelation(regressionArray,0,1, nodeAnzahl);



            } else if (giantArray.length===2){

                nodeAnzahl="2";

                for (giantArrayIndex=0; giantArrayIndex<giantArray.length; giantArrayIndex++){

                    regressionArray=[];

                    for(largeArrayIndex=0;largeArrayIndex<giantArray[giantArrayIndex].length;largeArrayIndex++){



                        if(giantArray[giantArrayIndex][largeArrayIndex][0]===2){
                            regressionArray[regressionArray.length]=giantArray[giantArrayIndex][largeArrayIndex];
                        }


                    }
                    largeRegressionArray[largeRegressionArray.length]=regressionArray;

                }



                Regression(largeRegressionArray,nodeAnzahl);
                document.getElementById("korrelation").innerHTML = "Korrelationskoeffizent: " + pearsonCorrelation(largeRegressionArray,0,1, nodeAnzahl);

            }


        });
        weekRegressionDropdown[3].addEventListener("click",function () {

            var regressionArray=[];
            var largeRegressionArray= [];

            var nodeAnzahl="1";

            var largeArrayIndex;
            var giantArrayIndex;

            if (giantArray.length===1){

                for(largeArrayIndex=0;largeArrayIndex<giantArray[0].length;largeArrayIndex++){

                    if(giantArray[0][largeArrayIndex][0]===3){
                        regressionArray[regressionArray.length]=giantArray[0][largeArrayIndex];
                    }


                }
                Regression(regressionArray,nodeAnzahl);
                document.getElementById("korrelation").innerHTML = "Korrelationskoeffizent: " + pearsonCorrelation(regressionArray,0,1, nodeAnzahl);



            } else if (giantArray.length===2){

                nodeAnzahl="2";

                for (giantArrayIndex=0; giantArrayIndex<giantArray.length; giantArrayIndex++){

                    regressionArray=[];

                    for(largeArrayIndex=0;largeArrayIndex<giantArray[giantArrayIndex].length;largeArrayIndex++){



                        if(giantArray[giantArrayIndex][largeArrayIndex][0]===3){
                            regressionArray[regressionArray.length]=giantArray[giantArrayIndex][largeArrayIndex];
                        }


                    }
                    largeRegressionArray[largeRegressionArray.length]=regressionArray;

                }



                Regression(largeRegressionArray,nodeAnzahl);
                document.getElementById("korrelation").innerHTML = "Korrelationskoeffizent: " + pearsonCorrelation(largeRegressionArray,0,1, nodeAnzahl);

            }

        });
        weekRegressionDropdown[4].addEventListener("click",function () {

            var regressionArray=[];
            var largeRegressionArray= [];

            var nodeAnzahl="1";

            var largeArrayIndex;
            var giantArrayIndex;

            if (giantArray.length===1){

                for(largeArrayIndex=0;largeArrayIndex<giantArray[0].length;largeArrayIndex++){

                    if(giantArray[0][largeArrayIndex][0]===4){
                        regressionArray[regressionArray.length]=giantArray[0][largeArrayIndex];
                    }


                }
                Regression(regressionArray,nodeAnzahl);
                document.getElementById("korrelation").innerHTML = "Korrelationskoeffizent: " + pearsonCorrelation(regressionArray,0,1, nodeAnzahl);



            } else if (giantArray.length===2){

                nodeAnzahl="2";

                for (giantArrayIndex=0; giantArrayIndex<giantArray.length; giantArrayIndex++){

                    regressionArray=[];

                    for(largeArrayIndex=0;largeArrayIndex<giantArray[giantArrayIndex].length;largeArrayIndex++){


                        if(giantArray[giantArrayIndex][largeArrayIndex][0]===4){
                            regressionArray[regressionArray.length]=giantArray[giantArrayIndex][largeArrayIndex];
                        }


                    }
                    largeRegressionArray[largeRegressionArray.length]=regressionArray;

                }



                Regression(largeRegressionArray,nodeAnzahl);
                document.getElementById("korrelation").innerHTML = "Korrelationskoeffizent: " + pearsonCorrelation(largeRegressionArray,0,1, nodeAnzahl);

            }


        });
        weekRegressionDropdown[5].addEventListener("click",function () {

            var regressionArray=[];
            var largeRegressionArray= [];

            var nodeAnzahl="1";

            var largeArrayIndex;
            var giantArrayIndex;

            if (giantArray.length===1){

                for(largeArrayIndex=0;largeArrayIndex<giantArray[0].length;largeArrayIndex++){

                    if(giantArray[0][largeArrayIndex][0]===5){
                        regressionArray[regressionArray.length]=giantArray[0][largeArrayIndex];
                    }


                }
                Regression(regressionArray,nodeAnzahl);
                document.getElementById("korrelation").innerHTML = "Korrelationskoeffizent: " + pearsonCorrelation(regressionArray,0,1, nodeAnzahl);



            } else if (giantArray.length===2){

                nodeAnzahl="2";

                for (giantArrayIndex=0; giantArrayIndex<giantArray.length; giantArrayIndex++){

                    regressionArray=[];

                    for(largeArrayIndex=0;largeArrayIndex<giantArray[giantArrayIndex].length;largeArrayIndex++){


                        if(giantArray[giantArrayIndex][largeArrayIndex][0]===5){
                            regressionArray[regressionArray.length]=giantArray[giantArrayIndex][largeArrayIndex];
                        }


                    }
                    largeRegressionArray[largeRegressionArray.length]=regressionArray;

                }



                Regression(largeRegressionArray,nodeAnzahl);
                document.getElementById("korrelation").innerHTML = "Korrelationskoeffizent: " + pearsonCorrelation(largeRegressionArray,0,1, nodeAnzahl);

            }


        });
        weekRegressionDropdown[6].addEventListener("click",function () {

            var regressionArray=[];
            var largeRegressionArray= [];

            var nodeAnzahl="1";

            var largeArrayIndex;
            var giantArrayIndex;

            if (giantArray.length===1){

                for(largeArrayIndex=0;largeArrayIndex<giantArray[0].length;largeArrayIndex++){

                    if(giantArray[0][largeArrayIndex][0]===6){
                        regressionArray[regressionArray.length]=giantArray[0][largeArrayIndex];
                    }


                }
                Regression(regressionArray,nodeAnzahl);
                document.getElementById("korrelation").innerHTML = "Korrelationskoeffizent: " + pearsonCorrelation(regressionArray,0,1, nodeAnzahl);



            } else if (giantArray.length===2){

                nodeAnzahl="2";

                for (giantArrayIndex=0; giantArrayIndex<giantArray.length; giantArrayIndex++){

                    regressionArray=[];

                    for(largeArrayIndex=0;largeArrayIndex<giantArray[giantArrayIndex].length;largeArrayIndex++){



                        if(giantArray[giantArrayIndex][largeArrayIndex][0]===6){
                            regressionArray[regressionArray.length]=giantArray[giantArrayIndex][largeArrayIndex];
                        }


                    }
                    largeRegressionArray[largeRegressionArray.length]=regressionArray;

                }



                Regression(largeRegressionArray,nodeAnzahl);
                document.getElementById("korrelation").innerHTML = "Korrelationskoeffizent: " + pearsonCorrelation(largeRegressionArray,0,1, nodeAnzahl);

            }

        });





    });


    grafikDropdown[2].addEventListener("click", function () {

        intervall= "month";


        var giantArray= []; // 2 tane large array tutuyor.
        var nameArray= [];

        for (var node in nodeList){

            giantArray[giantArray.length]=pullValueFromBlockchain(intervall, nodeList[node]);
            nameArray[nameArray.length]= getDataName(nodeList[node]);


        }


        //var largeArray= pullValueFromBlockchain(intervall);




        callMonthlyChart(giantArray, nameArray);

        weeklyRegressionButton.style.visibility= "hidden";
        regressionButton.style.visibility="hidden";
        monthlyRegressionButton.style.visibility="visible";






        monthRegressionDropdown[0].addEventListener("click",function () {


            var regressionArray=[];
            var largeRegressionArray= [];

            var nodeAnzahl="1";

            var largeArrayIndex;
            var giantArrayIndex;

            if (giantArray.length===1){

                for(largeArrayIndex=0;largeArrayIndex<giantArray[0].length;largeArrayIndex++){

                    if(giantArray[0][largeArrayIndex][0]===0){
                        regressionArray[regressionArray.length]=giantArray[0][largeArrayIndex];
                    }


                }
                Regression(regressionArray,nodeAnzahl);
                document.getElementById("korrelation").innerHTML = "Korrelationskoeffizent: " + pearsonCorrelation(regressionArray,0,1, nodeAnzahl);



            } else if (giantArray.length===2){

                nodeAnzahl="2";

                for (giantArrayIndex=0; giantArrayIndex<giantArray.length; giantArrayIndex++){

                    regressionArray=[];

                    for(largeArrayIndex=0;largeArrayIndex<giantArray[giantArrayIndex].length;largeArrayIndex++){



                        if(giantArray[giantArrayIndex][largeArrayIndex][0]===0){
                            regressionArray[regressionArray.length]=giantArray[giantArrayIndex][largeArrayIndex];
                        }


                    }

                    largeRegressionArray[largeRegressionArray.length]=regressionArray;

                }



                Regression(largeRegressionArray,nodeAnzahl);
                document.getElementById("korrelation").innerHTML = "Korrelationskoeffizent: " + pearsonCorrelation(largeRegressionArray,0,1, nodeAnzahl);

            }

        });



        monthRegressionDropdown[1].addEventListener("click",function () {

            var regressionArray=[];
            var largeRegressionArray= [];

            var nodeAnzahl="1";

            var largeArrayIndex;
            var giantArrayIndex;

            if (giantArray.length===1){

                for(largeArrayIndex=0;largeArrayIndex<giantArray[0].length;largeArrayIndex++){

                    if(giantArray[0][largeArrayIndex][0]===1){
                        regressionArray[regressionArray.length]=giantArray[0][largeArrayIndex];
                    }


                }
                Regression(regressionArray,nodeAnzahl);
                document.getElementById("korrelation").innerHTML = "Korrelationskoeffizent: " + pearsonCorrelation(regressionArray,0,1, nodeAnzahl);



            } else if (giantArray.length===2){

                nodeAnzahl="2";

                for (giantArrayIndex=0; giantArrayIndex<giantArray.length; giantArrayIndex++){

                    regressionArray=[];

                    for(largeArrayIndex=0;largeArrayIndex<giantArray[giantArrayIndex].length;largeArrayIndex++){



                        if(giantArray[giantArrayIndex][largeArrayIndex][0]===1){
                            regressionArray[regressionArray.length]=giantArray[giantArrayIndex][largeArrayIndex];
                        }


                    }

                    largeRegressionArray[largeRegressionArray.length]=regressionArray;

                }



                Regression(largeRegressionArray,nodeAnzahl);
                document.getElementById("korrelation").innerHTML = "Korrelationskoeffizent: " + pearsonCorrelation(largeRegressionArray,0,1, nodeAnzahl);

            }



        });
        monthRegressionDropdown[2].addEventListener("click",function () {

            var regressionArray=[];
            var largeRegressionArray= [];

            var nodeAnzahl="1";

            var largeArrayIndex;
            var giantArrayIndex;

            if (giantArray.length===1){

                for(largeArrayIndex=0;largeArrayIndex<giantArray[0].length;largeArrayIndex++){

                    if(giantArray[0][largeArrayIndex][0]===2){
                        regressionArray[regressionArray.length]=giantArray[0][largeArrayIndex];
                    }


                }
                Regression(regressionArray,nodeAnzahl);
                document.getElementById("korrelation").innerHTML = "Korrelationskoeffizent: " + pearsonCorrelation(regressionArray,0,1, nodeAnzahl);



            } else if (giantArray.length===2){

                nodeAnzahl="2";

                for (giantArrayIndex=0; giantArrayIndex<giantArray.length; giantArrayIndex++){

                    regressionArray=[];

                    for(largeArrayIndex=0;largeArrayIndex<giantArray[giantArrayIndex].length;largeArrayIndex++){



                        if(giantArray[giantArrayIndex][largeArrayIndex][0]===2){
                            regressionArray[regressionArray.length]=giantArray[giantArrayIndex][largeArrayIndex];
                        }


                    }
                    largeRegressionArray[largeRegressionArray.length]=regressionArray;

                }



                Regression(largeRegressionArray,nodeAnzahl);
                document.getElementById("korrelation").innerHTML = "Korrelationskoeffizent: " + pearsonCorrelation(largeRegressionArray,0,1, nodeAnzahl);

            }


        });
        monthRegressionDropdown[3].addEventListener("click",function () {

            var regressionArray=[];
            var largeRegressionArray= [];

            var nodeAnzahl="1";

            var largeArrayIndex;
            var giantArrayIndex;

            if (giantArray.length===1){

                for(largeArrayIndex=0;largeArrayIndex<giantArray[0].length;largeArrayIndex++){

                    if(giantArray[0][largeArrayIndex][0]===3){
                        regressionArray[regressionArray.length]=giantArray[0][largeArrayIndex];
                    }


                }
                Regression(regressionArray,nodeAnzahl);
                document.getElementById("korrelation").innerHTML = "Korrelationskoeffizent: " + pearsonCorrelation(regressionArray,0,1, nodeAnzahl);



            } else if (giantArray.length===2){

                nodeAnzahl="2";

                for (giantArrayIndex=0; giantArrayIndex<giantArray.length; giantArrayIndex++){

                    regressionArray=[];

                    for(largeArrayIndex=0;largeArrayIndex<giantArray[giantArrayIndex].length;largeArrayIndex++){




                        if(giantArray[giantArrayIndex][largeArrayIndex][0]===3){
                            regressionArray[regressionArray.length]=giantArray[giantArrayIndex][largeArrayIndex];
                        }


                    }
                    largeRegressionArray[largeRegressionArray.length]=regressionArray;

                }



                Regression(largeRegressionArray,nodeAnzahl);
                document.getElementById("korrelation").innerHTML = "Korrelationskoeffizent: " + pearsonCorrelation(largeRegressionArray,0,1, nodeAnzahl);

            }


        });
        monthRegressionDropdown[4].addEventListener("click",function () {

            var regressionArray=[];
            var largeRegressionArray= [];

            var nodeAnzahl="1";

            var largeArrayIndex;
            var giantArrayIndex;

            if (giantArray.length===1){

                for(largeArrayIndex=0;largeArrayIndex<giantArray[0].length;largeArrayIndex++){

                    if(giantArray[0][largeArrayIndex][0]===4){
                        regressionArray[regressionArray.length]=giantArray[0][largeArrayIndex];
                    }


                }
                Regression(regressionArray,nodeAnzahl);
                document.getElementById("korrelation").innerHTML = "Korrelationskoeffizent: " + pearsonCorrelation(regressionArray,0,1, nodeAnzahl);



            } else if (giantArray.length===2){

                nodeAnzahl="2";

                for (giantArrayIndex=0; giantArrayIndex<giantArray.length; giantArrayIndex++){

                    regressionArray=[];

                    for(largeArrayIndex=0;largeArrayIndex<giantArray[giantArrayIndex].length;largeArrayIndex++){


                        if(giantArray[giantArrayIndex][largeArrayIndex][0]===4){
                            regressionArray[regressionArray.length]=giantArray[giantArrayIndex][largeArrayIndex];
                        }


                    }
                    largeRegressionArray[largeRegressionArray.length]=regressionArray;

                }



                Regression(largeRegressionArray,nodeAnzahl);
                document.getElementById("korrelation").innerHTML = "Korrelationskoeffizent: " + pearsonCorrelation(largeRegressionArray,0,1, nodeAnzahl);
            }


        });
        monthRegressionDropdown[5].addEventListener("click",function () {

            var regressionArray=[];
            var largeRegressionArray= [];

            var nodeAnzahl="1";

            var largeArrayIndex;
            var giantArrayIndex;

            if (giantArray.length===1){

                for(largeArrayIndex=0;largeArrayIndex<giantArray[0].length;largeArrayIndex++){

                    if(giantArray[0][largeArrayIndex][0]===5){
                        regressionArray[regressionArray.length]=giantArray[0][largeArrayIndex];
                    }


                }
                Regression(regressionArray,nodeAnzahl);
                document.getElementById("korrelation").innerHTML = "Korrelationskoeffizent: " + pearsonCorrelation(regressionArray,0,1, nodeAnzahl);



            } else if (giantArray.length===2){

                nodeAnzahl="2";

                for (giantArrayIndex=0; giantArrayIndex<giantArray.length; giantArrayIndex++){

                    regressionArray=[];

                    for(largeArrayIndex=0;largeArrayIndex<giantArray[giantArrayIndex].length;largeArrayIndex++){


                        if(giantArray[giantArrayIndex][largeArrayIndex][0]===5){
                            regressionArray[regressionArray.length]=giantArray[giantArrayIndex][largeArrayIndex];
                        }


                    }
                    largeRegressionArray[largeRegressionArray.length]=regressionArray;

                }



                Regression(largeRegressionArray,nodeAnzahl);
                document.getElementById("korrelation").innerHTML = "Korrelationskoeffizent: " + pearsonCorrelation(largeRegressionArray,0,1, nodeAnzahl);

            }


        });
        monthRegressionDropdown[6].addEventListener("click",function () {

            var regressionArray=[];
            var largeRegressionArray= [];

            var nodeAnzahl="1";

            var largeArrayIndex;
            var giantArrayIndex;

            if (giantArray.length===1){

                for(largeArrayIndex=0;largeArrayIndex<giantArray[0].length;largeArrayIndex++){

                    if(giantArray[0][largeArrayIndex][0]===6){
                        regressionArray[regressionArray.length]=giantArray[0][largeArrayIndex];
                    }


                }
                Regression(regressionArray,nodeAnzahl);
                document.getElementById("korrelation").innerHTML = "Korrelationskoeffizent: " + pearsonCorrelation(regressionArray,0,1, nodeAnzahl);



            } else if (giantArray.length===2){

                nodeAnzahl="2";

                for (giantArrayIndex=0; giantArrayIndex<giantArray.length; giantArrayIndex++){

                    regressionArray=[];

                    for(largeArrayIndex=0;largeArrayIndex<giantArray[giantArrayIndex].length;largeArrayIndex++){


                        if(giantArray[giantArrayIndex][largeArrayIndex][0]===6){
                            regressionArray[regressionArray.length]=giantArray[giantArrayIndex][largeArrayIndex];
                        }


                    }
                    largeRegressionArray[largeRegressionArray.length]=regressionArray;

                }



                Regression(largeRegressionArray,nodeAnzahl);
                document.getElementById("korrelation").innerHTML = "Korrelationskoeffizent: " + pearsonCorrelation(largeRegressionArray,0,1, nodeAnzahl);


            }


        });
        monthRegressionDropdown[7].addEventListener("click",function () {

            var regressionArray=[];
            var largeRegressionArray= [];

            var nodeAnzahl="1";

            var largeArrayIndex;
            var giantArrayIndex;

            if (giantArray.length===1){

                for(largeArrayIndex=0;largeArrayIndex<giantArray[0].length;largeArrayIndex++){

                    if(giantArray[0][largeArrayIndex][0]===7){
                        regressionArray[regressionArray.length]=giantArray[0][largeArrayIndex];
                    }


                }
                Regression(regressionArray,nodeAnzahl);
                document.getElementById("korrelation").innerHTML = "Korrelationskoeffizent: " + pearsonCorrelation(regressionArray,0,1, nodeAnzahl);


            } else if (giantArray.length===2){

                nodeAnzahl="2";

                for (giantArrayIndex=0; giantArrayIndex<giantArray.length; giantArrayIndex++){

                    regressionArray=[];

                    for(largeArrayIndex=0;largeArrayIndex<giantArray[giantArrayIndex].length;largeArrayIndex++){



                        if(giantArray[giantArrayIndex][largeArrayIndex][0]===7){
                            regressionArray[regressionArray.length]=giantArray[giantArrayIndex][largeArrayIndex];
                        }


                    }
                    largeRegressionArray[largeRegressionArray.length]=regressionArray;

                }



                Regression(largeRegressionArray,nodeAnzahl);
                document.getElementById("korrelation").innerHTML = "Korrelationskoeffizent: " + pearsonCorrelation(largeRegressionArray,0,1, nodeAnzahl);


            }

        });
        monthRegressionDropdown[8].addEventListener("click",function () {

            var regressionArray=[];
            var largeRegressionArray= [];

            var nodeAnzahl="1";

            var largeArrayIndex;
            var giantArrayIndex;

            if (giantArray.length===1){

                for(largeArrayIndex=0;largeArrayIndex<giantArray[0].length;largeArrayIndex++){

                    if(giantArray[0][largeArrayIndex][0]===8){
                        regressionArray[regressionArray.length]=giantArray[0][largeArrayIndex];
                    }


                }
                Regression(regressionArray,nodeAnzahl);
                document.getElementById("korrelation").innerHTML = "Korrelationskoeffizent: " + pearsonCorrelation(regressionArray,0,1, nodeAnzahl);



            } else if (giantArray.length===2){

                nodeAnzahl="2";

                for (giantArrayIndex=0; giantArrayIndex<giantArray.length; giantArrayIndex++){

                    regressionArray=[];

                    for(largeArrayIndex=0;largeArrayIndex<giantArray[giantArrayIndex].length;largeArrayIndex++){



                        if(giantArray[giantArrayIndex][largeArrayIndex][0]===8){
                            regressionArray[regressionArray.length]=giantArray[giantArrayIndex][largeArrayIndex];
                        }


                    }
                    largeRegressionArray[largeRegressionArray.length]=regressionArray;

                }



                Regression(largeRegressionArray,nodeAnzahl);
                document.getElementById("korrelation").innerHTML = "Korrelationskoeffizent: " + pearsonCorrelation(largeRegressionArray,0,1, nodeAnzahl);


            }

        });
        monthRegressionDropdown[9].addEventListener("click",function () {

            var regressionArray=[];
            var largeRegressionArray= [];

            var nodeAnzahl="1";

            var largeArrayIndex;
            var giantArrayIndex;

            if (giantArray.length===1){

                for(largeArrayIndex=0;largeArrayIndex<giantArray[0].length;largeArrayIndex++){

                    if(giantArray[0][largeArrayIndex][0]===9){
                        regressionArray[regressionArray.length]=giantArray[0][largeArrayIndex];
                    }


                }
                Regression(regressionArray,nodeAnzahl);
                document.getElementById("korrelation").innerHTML = "Korrelationskoeffizent: " + pearsonCorrelation(regressionArray,0,1, nodeAnzahl);



            } else if (giantArray.length===2){

                nodeAnzahl="2";

                for (giantArrayIndex=0; giantArrayIndex<giantArray.length; giantArrayIndex++){

                    regressionArray=[];

                    for(largeArrayIndex=0;largeArrayIndex<giantArray[giantArrayIndex].length;largeArrayIndex++){



                        if(giantArray[giantArrayIndex][largeArrayIndex][0]===9){
                            regressionArray[regressionArray.length]=giantArray[giantArrayIndex][largeArrayIndex];
                        }


                    }
                    largeRegressionArray[largeRegressionArray.length]=regressionArray;

                }



                Regression(largeRegressionArray,nodeAnzahl);
                document.getElementById("korrelation").innerHTML = "Korrelationskoeffizent: " + pearsonCorrelation(largeRegressionArray,0,1, nodeAnzahl);


            }

        });
        monthRegressionDropdown[10].addEventListener("click",function () {

            var regressionArray=[];
            var largeRegressionArray= [];

            var nodeAnzahl="1";

            var largeArrayIndex;
            var giantArrayIndex;

            if (giantArray.length===1){

                for(largeArrayIndex=0;largeArrayIndex<giantArray[0].length;largeArrayIndex++){

                    if(giantArray[0][largeArrayIndex][0]===10){
                        regressionArray[regressionArray.length]=giantArray[0][largeArrayIndex];
                    }


                }
                Regression(regressionArray,nodeAnzahl);
                document.getElementById("korrelation").innerHTML = "Korrelationskoeffizent: " + pearsonCorrelation(regressionArray,0,1, nodeAnzahl);



            } else if (giantArray.length===2){

                nodeAnzahl="2";

                for (giantArrayIndex=0; giantArrayIndex<giantArray.length; giantArrayIndex++){

                    regressionArray=[];

                    for(largeArrayIndex=0;largeArrayIndex<giantArray[giantArrayIndex].length;largeArrayIndex++){



                        if(giantArray[giantArrayIndex][largeArrayIndex][0]===10){
                            regressionArray[regressionArray.length]=giantArray[giantArrayIndex][largeArrayIndex];
                        }


                    }
                    largeRegressionArray[largeRegressionArray.length]=regressionArray;

                }



                Regression(largeRegressionArray,nodeAnzahl);
                document.getElementById("korrelation").innerHTML = "Korrelationskoeffizent: " + pearsonCorrelation(largeRegressionArray,0,1, nodeAnzahl);


            }

        });
        monthRegressionDropdown[11].addEventListener("click",function () {

            var regressionArray=[];
            var largeRegressionArray= [];

            var nodeAnzahl="1";

            var largeArrayIndex;
            var giantArrayIndex;

            if (giantArray.length===1){

                for(largeArrayIndex=0;largeArrayIndex<giantArray[0].length;largeArrayIndex++){

                    if(giantArray[0][largeArrayIndex][0]===11){
                        regressionArray[regressionArray.length]=giantArray[0][largeArrayIndex];
                    }


                }
                Regression(regressionArray,nodeAnzahl);
                document.getElementById("korrelation").innerHTML = "Korrelationskoeffizent: " + pearsonCorrelation(regressionArray,0,1, nodeAnzahl);



            } else if (giantArray.length===2){

                nodeAnzahl="2";

                for (giantArrayIndex=0; giantArrayIndex<giantArray.length; giantArrayIndex++){

                    regressionArray=[];

                    for(largeArrayIndex=0;largeArrayIndex<giantArray[giantArrayIndex].length;largeArrayIndex++){



                        if(giantArray[giantArrayIndex][largeArrayIndex][0]===11){
                            regressionArray[regressionArray.length]=giantArray[giantArrayIndex][largeArrayIndex];
                        }


                    }
                    largeRegressionArray[largeRegressionArray.length]=regressionArray;

                }



                Regression(largeRegressionArray,nodeAnzahl);
                document.getElementById("korrelation").innerHTML = "Korrelationskoeffizent: " + pearsonCorrelation(largeRegressionArray,0,1, nodeAnzahl);

            }

        });




    });

    grafikDropdown[3].addEventListener("click", function () {


        intervall= "all";

        var giantArray= []; // 2 tane large array tutuyor.
        var nameArray= [];

        for (var node in nodeList){

            giantArray[giantArray.length]=pullValueFromBlockchain(intervall, nodeList[node]);
            nameArray[nameArray.length]= getDataName(nodeList[node]);


        }


        //var largeArray= pullValueFromBlockchain(intervall);




        callAllChart(giantArray, nameArray);

        weeklyRegressionButton.style.visibility= "hidden";
        monthlyRegressionButton.style.visibility="hidden";
        regressionButton.style.visibility="visible";

        regressionButton.addEventListener("click", function(){
            var regressionArray=[];
            var largeRegressionArray= [];

            var nodeAnzahl="1";

            var largeArrayIndex;
            var giantArrayIndex;

            if (giantArray.length===1){

                for(largeArrayIndex=0;largeArrayIndex<giantArray[0].length;largeArrayIndex++){


                    regressionArray[regressionArray.length]=giantArray[0][largeArrayIndex];



                }
                Regression(regressionArray,nodeAnzahl);

                document.getElementById("korrelation").innerHTML = "Korrelationskoeffizent: " + pearsonCorrelation(regressionArray,0,1, nodeAnzahl);


            } else if (giantArray.length===2){

                nodeAnzahl="2";

                for (giantArrayIndex=0; giantArrayIndex<giantArray.length; giantArrayIndex++){

                    regressionArray=[];

                    for(largeArrayIndex=0;largeArrayIndex<giantArray[giantArrayIndex].length;largeArrayIndex++){


                        regressionArray[regressionArray.length]=giantArray[giantArrayIndex][largeArrayIndex];



                    }

                    largeRegressionArray[largeRegressionArray.length]=regressionArray;

                }



                Regression(largeRegressionArray,nodeAnzahl);
                document.getElementById("korrelation").innerHTML = "Korrelationskoeffizent: " + pearsonCorrelation(largeRegressionArray,0,1, nodeAnzahl);
            }
        });

    });








}



function pullValueFromBlockchain(intervall, Node) {


    var largeArray=[];




    var blockCounter;
    var timeSeriesCounter=0;

    for ( blockCounter=1; blockCounter< web3.eth.blockNumber + 1 ;blockCounter++){

        var transactionCounter;



        for (transactionCounter=0; transactionCounter < web3.eth.getBlockTransactionCount(blockCounter); transactionCounter++){

            var NodeID=web3.eth.getTransactionFromBlock(blockCounter,transactionCounter).from;




            //Yazılan node idleri alıp her bir transaction'ın from'unda bu yazılanlardan biri var mı diye bakacak.


            if (NodeID===Node){    //0x19d64a9e83be04b8ddb5940348311b1e45ba0d64

                var hexValue= web3.eth.getTransactionFromBlock(blockCounter,transactionCounter).input;


                var stringValueFromHex= hexToString(hexValue);


                var jsonValue= stringToJson(stringValueFromHex);

                var smallArray=[];

                if (intervall === "day"){



                    smallArray[smallArray.length]=new Date(parseInt(jsonValue[0].timestamp)).getHours();

                    smallArray[smallArray.length]=parseFloat(jsonValue[0].data.value);
                    largeArray[largeArray.length]=smallArray;


                }
                else if (intervall === "week"){




                    smallArray[smallArray.length]=new Date(parseInt(jsonValue[0].timestamp)).getDay();



                    smallArray[smallArray.length]=parseFloat(jsonValue[0].data.value);
                    largeArray[largeArray.length]=smallArray;


                } else if (intervall === "month"){





                    smallArray[smallArray.length]=new Date(parseInt(jsonValue[0].timestamp)).getMonth();

                    smallArray[smallArray.length]=parseFloat(jsonValue[0].data.value);
                    largeArray[largeArray.length]=smallArray;


                }else if (intervall === "all"){



                    smallArray[smallArray.length]=timeSeriesCounter;

                    smallArray[smallArray.length]=parseFloat(jsonValue[0].data.value);
                    largeArray[largeArray.length]=smallArray;

                    timeSeriesCounter+= 1;


                }

            }







        }
    }


    return largeArray;

}







function hexToString (hex) {

    var str= "";

    for (var i = 0; i < hex.length-1; i += 2) {
        str+= String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    }

    return str;
}

/**
 * @description Converts a string response to an array of objects.
 * @returns {array} - an array of objects.
 * @param input
 */
function stringToJson(input) {
    var result = [];

    //replace leading and trailing [], if present
    input = input.replace(/^\[/,'');
    input = input.replace(/\]$/,'');

    //change the delimiter to
    input = input.replace(/},{/g,'};;;{');

    // preserve newlines, etc - use valid JSON
    //https://stackoverflow.com/questions/14432165/uncaught-syntaxerror-unexpected-token-with-json-parse
    input = input.replace(/\\n/g, "\\n")
        .replace(/\\'/g, "\\'")
        .replace(/\\"/g, '\\"')
        .replace(/\\&/g, "\\&")
        .replace(/\\r/g, "\\r")
        .replace(/\\t/g, "\\t")
        .replace(/\\b/g, "\\b")
        .replace(/\\f/g, "\\f");
    // remove non-printable and other non-valid JSON chars
    input = input.replace(/[\u0000-\u0019]+/g,"");

    input = input.split(';;;');

    input.forEach(function(element) {

        result.push(JSON.parse(element));
    }, this);

    return result;
}



// REGRESSSION //

function Regression(ValueFromBC, nodeAnzahl) {

    var nameArray= [];

    for (var node in nodeList){

        nameArray[nameArray.length]= getDataName(nodeList[node]);

    }



    var margin = {
            top: 20,
            right: 20,
            bottom: 30,
            left: 40
        },
        width = 960 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;

    var x = d3.scale.linear()
        .range([0, width]);

    var y = d3.scale.linear()
        .range([height, 0]);

    var xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom");

    var yAxis = d3.svg.axis()
        .scale(y)
        .orient("left");



    d3.selectAll("#chart_svg").remove();
    var svg = d3.select("body").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .attr( "id", "chart_svg")

        .append("g")
        // .attr("title", "whatsup")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");



    //<div id="divCheckbox" style="display: none;">

    var data = create_data(ValueFromBC,nodeAnzahl);

    data.forEach(function (d) {
        d.x = +d.x;
        d.y = +d.y;
        d.yhat = +d.yhat;
    });

    var line = d3.svg.line()
        .x(function (d) {
            return x(d.x);
        })
        .y(function (d) {
            return y(d.yhat);
        });

    x.domain(d3.extent(data, function (d) {
        return d.x;
    }));
    y.domain(d3.extent(data, function (d) {
        return d.y;
    }));

    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis)
        .append("text")
        .attr("class", "label")
        .attr("x", width)
        .attr("y", -6)
        .style("text-anchor", "end")
        .text(nameArray[1]);

    svg.append("g")
        .attr("class", "y axis")
        .call(yAxis)
        .append("text")
        .attr("class", "label")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text(nameArray[0]);

    svg.selectAll(".dot")
        .data(data)
        .enter().append("circle")
        .attr("class", "dot")
        .attr("r", 3.5)
        .attr("cx", function (d) {
            return x(d.x);
        })
        .attr("cy", function (d) {
            return y(d.y);
        });

    svg.append("path")
        .datum(data)
        .attr("class", "line")
        .attr("d", line);


    function create_data(Value,nodeAnzahl) {

        var x = [];
        var y = [];
        var j;

        if (nodeAnzahl==="1"){
            for (j = 0; j < Value.length; j++) {
                x[x.length] = j;
                //x[x.length] = Value[j][0];
                y[y.length] = Value[j][1];


            }


        } else if (nodeAnzahl==="2"){

            for (j = 0; j < Value.length; j++) {

                var k;

                if(j===0){


                    for(k=0; k<Value[0].length; k++){
                        x[x.length] = Value[0][k][1];

                    }

                }else if (j===1){

                    for(k=0; k<Value[1].length; k++){
                        y[y.length] = Value[1][k][1];

                    }
                }


            }


        }









        var n = y.length;
        var x_mean = 0;
        var y_mean = 0;
        var term1 = 0;
        var term2 = 0;

        // create x and y values
        for (var i = 0; i < n; i++) {

            x_mean += x[i];
            y_mean = y_mean + y[i];


        }
        // calculate mean x and y
        x_mean /= n;
        y_mean /= n;

        // calculate coefficients
        var xr = 0;
        var yr = 0;
        for (i = 0; i < x.length; i++) {
            xr = x[i] - x_mean;
            yr = y[i] - y_mean;
            term1 += xr * yr;
            term2 += xr * xr;

        }
        var b1 = term1 / term2;
        var b0 = y_mean - (b1 * x_mean);
        // perform regression
        let yhat = [];
        // fit line using coeffs
        for (i = 0; i < x.length; i++) {
            yhat.push(b0 + (x[i] * b1));
        }

        var data = [];
        for (i = 0; i < y.length; i++) {
            data.push({
                "yhat": yhat[i],
                "y": y[i],
                "x": x[i]
            });
        }
        return (data);
    }
}



function getDataName(Node){

    var blockCounter;





    for ( blockCounter=1; blockCounter< web3.eth.blockNumber + 1 ;blockCounter++){

        var transactionCounter;



        for (transactionCounter=0; transactionCounter < web3.eth.getBlockTransactionCount(blockCounter); transactionCounter++){

            var NodeID=web3.eth.getTransactionFromBlock(blockCounter,transactionCounter).from;






            if (NodeID===Node){    //0x19d64a9e83be04b8ddb5940348311b1e45ba0d64

                var hexValue= web3.eth.getTransactionFromBlock(blockCounter,transactionCounter).input;


                var stringValueFromHex= hexToString(hexValue);


                var jsonValue= stringToJson(stringValueFromHex);



                return jsonValue[0].data.name;



            }








        }
    }




}


function getLatestTransaction(NodeArray){



    var blockCounter;

    var latestTransactionArray= [];





    for (var Node in NodeArray) {

        var largeArray= [];


        for (blockCounter=web3.eth.blockNumber; blockCounter > 0; blockCounter--) {



            var transactionCounter;


            for (transactionCounter = web3.eth.getBlockTransactionCount(blockCounter)-1; transactionCounter >  - 1; transactionCounter--) {




                var NodeID = web3.eth.getTransactionFromBlock(blockCounter, transactionCounter).from;


                if (NodeID === NodeArray[Node]) {    //0x19d64a9e83be04b8ddb5940348311b1e45ba0d64

                    var smallArray= [];

                    smallArray[smallArray.length]= web3.eth.getTransactionFromBlock(blockCounter, transactionCounter).hash;

                    smallArray[smallArray.length]= web3.eth.getTransactionFromBlock(blockCounter, transactionCounter).from;

                    smallArray[smallArray.length]= web3.eth.getTransactionFromBlock(blockCounter, transactionCounter).to;

                    largeArray[largeArray.length]= smallArray;


                }



            }

        }

        latestTransactionArray[latestTransactionArray.length]= largeArray;
    }

    return latestTransactionArray;


}

function getLatestBlock(){



    var blockCounter;

    var latestBlockArray= [];





    for (blockCounter=web3.eth.blockNumber; blockCounter>0;blockCounter--){



        if (blockCounter!==0){


            var smallArray = [];

            smallArray[smallArray.length] = web3.eth.getBlock(blockCounter).number;
            smallArray[smallArray.length]= web3.eth.getBlock(blockCounter).miner;
            smallArray[smallArray.length]= new Date(web3.eth.getBlock(blockCounter).timestamp*1000);
            latestBlockArray[latestBlockArray.length]=smallArray;



        }else{
            return latestBlockArray;
        }



    }



    return latestBlockArray;


}