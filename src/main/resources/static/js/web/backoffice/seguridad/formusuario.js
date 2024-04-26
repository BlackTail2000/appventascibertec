$(document).on("click", "#btnagregar", function(){
    $("#txtnombre").val("");
    $("#txtapellido").val("");
    $("#txtemail").val("");
    $("#txtusuario").val("");
    $("#txtpassword").val("");
    $("#hddidusuario").val("0");
    $("#switchusuario").hide();
    $("#cbactivo").prop("checked", false);
    $("#modalusuario").modal("show");
});
$(document).on("click", ".btnactualizar", function(){
    $.ajax({
        type: "GET",
        url: "/seguridad/usuario/" + $(this).attr("data-usuid"),
        dataType: "json",
        success: function(resultado){
            $("#txtnombre").val(resultado.nombres);
            $("#txtapellido").val(resultado.apellidos);
            $("#txtemail").val(resultado.email);
            $("#txtusuario").val(resultado.nomusuario);
            $("#hddidusuario").val($(this).attr("data-usuid"));
            $("#switchusuario").show();
            if(resultado.activo){
                $("#cbactivo").prop("checked", true);
            } else {
                $("#cbactivo").prop("checked", false);
            }
        }
    })
    $("#modalusuario").modal("show");
});

$(document).on("click", "#btnguardar", function(){

})

function listarUsuarios(){

}