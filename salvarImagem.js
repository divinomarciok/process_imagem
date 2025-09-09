document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btnSalvar').addEventListener('click', function() {
        const input = document.getElementById('inputImagem');
        if (!input.files || input.files.length === 0) {
            alert('Por favor, selecione uma imagem primeiro.');
            return;
        }
        const file = input.files[0];
        const url = URL.createObjectURL(file);
        const a = document.createElement('a');
        a.href = url;
        a.download = file.name;
        document.body.appendChild(a);
        a.click();
        setTimeout(() => {
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        }, 0);
    });
});
