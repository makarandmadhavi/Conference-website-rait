function changetab(id) {
    $(".main").load(id+".html");
    $("li").removeClass("active");
    $("#"+id).addClass("active");
}
