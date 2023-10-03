var cbtn=$('<button>SHOW</button>').click(function(){
  alert($('#resolve').text())
});
$('#resolve').show()
$('.block-content').append(cbtn);
