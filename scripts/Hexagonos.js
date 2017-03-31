

function draw(canvas) {
  var ctx = canvas.getContext("2d");
  ctx.canvas.width  = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
  //...agora codigo uqe desenha...
  var protoHex= new Hex(-1,0,1)
//var pontoInicio=canvas.cantoSuperiorEsquerdo
  var hexP=new fabric.Polygon(protoHex)
  canvas.add(protoHex);
  canvas.renderAll();

}

draw(canvas)
