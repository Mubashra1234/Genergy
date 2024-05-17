window.onscroll = function () { scrollFunction() };

    var menutop = document.getElementById("header");

    function scrollFunction() {

        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {


            menutop.classList.add("menufixcustom");

        } else {


            menutop.classList.remove("menufixcustom");

        }

    }