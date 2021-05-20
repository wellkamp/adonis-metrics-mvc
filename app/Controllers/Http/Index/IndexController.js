'use strict'

class IndexController {
    index({ view }) {
        return view.render('index.index');
    }
}

module.exports = IndexController
