document.getElementById("submit").addEventListener("click", calculate);

function calculate(event) {
    event.preventDefault();
    const p = document.getElementById("principal-loan").value;
    let r = document.getElementById("interest-rate").value;
    let n = document.getElementById("length-loan").value;

    if (
        isNaN(p) ||
        isNaN(r) ||
        isNaN(n) ||
        !p.length ||
        !r.length ||
        !n.length
    ) {
        if (isNaN(p) || !p.length) {
            document.getElementById("principal-loan").classList.add("error");
        } else {
            document.getElementById("principal-loan").classList.remove("error");
        }
        if (isNaN(r) || !r.length) {
            document.getElementById("interest-rate").classList.add("error");
        } else {
            document.getElementById("interest-rate").classList.remove("error");
        }
        if (isNaN(n) || !n.length) {
            document.getElementById("length-loan").classList.add("error");
        } else {
            document.getElementById("length-loan").classList.remove("error");
        }
        document.getElementById("payment").innerText = "";
        return false;
    } else {
        document.getElementById("principal-loan").classList.remove("error");
        document.getElementById("interest-rate").classList.remove("error");
        document.getElementById("length-loan").classList.remove("error");
    }

    r = r / 100 / 12;
    n *= 12;
    let payment = p * ((r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1));

    document.getElementById("payment").innerText =
        "Your monthly mortgage payment will be $" + parseInt(payment);
}
