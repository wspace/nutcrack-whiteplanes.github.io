// bundle.js
// 
// (The MIT License)
//
// Copyright © 2016 Takuya Katsurada(https://github.com/nutcrack)
//
// Permission is hereby granted, free of charge,
// to any person obtaining a copy of this software and
// associated documentation files (the 'Software'),
// to deal in the Software without restriction,
// including without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software,
// and to permit persons to whom the Software is furnished to do so,
// subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
// IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
// TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
// OTHER DEALINGS IN THE SOFTWARE.
'use strict'

var Application = React.createClass({
    renderForItems: function() {
        return ['swift', 'cs', 'fs', 'php', 'py', 'rb', 'js', 'r', 'jl'].map(function(item, index){
            var link = "https://github.com/whiteplanes/whiteplanes." + item;
            var language = "lang lang-" + item;
            return (
                <li><a href={link} className={language}>●</a></li>
            )
        });
    },
    render: function() {
        return (
            <div className="container">
                <div className="container">
                    <header>
                        <h1>Whiteplanes</h1>
                        <p>Whitespace tried written in various programming languages</p>
                    </header>
                    <section>
                        <ul className="list-inline">
                            { this.renderForItems() }
                        </ul>
                    </section>
                </div>
            </div>
        );
    }
});

ReactDOM.render(<Application />, document.getElementById('main'));
