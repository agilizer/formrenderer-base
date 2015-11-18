$('.config_select').each(function () {
    var stored = store.get($(this).attr('id'));

    if (stored) {
        $(this).val(stored);
    } else {
        $(this).val($(this).find('option').first().val());
    }
});

$('.config_select').change(function () {
    store.set($(this).attr('id'), $(this).val());
    location.reload();
});

// Load libraries
$('head').
    append($('<link rel="stylesheet" type="text/css" />').attr('href', $('#lib').val()));

FormRenderer.BUTTON_CLASS = 'button button-primary btn btn-primary'

// Initialize form
var fr = new FormRenderer($.extend(
    Fixtures.FormRendererOptions[$('#fixture').val()](),
    {
        screendoorBase: 'http://screendoor.dobt.dev',
        onReady: function () {
            console.log('Form is ready!');
        }
    }
));

fr.save = function () {
    this.state.set({
        hasChanges: false
    });
    console.log(this.getValue());
};


var haha = {
    "fields": [{
        "cid": "a8fe36d315d54987a2d3a7543c7e2f38",
        "field_options": {"max": "10", "min": "0"},
        "field_type": "progress",
        "id": "a8fe36d315d54987a2d3a7543c7e2f38",
        "label": "<span class='wenti'>问题经常性</span> <span class='sheng'>生活中，您是否经常会遇到<samp class='replacePain'>“自来水中还有余氯”</samp></span>",
        "description": "<span class='sheng1'>10分代表极度频繁，1分表示完全没有，请您打分。</span>"
    }, {
        "label": "<span class='wenti'>解决紧迫性</span><span class='sheng'><samp class='replacePain'>“自来水中还有余氯”</samp>这件事情是否给您的生活造成了困扰？</span>",
        "field_type": "progress",
        "description": "<span class='sheng1'>10分代非常困扰，1分表示完全没有，请您打分。</span>",
        "field_options": {"min": "0", "max": "10"},
        "cid": "c6"
    }]
}