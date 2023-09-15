function clearForm(e) {
    Array.from(document.querySelectorAll("input")).forEach(
      input => (input.value = "")
    );
    document.querySelector("textArea").value = "";
    // window.location.pathname = '/task'
    e.preventDefault();
}

export default clearForm

