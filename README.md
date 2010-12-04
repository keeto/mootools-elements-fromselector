Elements.fromSelector
=====================

Create elements using CSS selector strings. Powered by Slick!


Elements Static Method: fromSelector
------------------------------------

Takes a CSS selector string and returns the corresponding elements.

### Syntax:

	Elements.fromSelector(expression)

### Arguments:

1. `expression` - (string) a CSS selector string.

### Returns:

- (elements) the elements created from the selector string.

### Examples:

Simple selectors:

	// JS
	Elements.fromSelector('div#wrapper.active');

	// HTML
	<div id="wrapper" class="active"></div>

Selector grouping:

	// JS
	Elements.fromSelector('div#wrapper.active, div#content[data-id="001"]');

	// HTML
	<div id="wrapper" class="active"></div>
	<div id="content" data-id="001"></div>

Combinators:

	// JS
	Elements.fromSelector('div p > em[text="Hello"] + strong[text="World"]');

	// HTML
	<div>
		<p><em>Hello</em><strong>World</strong><p>
	</div>

Reverse Combinators:

	// JS
	Elements.fromSelector('em[text="Hello World"] !> p ! div');

	// HTML
	<div>
		<p><em>Hello World</em><p>
	</div>


Implementation Notes
--------------------

- This function always returns an `Elements` instance--regardless of whether there were elements created.
- Like the `Element` constructor, the `fromSelector` function uses `Slick.parse` internally to process the selector string.
- Attribute values are only processed if the equality operator for the attribute selector is `=` (also like `Element`).
- The builder only understands the descendant, child and sibling combinators and their corresponding reverse combinators. Special combinators are not implemented (yet?).
- The descendant and child combinators (` ` and `>`) are treated as the same combinator by the builder. Likewise, the reverse descendant and reverse child combinators are also treated as the same.

Project Stuff
-------------

### Author and License

Mark "Keeto" Obcena <keetology.com>  
Copyright 2010, MIT-style License
