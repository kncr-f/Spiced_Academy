var textArea = $("textarea");

textArea.on("input", function () {

    localStorage.setItem("localText", textArea.val())
})

textArea.val(localStorage.getItem("localText"))
console.log(localStorage.getItem("localText"));

