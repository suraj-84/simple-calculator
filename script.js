$(document).ready(function () {
    const $display = $('#display');
    const $buttons = $('.buttons input[type="button"]');

    $buttons.click(function () {
        const value = $(this).val();
        switch (value) {
            case '=':
                try {
                    $display.val(eval($display.val()));
                } catch (error) {
                    alert('Invalid expression');
                }
                break;
            case 'C':
                $display.val('');
                break;
            default:
                $display.val($display.val() + value);
        }
    });
});
