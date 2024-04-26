$(document).on("click", "#btnagregar", function(){
    $("#txtnombre").val("");
    $("#txtapellido").val("");
    $("#txtemail").val("");
    $("#txtemail").prop('readonly', false);
    $("#txtusuario").val("");
    $("#txtusuario").prop('readonly', false);
    $("#hddidusuario").val("0");
    $("#switchusuario").hide();
    $("#cbactivo").prop("checked", false);
    $("#divmsgpassword").show();
    $("#btnenviar").hide();
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
            $("#txtemail").prop('readonly', true);
            $("#txtusuario").val(resultado.nomusuario);
            $("#txtusuario").prop('readonly', true);
            $("#hddidusuario").val(resultado.idusuario);
            $("#switchusuario").show();
            $("#divmsgpassword").hide();
            $("#btnenviar").show();
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