function showAlert(type, message) {
    return Swal.fire({
        title: type === 'success' ? '¡Éxito!' : 'Error',
        text: message,
        icon: type,
        confirmButtonText: 'Aceptar'
    });
}


function confirmDelete(url, element) {
    const token = $('input[name="__RequestVerificationToken"]').val();

    Swal.fire({
        title: '¿Estás seguro?',
        text: "¡No podrás revertir esto!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                url: url,
                type: 'POST',
                headers: {
                    'RequestVerificationToken': token
                },
                success: function (response) {
                    if (response.success) {
                        showAlert('success', 'El registro ha sido eliminado.');
                        $(element).closest('tr').remove();
                    } else {
                        showAlert('error', response.message);
                    }
                },
                error: function (xhr, status, error) {
                    showAlert('error', 'Ocurrió un problema al eliminar el registro: ' + error);
                }
            });
        }
    });
}