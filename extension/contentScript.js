chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.task == "click") {
            var stack = [];

            var rows = $('.particle-table-row ess-cell keyword-text span');

            for (let i = 0; i < rows.length; i++) {
                var a = $('.particle-table-row').not(".group-header")[i];
                console.log($(a)[0]);
                
                var vol = $(a).find('.xt-col').html();
                if(vol !== undefined){
                    vol = $(a).find('.xt-col').html().replace(/[^0-9]/g, '');
                }else{
                    vol = 0;
                }
                if(vol > 999){
                stack.push(
                    { keyword: rows[i].innerHTML, number: i, vol: vol, c: false }
                    );
                }
            }
            // console.log(stack);
            
            $.post("http://127.0.0.1:3000/keyword",
                {
                    keywords: stack
                },
                function (data, status) {
                    // console.log(data);
                    // console.log(status);
                });
        }

    });



