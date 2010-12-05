/* 
---

name: Elements.FromSelector

description: Create new elements using selector strings.

license: MIT-style license.

copyright: Mark Obcena

requires: [Slick.Parser, Elements]

provides: Elements.fromSelector

...
*/


(function(){

Elements.fromSelector = function(str){
	var results = new Element('div'),
		parsed = Slick.parse(str),
		expressions = parsed.expressions,
		len = parsed.length;
	while (len--){
		var previousElement = results,
			expression = expressions[len];
		for (var i = 0, y = expression.length; i < y; i++){
			var current = expression[i],
				element = new Element(current.tag == '*' ? 'div' : current.tag);
			if (current.classList) element.set('class', current.classList.join(' '));
			if (current.attributes){
				for (var attrs = current.attributes, attrslen = attrs.length; attrslen--;){
					var attr = attrs[attrslen];
					if (attr.value != null && attr.operator == '=') element.set(attr.key, attr.value);
				}
			}
			switch (current.combinator){
				case '+':
					element.inject(previousElement, 'after'); break;
				case '!+':
					element.inject(previousElement, 'before'); break;
				case '!>':
				case '!':
					element.wraps(previousElement); break;
				default:
					element.inject(previousElement, 'top'); break;
			}
			previousElement = element;
		}
	}
	return results.getChildren('*');
};

})();
