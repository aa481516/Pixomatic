
$('.addUser').click(function () {
    $('.users-list').append('<li>' + $('.user_name').val() + '</li>');
    $('.user_name').val('');
    ran_col();
});

$( function() {
    $( ".users-list" ).sortable();
    $( ".users-list" ).disableSelection();
} );

function ran_col() {
    var color = '#';
    var letters = ['000000','FF0000','00FF00','0000FF','FFFF00','00FFFF','FF00FF','C0C0C0'];
    color += letters[Math.floor(Math.random() * letters.length)];
    $('ul.users-list li:last-child').css({backgroundColor: color});
}
