module.exports = {
  function ConvertColor(value){

  //adapted from: http://www.javascripter.net/faq/hextorgb.htm
  
  let R, G, B, Result;

  if(typeof value === 'string'){
    if(value.charAt(0) === "#"){
    value = value.substring(1);
    R = parseInt(value.substring(0, 2), 16)
    G = parseInt(value.substring(2, 4), 16)
    B = parseInt(value.substring(4, 6), 16)
    Result = "rgb(" + R + ", " + G + ", " + B + ")"
    }
  }
 
  //tooked from the top answer at: https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
  else{
    Result ="#" + ((1 << 24) + (value[0] << 16) + (value[1] << 8) + value[2]).toString(16).slice(1).toUpperCase();
  }

  console.log(Result)
  }
};