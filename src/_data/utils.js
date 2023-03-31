module.exports = {
  /**
   * Returns back some attributes based on whether the
   * link is active or a parent of an active item
   *
   * @param {String} itemUrl The link in question
   * @param {String} pageUrl The page context
   * @returns {String} The attributes or empty
   */
  getLinkActiveState(itemUrl, pageUrl) {
    let response = '';

    if (itemUrl === pageUrl) {
      response = ' aria-current="page"';
    }

    if (itemUrl.length > 1 && pageUrl.indexOf(itemUrl) === 0) {
      response += ' data-state="active"';
    }

    return response;
  },

  /**
   * Finds the first paragraph element in a string of HTML and returns it.
   *
   * @param {String} content Stringified HTML
   * @returns {String} Just the first paragraph
   */
  getFirstParagraph(content) {
    const regex = /<p[^>]*>.*(?!<\/p)/g;
    const paragraphs = content.val.match(regex);
    return `${paragraphs[0]} ${paragraphs[1]}`;
  }
};
