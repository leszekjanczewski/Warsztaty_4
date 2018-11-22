$(document).ready(function () {
    $.ajax({
        url: "http://localhost:8282/books",
        type: "GET",
        dataType: "json"
    }).done(function (result) {
        $.each(result, function (idx, element) {
            var row = $('<tr>');
            var td = $('<td>');

            row.append(td);
        })
        for (var i = 0; i < result.length; i++) {
            $('tbody').append('<tr id="myRow"><td>' + result[i].isbn + '</td><td class="titleBook">' + result[i].title + '<div data-id="id"></div></td>');
        }
    });

    var titleElement = $('tbody').next();
    console.log(titleElement[0]);
    // titleElement.on('click', function () {
    //     console.log('test');
    // });
    titleElement.each(function (index, element) {
        console.log($(element));
    })
})


