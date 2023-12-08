document.addEventListener('DOMContentLoaded', function() {
    let blocks = document.getElementsByClassName('head-scroll');

    function checkBlocksVisibility() {
        let windowHeight = window.innerHeight;

        Array.from(blocks).forEach(block => {
            let blockPosition = block.getBoundingClientRect().top;

            if (blockPosition < windowHeight - 100) {
                block.classList.add("visible");
            }
        });
    }

    window.addEventListener('scroll', function() {
        checkBlocksVisibility();
    });

    checkBlocksVisibility();
});
