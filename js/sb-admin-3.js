(function($) {
  "use strict"; 
    
    $('#collapsibleA, #collapsibleB, #collapsibleC, #collapsibleD').click(function(){
        $(this).find('i').toggleClass('fa-caret-square-down fa-caret-square-up')
    });
    
    $("#searchBar").keyup(function () {
        var value = this.value.toLowerCase().trim();

        $("table tr").each(function (index) {
            if (!index) return;
            $(this).find("td").each(function () {
                var id = $(this).text().toLowerCase().trim();
                var not_found = (id.indexOf(value) == -1);
                $(this).closest('tr').toggle(!not_found);
                return not_found;
            });
        });
    });
    


})(jQuery); // End of use strict