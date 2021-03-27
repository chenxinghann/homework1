$(function() {
  var data = [
    ['Java', '1', '降', '-0.01%'],
    ['C', '2', '升', '+2.44%'],
    ['Python', '3', '升', '+1.41%'],
    ['C++', '4', '降', '-2.58%'],
    ['C#','5','升','+2.07'],
    ['Visual Basic.NET','6','降','-1.17%'],
    ['JavaScript','7','降','-0.85']
  ];

  var container = $('#main');
  
  var hot = new Handsontable(container.get(0), {
    data: data,
    zontextMenu: true,        
    manualRowResize : true,      
    manualColumnResize : true,   
    rowHeaders: false,
    className: "htCenter htMiddle",
    colWidths: "150",
    colHeaders: [
      '语言名称',
      '排名',
      '升或降',
      '变化幅度'
    ]
  });

  function down(event,coords,td){
    var row = coords.row;
    var col = coords.col;
    hot.setCellMeta(row,col,"className","htLeft htMiddle");
    hot.render();
  } 
  Handsontable.hooks.add('afterOnCellMouseDown',down,hot);

  return hot;
});
