var visiblePages = 7;
$(function () {
	if($("#totalPages").val() <= 7){
		visiblePages = $("#totalPages").val();
	}
    $('#pagination-demo').twbsPagination({
        totalPages: $("#totalPages").val(),
        visiblePages: visiblePages,
        version: '1.1',
        onPageClick: function (event, page) {
            $('#page-content').text('Page ' + page);
        }
    });

    $('#navigation').affix({
        offset: {
            top: 200
        }
    });

    $('#pagination-demo-v1_0').twbsPagination({
        totalPages: $("#totalPages").val(),
        version: '1.0'
    });

    $('#pagination-demo-v1_1').twbsPagination({
        totalPages: $("#totalPages").val(),
        version: '1.1'
    });

    $('#visible-pages-example').twbsPagination({
        totalPages: $("#totalPages").val(),
        visiblePages: visiblePages,
        version: '1.1'
    });

});

