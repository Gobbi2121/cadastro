
$(document).ready(function(){
    $('#celular').mask('(00) 00000-0000');

    $('#cadastroForm').on('submit', function(event) {
        event.preventDefault();

        var isValid = true;
        var fields = ['#nome', '#sobrenome', '#idade', '#celular', '#principal', '#whatsapp', '#email', '#corporativo'];

        fields.forEach(function(field) {
            if ($(field).val().trim() === '' || $(field).val() === null) {
                isValid = false;
                $(field).css('border-color', 'red');
            } else {
                $(field).css('border-color', ''); 
            }
        });

        if (isValid) {
            alert('Formulário enviado com sucesso!');
        } else {
            alert('Por favor, preencha todos os campos obrigatórios.');
        }
    });
});