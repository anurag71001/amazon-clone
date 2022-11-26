// how to make the image occupy full width of page?
.cycle-slideshow {
    position: relative;
    ...
}

.cycle-slideshow:after {
    content: '';
    width: 100%;
    height: 50%; //50% of parent element
    background-color: white;
    position: absolute;
    top: 50%;
    left: 0;
    z-index: 2;
}


