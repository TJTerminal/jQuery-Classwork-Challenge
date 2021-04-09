$(function() {
    const newHomes = [
        {address: "27569 Cedarwood Drive", sf: "2,535", bedrooms: 3, baths: 2.5, price: "$496,500"},
        {address: "316 Annandale Drive", sf: "1,326", bedrooms: 4, baths: 2, price: "$275,000"},
        {address: "251 Grandview Road", sf: "3,800", bedrooms: 3, baths: 2, price: "$699,900"},
        {address: "28571 Manitoba", sf: "2,960", bedrooms: 4, baths: 3.5, price: "$775,000"}
      ];

    let removedHomes = [];

    $('#addHome').removeClass('btn-danger').addClass('btn-success');
    $('h1').addClass('text-center');

    let $newLink = $('<br><br><a id="zillowLink" href="http://www.zillow.com">Visit Zillow.com</a>');
    $('body').append($newLink);
    // Open the new page on new tab
    $('#zillowLink').attr('target', '_blank');

    $('#homes tbody').on('click', 'button', function() {
        // CONSOLE LOGGING THE CLICK OF THE RESET BUTTONS
        console.log(this);
        // REMOVES BUTTON WITH A BUILT IN EFFECT
        let row = $(this).closest('tr');
        // Before removing the row, save its outerHTML
        removedHomes.push(row[0].outerHTML);
        row.fadeOut(500, function() {
            row.remove();
        });
        // Ensure that the "Restore Removed Homes" button is enabled
        $('#restoreHomes').removeAttr('disabled')
    })
})