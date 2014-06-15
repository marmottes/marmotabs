
/*
 *  MarmoTabs 1.0.0
 *  Créer très simplement un système de tabulation en JavaScript.
 */

var marmotabs = function(element) {

    return new marmotabs.class(element);

};

marmotabs.onClickEvent = function(element, callback) {

    this.callback = callback;
    this.element = element;

    this.touchstart = function(eventListener) {

        return function(event) {

            eventListener.moved = false;

            eventListener.startX = event.touches[0].clientX;
            eventListener.startY = event.touches[0].clientY;

        }

    }(this);

    this.touchmove = function(eventListener) {

        return function(event) {

            if (Math.abs(event.touches[0].clientX - eventListener.startX) > 10 || Math.abs(event.touches[0].clientY - eventListener.startY) > 10) {
                
                eventListener.moved = true;

            }

        }

    }(this);

    this.touchend = function(eventListener) {

        return function(event) {

            if (!eventListener.moved) {

                eventListener.callback(event);

            }

        }

    }(this);

    this.element.addEventListener("touchstart", this.touchstart, false);
    this.element.addEventListener("touchmove", this.touchmove, false);
    this.element.addEventListener("touchend", this.touchend, false);
    this.element.addEventListener("touchcancel", this.touchend, false);

    this.element.addEventListener("click", callback, false);

};

marmotabs.class = function(element) {

    if (typeof element !== "object") {

        return false;

    }

    this.element = element;
    this.tabs = [];
    this.contents = [];

    for (var i = 0; i < this.element.childNodes.length; i++) {

        var div = this.element.childNodes[i];

        if (div.getAttribute) {

            if (div.getAttribute("role") === "tabs") {

                for (var e = 0; e < div.childNodes.length; e++) {

                    var span = div.childNodes[e];

                    if (span.nodeName != "#text") {

                        this.tabs.push(span);

                    }

                }

            }

            else if (div.getAttribute("role") === "contents") {

                for (var e = 0; e < div.childNodes.length; e++) {

                    var span = div.childNodes[e];

                    if (span.nodeName != "#text") {

                        this.contents.push(span);

                    }

                }

            }

        }

    }

    for (var i = 0; i < this.tabs.length; i++) {

        var tab = this.tabs[i];

        var eventr = new marmotabs.onClickEvent(tab, function(that, id) {

            return function() {

                that.switchTo(id);

            };

        }(this, i));

    }

    this.switchTo(0);

};

marmotabs.class.prototype.switchTo = function(id) {

    for (var i = 0; i < this.tabs.length; i++) {

        var tab = this.tabs[i];

        tab.className = tab.className.replace(" current", "");

    }

    if (this.tabs[id].className.indexOf("current") < 0) {

        this.tabs[id].className += " current";

    }

    for (var i = 0; i < this.contents.length; i++) {

        var content = this.contents[i];

        content.style.display = "none";

    }

    this.contents[id].style.display = "block";

};