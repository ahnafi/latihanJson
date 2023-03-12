function tampilSemuaMenu(){
    $.getJSON("data/pizza.json",function(data){
        let row = data.menu;
        $.each(row,function (i,data){
            $("#daftarMenu").append(`<div class="col-md-4  col-lg-3 col-sm-6 mt-2"><div class="card"><img src="img/pizza/${data.gambar}" class="card-img-top" alt="${data.kategori}"><div class="card-body"><h5 class="card-title">${data.nama}</h5><p class="card-text">${data.deskripsi}</p><h5 class="card-title">Rp.${data.harga},-</h5><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div>`)
        })
    })
}
tampilSemuaMenu();

// fitur menu
$(".nav-link").on("click" , function(){
    $(".nav-link").removeClass("active");
    $(this).addClass('active');
    let kategori = $(this).html();
    $("#judulMenu").html(kategori);

    // if(kategori == 'ALL menu'){
    //     tampilSemuaMenu();
    //     return;
    // } 

    $.getJSON('data/pizza.json',function(data){
        let menu = data.menu;
        let content = '';
        if(kategori == 'ALL menu'){
            $('#daftarMenu').html(content)
            tampilSemuaMenu();
            return;
        } 
        $.each(menu,function (i, data) {
            if (data.kategori == kategori.toLowerCase()) {
                    content += `<div class="col-md-4  col-lg-3 col-sm-6 mt-2"><div class="card"><img src="img/pizza/${data.gambar}" class="card-img-top" alt="${data.kategori}"><div class="card-body"><h5 class="card-title">${data.nama}</h5><p class="card-text">${data.deskripsi}</p><h5 class="card-title">Rp.${data.harga},-</h5><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div>`;
            }
        });
        $('#daftarMenu').html(content)
    })
})