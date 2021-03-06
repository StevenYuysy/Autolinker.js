import { HtmlNode, HtmlNodeConfig } from "./html-node";

/**
 * @class Autolinker.htmlParser.CommentNode
 * @extends Autolinker.htmlParser.HtmlNode
 *
 * Represents an HTML comment node that has been parsed by the
 * {@link Autolinker.htmlParser.HtmlParser}.
 *
 * See this class's superclass ({@link Autolinker.htmlParser.HtmlNode}) for more
 * details.
 */
export class CommentNode extends HtmlNode {

	/**
	 * @cfg {String} comment (required)
	 *
	 * The text inside the comment tag. This text is stripped of any leading or
	 * trailing whitespace.
	 */
	comment: string = '';  // default value just to get the above doc comment in the ES5 output and documentation generator

	/**
	 * @method constructor
	 * @param {Object} cfg The configuration options for this class, specified
	 *   in an Object.
	 */
	constructor( cfg: CommentNodeConfig ) {
		super( cfg );

		this.comment = cfg.comment;
	}


	/**
	 * Returns a string name for the type of node that this class represents.
	 *
	 * @return {String}
	 */
	getType() {
		return 'comment';
	}


	/**
	 * Returns the comment inside the comment tag.
	 *
	 * @return {String}
	 */
	getComment() {
		return this.comment;
	}

}

export interface CommentNodeConfig extends HtmlNodeConfig {
	comment: string;
}