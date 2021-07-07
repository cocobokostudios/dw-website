import React from 'react';
import Script from 'react-inline-script';

const commentId = 'davidwesst-com';

const Comments = ({ slug }) => {
    return (
    <section>
        <div id="graphcomment"></div>
        <Script>
        {`   /* - - - CONFIGURATION VARIABLES - - - */

            var __semio__params = {
            graphcommentId: "${commentId}", // make sure the id is yours

            behaviour: {
                // HIGHLY RECOMMENDED
                uid: "${slug}", // uniq identifer for the comments thread on your page (ex: your page id)
            },

            // configure your variables here

            }

            /* - - - DON'T EDIT BELOW THIS LINE - - - */

            function __semio__onload() {
            __semio__gc_graphlogin(__semio__params)
            }


            (function() {
            var gc = document.createElement('script'); gc.type = 'text/javascript'; gc.async = true;
            gc.onload = __semio__onload; gc.defer = true; gc.src = 'https://integration.graphcomment.com/gc_graphlogin.js?' + Date.now();
            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(gc);
            })();
        `}
        </Script>
    </section>
    );
};

export default Comments;