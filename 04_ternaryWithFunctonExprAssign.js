console.log(`###1`);
var elegibility = function(gradScore, hscScore, sscScore, candidateName){
    var res = ((gradScore >= 70) || (hscScore >= 80) || (sscScore >= 90)) ? `Congrates ${candidateName} you are eligible for TCS interview` : `Unfortulately you are not eligible for interview`;
    console.log(res);


}
elegibility(80, 86, 90, "Monika");
elegibility(70, 65, 55, "Sonika");
elegibility(60, 79, 88, "Kanika");

