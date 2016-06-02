import {CotyaTitle} from "title"

const parseNodeProperties = (node) => {
    let result = {};
    Array.from(node.attributes).forEach((attribute) => {
        "use strict";
        result[attribute.nodeName] = attribute.nodeValue;
    });
    return result;
};

const iterateDom = (domNode) => {
    "use strict";

    const renderableElements = {
        'CotyaTitle': CotyaTitle,
    };
    let result = '';
    Array.from(domNode.childNodes).forEach((node) => {
        if (node.childNodes.length) {
            iterateDom(node)
        } else {
            let elementName = node.nodeName;
            if (renderableElements[elementName]) {
                let properties = parseNodeProperties(node);
                let newNode = (new renderableElements[elementName](properties)).render();
                domNode.replaceChild(
                    newNode,
                    node
                )
            }
        };
    });
};

export const render = (strings, ...values) => {
    const template = String.raw(strings, values);
    let dom = (new DOMParser()).parseFromString(template, "text/xml"); // @fixme seems to be the slowest part
    iterateDom(dom);
    return dom.childNodes[0];
};
