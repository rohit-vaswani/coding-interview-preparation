/*


    HTML Learnings:

    JS Learnings:
        1. window.addEventListener('DOMContentLoaded', e => void 0): To Access DOM Nodes in JS.
        2. document.getElementById(':id'): To access single target DOM
        3. document.getElementsByClassName(':className'): To access ELEMENTS
        4. elem.style.display = "block": To Make the element visible by manipulating style object
        5. elem.classList.add(':className') or elem.classList.remove(':className'): To remove class
        6. elem.addEventListener('click', e => {e.target === modalElem}) -> To check target elem click is elem or not.
        7. event = {target, parentElement} to access target & parentElement
        10. elem.innerHTML = '<span>New content</span>': To set inner content.


     CSS:
     1. margin: auto; to a child element Helps you to center align horizontally.
     2. To center align a child div element: https://medium.com/front-end-weekly/absolute-centering-in-css-ea3a9d0ad72e
            a) Using Flex: justify-content, align-items
            b) Using Margin: margin-top: 50vh; margin-left: 50vw; transform: translate(-50%, -50%)
            c) Using Position: position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%);
     3. width: 50vw; height: 20vh; Refers to 50% of viewport width & 20% of viewport height [JS: window.innerWidth, window.innerHeight]
     4. CSS animation is much better than CSS transition. https://zellwk.com/blog/css-animations/
        Example:
            https://jsfiddle.net/rohit_vaswani/p2vox8b7/35/
            https://medium.com/@josephat94/a-simple-but-awesome-animation-with-css3-for-your-modals-eb24ebe4ab99
            https://css-tricks.com/snippets/css/keyframe-animation-syntax/
        Explanation:
            a) To show Modal, add class 'showModal' & remove class 'hideModal'
            b) showModal {
                   // Animation to be applied after animation ends
                   opacity: 1; transform: scale(1); z-index: 1;
                   animation: showAnim 0.8s
               }

               @keyframes showAnim {
                    from {
                        // Applied at 0%
                        opacity: 0; transform: scale(0); z-index: -1;
                    }
                    to {
                        // Applied at 100%
                        opacity: 1; transform: scale(1); z-index: 1;
                    }
               }
        5.





 */