import '../css/styles.css'
import text from './text'


if(module.hot) {
    module.hot.accept('./text.js', function() {
        text()
    })
}