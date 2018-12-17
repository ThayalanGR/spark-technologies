$(function () {
    $.scrollify({
        section: ".scrollme",
        before: function (i, panels) {

            var ref = panels[i].attr("data-section-name");

            $(".pagination .active").removeClass("active");

            $(".pagination").find("a[href=\"#" + ref + "\"]").addClass("active");
        },
        afterRender: function () {
            $(".pagination a").on("click", $.scrollify.move);
        }
    });
});