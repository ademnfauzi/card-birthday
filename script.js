window.onload = function () {

    const merrywrap = document.getElementById("merrywrap");

    const box = merrywrap.querySelector(".giftbox");

    let step = 1;


    /*
        Animation timing

        STEP 1
        Gift shakes

        STEP 2
        Gift opens and text appears

        STEP 3
        Gift disappears

        STEP 4
        Cake comes from bottom
    */
    const stepMinutes = [
        2000,
        2500,
        1000
    ];


    function init() {

        box.addEventListener(
            "click",
            openBox,
            false
        );

    }


    function stepClass(currentStep) {

        merrywrap.className = "merrywrap";

        merrywrap.classList.add(
            "step-" + currentStep
        );

    }


    function openBox() {

        /*
            Prevent multiple clicks
        */
        if (step === 1) {

            box.removeEventListener(
                "click",
                openBox,
                false
            );

        }


        stepClass(step);


        /*
            Stop after step 4
        */
        if (step === 4) {
            return;
        }


        /*
            Wait before next animation
        */
        setTimeout(
            openBox,
            stepMinutes[step - 1]
        );


        step++;

    }


    init();

};