// Initialize font properties
const fontname = "DM Sans";
const fontweights = [400, 500, 700];
const displayfontname = "Anybody";
const displayfontweight = 800;

// Color properties
const basecolor = "#0a0a0a";
const accentcolor = "#3d065f";
const highlightcolor = "#0a0a0a";

// const basecolor = "#888";
// const accentcolor = "#222";
// const highlight = "#111";

// Body properties
const bodyfontweight = 300;
const bodyfontsize = "13pt";
const backgroundcolor = "#fff1eb";

// Link properties
const acolor = accentcolor;
const adecoration = "none";
const ahovercolor = accentcolor;
const ahoverduration = "0.3s";
// const ahoverdecoration = "none"; //none, underline, overline, dotted, color (https://www.w3schools.com/cssref/pr_text_text-decoration.asp)

// Menu properties
const menucolor = basecolor;
const menufontsize = "12pt";
const menudecoration = "none";
// const menuhover = accentcolor;
// const menuhoverduration = "3s";
// const menuhoverdecoration = "underline"; //none, underline, overline, dotted, color (https://www.w3schools.com/cssref/pr_text_text-decoration.asp)

// Header properties
const headercolor = accentcolor;
const headerfontsize = "20pt";
const headerdecoration = "none";
const namecolor = highlightcolor;
const namefontsize = "26pt";


// Publication properties
const ptitlecolor = accentcolor;
const ptitlefontsize = bodyfontsize;
const ptitleweight = bodyfontweight;
const ptitledecoration = "none";
const ptitlestyle = "normal";

const authorcolor = accentcolor;
const authorweight = bodyfontweight;
const authordecoration = "none";
const authorstyle = "normal";

const selfcolor = highlightcolor;
const selfweight = bodyfontweight;
const selfdecoration = "none";
const selfstyle = "normal";

const tagcolor = accentcolor;
const tagweight = bodyfontweight;
const tagdecoration = "none";
const tagstyle = "normal";

const insttitlecolor = highlightcolor;
const insttitlesize = "12px";
const instyearcolor = accentcolor;
const instyearsize = "11px";

//     .institution {
//             font - size: 12px;
//             color: #222;
//         }
//   .years {
//             font - size: 11px;
//             color: #888;
//         }

// Works for sans serif, change otherwise
$("head").append("<link href='https://fonts.googleapis.com/css2?family=" + fontname.replace(/ /g, "+") + ":wght@" + fontweights.join(';') + "&family=" + displayfontname + ":wght@" + displayfontweight + "&display=swap' rel='stylesheet' type='text/css'>");
$("body").css("font-family", fontname);

$("body").css("color", basecolor);
$("body").css("font-weight", bodyfontweight);
$("body").css("font-size", bodyfontsize);
$("body").css("background-color", backgroundcolor);

$("a").css("color", acolor);
$("a").css("text-decoration", adecoration);

$(".menulink").css("color", menucolor);
$(".menulink").css("font-size", menufontsize);
$(".menulink").css("text-decoration", menudecoration);

$(".header").css("color", headercolor);
$(".header").css("font-size", headerfontsize);
$(".header").css("text-decoration", headerdecoration);
$(".header").css("font-family", displayfontname);
$(".header").css("font-weight", displayfontweight);
$(".name").css("color", namecolor);
$(".name").css("font-size", namefontsize);
$(".name").css("font-family", displayfontname);
$(".name").css("font-weight", displayfontweight);

$(".papertitle").css("color", ptitlecolor);
$(".papertitle").css("font-size", ptitlefontsize);
$(".papertitle").css("font-weight", ptitleweight);
$(".papertitle").css("text-decoration", ptitledecoration);
$(".papertitle").css("font-style", ptitlestyle);

$(".thisauthor").css("color", selfcolor);
$(".thisauthor").css("font-weight", selfweight);
$(".thisauthor").css("text-decoration", selfdecoration);
$(".thisauthor").css("font-style", selfstyle);

$(".institution").css("color", insttitlecolor);
$(".institution").css("font-size", insttitlesize);
$(".years").css("color", instyearcolor);
$(".years").css("font-size", instyearsize);

// Custom cursor ring: bigger than the native arrow, grows over links/buttons
(function () {
    if (window.matchMedia("(hover: none), (pointer: coarse)").matches) return;

    var $ring = $("<div class='cursor-ring'></div>").appendTo("body");
    var hoverSelector = "a, .menulink, button";

    $(document).on("mousemove", function (e) {
        $ring.addClass("cursor-ring-active").css({ left: e.clientX, top: e.clientY });
    });

    $(document).on("mouseleave", function () {
        $ring.removeClass("cursor-ring-active");
    });

    $(document).on("mouseenter", hoverSelector, function () {
        $ring.addClass("cursor-ring-hover");
    });

    $(document).on("mouseleave", hoverSelector, function () {
        $ring.removeClass("cursor-ring-hover");
    });
})();

// Scroll-reveal fade-ins per section
(function () {
    var $targets = $(".header, .paper, .about > p, .row.text-center.py-4 > div");
    $targets.addClass("reveal");

    // Stagger the institution/education logo tiles within each row
    $(".row.text-center.py-4").each(function () {
        $(this).children().each(function (i) {
            $(this).css("transition-delay", Math.min(i * 80, 320) + "ms");
        });
    });

    if (!("IntersectionObserver" in window)) {
        $targets.addClass("reveal-visible");
        return;
    }

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("reveal-visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });

    $targets.each(function () {
        observer.observe(this);
    });
})();

// Scroll-progress bar
(function () {
    var $bar = $("<div class='scroll-progress'></div>").appendTo("body");

    function updateProgress() {
        var scrollTop = $(window).scrollTop();
        var docHeight = $(document).height() - $(window).height();
        var pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        $bar.css("width", pct + "%");
    }

    $(window).on("scroll resize", updateProgress);
    updateProgress();
})();