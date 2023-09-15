function clearForm(e) {
    Array.from(document.querySelectorAll("input")).forEach(
      input => (input.value = "")
    );
    document.querySelector("textArea").value = "";
    window.location.href = '/task'
    // e.preventDefault();
}

export default clearForm

