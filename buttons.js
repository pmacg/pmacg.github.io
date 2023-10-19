function bibtex_click(clicked_btn) {
    this_btn = $(clicked_btn);
    pre_element = this_btn.parent().parent().parent().find('.bibtex');
    pre_element.toggle('fast');
}