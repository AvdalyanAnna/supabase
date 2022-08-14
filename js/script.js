$(document).ready(function () {
    $(".tab").on("click", function () {
        const $this=$(this)
        const parent=$this.data("parent")
        const show = $this.data("show")
        $this.parent().children(".tab").removeClass("active")
        $this.addClass("active")
        $this.parents(parent).find(".tabs-item").hide(300)
        $(".tabs-item[data-element='"+show+"']").show(300)
    })
})