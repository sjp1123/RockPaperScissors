const Retry = () => {
    questionContainer.classList.remove("hidden");
    images.forEach(img => {
        img.classList.remove("hidden");
    });
    computerImage.classList.add("hidden");
    result.innerText = "가위바위보!";
    isGame = true;
}
