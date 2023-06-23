$(document).ready(function () {
    $("#sesion-btn").click(function () {
        $("#navbar").fadeOut(100);
        $("#banner").fadeOut(100);
        $("#login-singUp").fadeIn(1000);
        $("#sing-up").fadeOut(100);
        $("#login").fadeIn(100);
        $("#title-form").text("Iniciar sesión");
    });

    $("#register").click(function () {
        $("#navbar").fadeOut(100);
        $("#banner").fadeOut(100);
        $("#login-singUp").fadeIn(1000);
        $("#sing-up").fadeIn(100);
        $("#login").fadeOut(100);
        $("#title-form").text("Crear cuenta");
    });

    $("#new-acount-btn-form").click(function () {
        $("#login").fadeOut(100);
        $("#sing-up").fadeIn(1000);
        $("#title-form").text("Crear cuenta");
        
    });

    $("#have-acount-btn-form").click(function () {
        $("#sing-up").fadeOut(100);
        $("#login").fadeIn(1000);
        $("#title-form").text("Iniciar sesión");
    });
});