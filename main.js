$custom-file-text: (
  placeholder: (
    en: "Choose file...",
    es: "Seleccionar archivo..."
  ),
  button-label: (
    en: "Browse",
    es: "Navegar"
  )
);

$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})