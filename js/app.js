$(document).ready(function () {
    $.ajax({
        url: "http://localhost:8282/books",
        type: "GET",
        dataType: "json"
    }).done(function (result) {
        $.each(result, function (idx, element) {
            var row = $('<tr>');
            var td = $('<td>')

            row.append(td);
        })
        for (var i = 0; i < result.length; i++) {
            $('tbody').append('<tr><td>' + rresult[i].isbn + '</td><td>' + result[i].title + '<div data-id="id"></div></td>');
        }
    });

    var titleElement = $('tr :nth-child(2)');
    console.log(titleElement);
    $('tr :nth-child(2)').on('click', function () {
        console.log('klik');
    })
});


